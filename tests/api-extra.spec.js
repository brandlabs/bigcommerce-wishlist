/**
 * Unit tests for the API methods
 */

/* eslint-disable no-undef */

import WishlistManager from '../src/wishlist-manager';

describe('additional API methods', () => {
    let wm;
    let makeRequest;

    function setNextResponse(response) {
        makeRequest.mockImplementationOnce((...args) => {
            const callback = args[4];
            callback(null, JSON.stringify(response));
        });
    }

    beforeAll(() => {
        makeRequest = jest.fn();
        global.stencilUtils = { api: { search: { makeRequest } } };
    });

    afterAll(() => {
        delete global[stencilUtils];
    });

    beforeEach(() => {
        makeRequest.mockClear();

        // Fresh new instance, with cleared cache
        wm = new WishlistManager();
        localStorage.clear();
    });

    test('Get All Wishlists Details', async () => {
        const wishlists = [
            { id: 1, name: 'My Wishlist' },
            { id: 2, name: 'Second Wishlist' },
        ];

        const wishlistDetails1 = { id: 1, items: [{ product_id: 123 }] };
        const wishlistDetails2 = { id: 2, items: [{ product_id: 456 }] };

        setNextResponse({ customer: { wishlists } });
        setNextResponse({ wishlist: wishlistDetails1 });
        setNextResponse({ wishlist: wishlistDetails2 });

        await wm.getAllWishlistsDetails();

        expect(makeRequest).toBeCalledTimes(3);
        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php');
        expect(makeRequest.mock.calls[1][0]).toBe('http://localhost/wishlist.php?action=viewwishlistitems&wishlistid=1');
        expect(makeRequest.mock.calls[2][0]).toBe('http://localhost/wishlist.php?action=viewwishlistitems&wishlistid=2');
        expect(wm.wishlists).toEqual({
            1: { id: 1, name: 'My Wishlist', items: [{ product_id: 123 }] },
            2: { id: 2, name: 'Second Wishlist', items: [{ product_id: 456 }] },
        });
    });

    test('Is Product In Any Wishlist', async () => {
        const wishlists = [
            { id: 1, name: 'My Wishlist' },
            { id: 2, name: 'Second Wishlist' },
        ];

        const wishlistDetails1 = { id: 1, items: [{ product_id: 123 }] };
        const wishlistDetails2 = { id: 2, items: [{ product_id: 456 }] };

        setNextResponse({ customer: { wishlists } });
        setNextResponse({ wishlist: wishlistDetails1 });
        setNextResponse({ wishlist: wishlistDetails2 });

        const isWishedProduct123 = await wm.isProductInAnyWishlist(123);

        expect(makeRequest).toBeCalledTimes(3);
        expect(isWishedProduct123).toBe(true);

        const isWishedProduct456 = await wm.isProductInAnyWishlist(456);

        expect(makeRequest).toBeCalledTimes(3); // No more calls. Cache being used.
        expect(isWishedProduct456).toBe(true);

        const isWishedProduct789 = await wm.isProductInAnyWishlist(789);

        expect(makeRequest).toBeCalledTimes(3); // No more calls. Cache being used.
        expect(isWishedProduct789).toBe(false);
    });

    test('Provide wishlists from context on init', async () => {
        const context = {
            wishlists: [
                { id: 10, name: 'Nice' },
                { id: 11, name: 'Cool' },
                { id: 12, name: 'Great' },
            ],
        };

        wm.init(context);

        const getAllWishlistsFromCache = jest.spyOn(wm, 'getAllWishlistsFromCache');
        const getWishlistFromCache = jest.spyOn(wm, 'getWishlistFromCache');

        const result = await wm.getAllWishlists();

        expect(getAllWishlistsFromCache).toBeCalledTimes(1);
        expect(getWishlistFromCache).toBeCalledTimes(3);
        expect(result).toEqual(context.wishlists);
        expect(Object.values(wm.wishlists)).toEqual(context.wishlists);
    });

    test('API call when wishlists not provided on init', async () => {
        const wishlists = [
            { id: 1, name: 'My Wishlist' },
            { id: 2, name: 'Second Wishlist' },
            { id: 3, name: 'Most Wanted' },
        ];
        setNextResponse({ customer: { wishlists } });

        const getAllWishlists = jest.spyOn(wm, 'getAllWishlists');

        await wm.init();

        expect(getAllWishlists).toBeCalledTimes(1);
        expect(Object.values(wm.wishlists)).toEqual(wishlists);
    });

    test('Cache hit on API call', async () => {
        const getAllWishlistsFromCache = jest.spyOn(wm, 'getAllWishlistsFromCache');
        const getWishlistFromCache = jest.spyOn(wm, 'getWishlistFromCache');

        const wishlists = [
            { id: 1, name: 'My Wishlist' },
            { id: 2, name: 'Second Wishlist' },
            { id: 3, name: 'Most Wanted' },
        ];

        setNextResponse({ customer: { wishlists } });
        await wm.getAllWishlists();

        expect(getAllWishlistsFromCache).toBeCalledTimes(0);
        expect(getWishlistFromCache).toBeCalledTimes(0);

        // Again!
        await wm.getAllWishlists();

        expect(getAllWishlistsFromCache).toBeCalledTimes(1);
        expect(getWishlistFromCache).toBeCalledTimes(3);

        // Again!
        await wm.getAllWishlists();

        expect(getAllWishlistsFromCache).toBeCalledTimes(2);
        expect(getWishlistFromCache).toBeCalledTimes(6);

        // Disable cache
        wm.useCache = false;
        setNextResponse({ customer: { wishlists } });

        // Again!
        await wm.getAllWishlists();

        expect(getAllWishlistsFromCache).toBeCalledTimes(2);
        expect(getWishlistFromCache).toBeCalledTimes(6);

        // Revert
        wm.useCache = true;

        // Remove spies
        getAllWishlistsFromCache.mockRestore();
        getWishlistFromCache.mockRestore();
    });
});

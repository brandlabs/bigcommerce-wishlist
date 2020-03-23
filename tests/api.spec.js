/**
 * Unit tests for the API methods
 */

/* eslint-disable no-undef */

import WishlistManager from '../src/wishlist-manager';

describe('API methods', () => {
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
        wm = new WishlistManager();
    });

    afterAll(() => {
        delete global[stencilUtils];
    });

    beforeEach(() => {
        makeRequest.mockClear();
    });

    test('Create Wishlist', async () => {
        const id = 108; // Wishlist ID
        const name = 'Amazing';

        setNextResponse({ customer: { wishlists: [{ id, name }] } });

        const result = await wm.createWishlist({ name });

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php?action=addwishlist');
        expect(makeRequest.mock.calls[0][2].params).toEqual({ submit: '', wishlistname: name });
        expect(result).toEqual({ id, name });
        expect(wm.wishlists[id]).toEqual({ id, name });
    });

    test('Create Wishlist - public', () => {
        const name = 'Incredible';

        wm.createWishlist({ name, is_public: true });

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php?action=addwishlist');
        expect(makeRequest.mock.calls[0][2].params).toEqual({ submit: '', wishlistname: name, publicwishlist: 'on' });
    });

    test('Create Wishlist - with product', () => {
        const name = 'Interesting';
        const product_id = 90;

        wm.createWishlist({ name, product_id });

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php?action=addwishlist&product_id=90');
        expect(makeRequest.mock.calls[0][2].params).toEqual({ submit: '', wishlistname: name });
    });

    test('Delete Wishlist', async () => {
        const id = 108; // Wishlist ID

        setNextResponse({ customer: { wishlists: [] } });

        expect(wm.wishlists[id]).toBeDefined();
        await wm.deleteWishlist(id);
        expect(wm.wishlists[id]).toBeUndefined();

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php?action=deletewishlist&wishlistid=108');
        expect(makeRequest.mock.calls[0][2].params).toEqual({});
    });

    test('Update Wishlist', async () => {
        const id = 50; // Wishlist ID
        const name = 'Chip';
        wm.setWishlistDetails({ id, name });

        expect(wm.wishlists[id].name).toBe(name);

        const newName = 'Dale';
        setNextResponse({ customer: { wishlists: [{ id, name: newName }] } });

        const result = await wm.updateWishlist(id, { name: newName });

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php?action=editwishlist&wishlistid=50');
        expect(makeRequest.mock.calls[0][2].params).toEqual({ submit: '', wishlistname: newName });
        expect(result).toEqual({ id, name: newName });
        expect(wm.wishlists[id].name).toBe(newName);
    });

    test('Add Wishlist Item', async () => {
        const id = 50; // Wishlist ID
        const product_id = 111;
        const item_id = 1008;

        setNextResponse({ wishlist: { id, items: [{ id: item_id, product_id }] } });

        const result = await wm.addWishlistItem(id, product_id);

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php?action=add&wishlistid=50&product_id=111');
        expect(makeRequest.mock.calls[0][2].params).toEqual({});
        expect(result).toEqual({ id: item_id, product_id });
        expect(wm.wishlists[id].items).toContainEqual({ id: item_id, product_id });
    });

    test('Delete Wishlist Item', async () => {
        const id = 50; // Wishlist ID
        const product_id = 111;
        const item_id = 1008;

        setNextResponse({ wishlist: { id, items: [] } });

        expect(wm.wishlists[id].items).toContainEqual({ id: item_id, product_id });

        await wm.deleteWishlistItem(id, item_id);

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php?action=remove&wishlistid=50&item_id=1008');
        expect(makeRequest.mock.calls[0][2].params).toEqual({});
        expect(wm.wishlists[id].items).not.toContainEqual({ id: item_id, product_id });
    });

    test('Get All Wishlists', async () => {
        wm.setWishlists([]); // Clear wishlists

        const wishlists = [
            { id: 1, name: 'My Wishlist' },
            { id: 2, name: 'Second Wishlist' },
            { id: 3, name: 'Most Wanted' },
            { id: 4, name: 'Buy List' },
            { id: 5, name: 'Things I do NOT want' },
        ];

        setNextResponse({ customer: { wishlists } });

        const result = await wm.getAllWishlists();

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php');
        expect(makeRequest.mock.calls[0][2].params).toBeUndefined();
        expect(result).toEqual(wishlists);
        expect(Object.keys(wm.wishlists).length).toBe(5);
        expect(Object.values(wm.wishlists)).toEqual(wishlists);
    });

    test('Get Wishlist', async () => {
        const id = 3; // Wishlist ID
        const name = 'Most Wanted';
        const product_id = 217;

        setNextResponse({ wishlist: { id, items: [{ product_id }] } });

        const result = await wm.getWishlist(id);

        expect(makeRequest.mock.calls[0][0]).toBe('http://localhost/wishlist.php?action=viewwishlistitems&wishlistid=3');
        expect(makeRequest.mock.calls[0][2].params).toBeUndefined();
        expect(result).toEqual({ id, items: [{ product_id }] });
        expect(wm.wishlists[id]).toEqual({ id, name, items: [{ product_id }] });
    });
});

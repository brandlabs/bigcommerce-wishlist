/**
 * Unit tests for wishlists data
 *
 * Wishlists data is stored at "wishlists" property of the WishlistManager class instance.
 *
 * There are two data sources:
 * - localStorage (cache)
 * - remote requests (AJAX calls to BC)
 *
 * And there are two different types of wishlist records:
 * - "summary", which does not contain the items array (it has a "num_items" field)
 * - "detailed", which contains an array of items (it does not have "num_items" field)
 * (there are other minor differences)
 *
 * When both data sources are read, the "wishlists" property is updated.
 * In other words: all new wishlist information which arrives is written to the internal "wishlists" object.
 * This happens for all remote requests and cache "get" reads,
 * but also for all "post" requests which creates, deletes, updates wishlists, and adds or removes items.
 * This can be achieved because for all remote operations, the server provides refreshed data.
 *
 * Two functions are used to write/update the "wishlists" property:
 * "setWishlists" (bulk update) and "setWishlistDetails" (single wishlist update)
 *
 * These write/update operations DO NOT replace existing wishlist objects,
 * because each type of wishlist record contains a different set of fields.
 *
 * Thus, if a wishlist object already exists, it will not be replaced;
 * instead, the new object properties will be assigned to the existing one.
 */

/* eslint-disable no-undef */

import WishlistManager from '../src/wishlist-manager';

describe('wishlists data', () => {
    beforeAll(() => {
        global.stencilUtils = { api: { search: { makeRequest() {} } } };
    });

    afterAll(() => {
        delete global[stencilUtils];
    });

    test('Set Wishlists', () => {
        const wishlists1 = [
            { id: 1, name: 'My Wishlist' },
            { id: 2, name: 'Second Wishlist', is_public: true },
            { id: 3, name: 'Most Wanted', items: [{ product_id: 123 }] },
        ];

        const wm = new WishlistManager();
        const setWishlistDetails = jest.spyOn(wm, 'setWishlistDetails');

        expect(wm.wishlistsLoaded).toBe(false);

        wm.setWishlists(wishlists1);

        expect(wm.wishlistsLoaded).toBe(true);
        expect(setWishlistDetails).toBeCalledTimes(3);
        expect(wm.wishlists).toEqual({
            1: { id: 1, name: 'My Wishlist' },
            2: { id: 2, name: 'Second Wishlist', is_public: true },
            3: { id: 3, name: 'Most Wanted', items: [{ product_id: 123 }] },
        });

        const wishlists2 = [
            // removed wishlist 1
            { id: 2, name: 'Renamed Wishlist' },
            { id: 3, items: [{ product_id: 456 }, { product_id: 789 }] },
            { id: 9, name: 'Test List' },
        ];

        wm.setWishlists(wishlists2);
        expect(setWishlistDetails).toBeCalledTimes(6); // 3 + 3
        expect(wm.wishlists).toEqual({
            2: { id: 2, name: 'Renamed Wishlist', is_public: true },
            3: { id: 3, name: 'Most Wanted', items: [{ product_id: 456 }, { product_id: 789 }] },
            9: { id: 9, name: 'Test List' },
        });
    });

    test('Set Wishlist Details', () => {
        const wishlists = [
            { id: 1, name: 'My Wishlist' },
            { id: 2, name: 'Second Wishlist', is_public: true },
            { id: 3, name: 'Most Wanted', items: [{ product_id: 123 }] },
        ];

        const wm = new WishlistManager();
        wm.setWishlists(wishlists);

        expect(wm.wishlists[2]).toEqual({ id: 2, name: 'Second Wishlist', is_public: true });

        // Change name
        wm.setWishlistDetails({ id: 2, name: 'Renamed Wishlist' });

        expect(wm.wishlists[2]).toEqual({ id: 2, name: 'Renamed Wishlist', is_public: true });

        // Change items
        wm.setWishlistDetails({ id: 3, items: [{ product_id: 456 }, { product_id: 789 }] });

        expect(wm.wishlists[3]).toEqual({ id: 3, name: 'Most Wanted', items: [{ product_id: 456 }, { product_id: 789 }] });

        // New wishlist
        wm.setWishlistDetails({ id: 9, name: 'Test List' });

        expect(wm.wishlists[9]).toEqual({ id: 9, name: 'Test List' });
    });
});

/**
 * Unit tests for caching
 */

/* eslint-disable no-undef */

import WishlistManager from '../src/wishlist-manager';

describe('cache functions', () => {
    let wm;

    beforeAll(() => {
        global.stencilUtils = { api: { search: { makeRequest() {} } } };
        wm = new WishlistManager();
    });

    afterAll(() => {
        delete global[stencilUtils];
    });

    beforeEach(() => {
        localStorage.clear();
    });

    const someWishlists = [
        { id: 108, name: 'Best Wishes' },
        { id: 123, name: 'Even Better Wishes' },
        { id: 132, name: 'More Wishes' },
    ];

    test('Store and retrieve an item from cache', () => {
        const id = 123;
        const wishlist = { id };

        wm.saveWishlistInCache(wishlist);
        const cachedWishlist = wm.getWishlistFromCache(id);

        expect(cachedWishlist).toEqual(wishlist);
    });

    test('Cache is stored in localStorage', () => {
        const id = 123;
        const wishlist = { id };

        wm.saveWishlistInCache(wishlist);
        localStorage.clear();
        const cachedWishlist = wm.getWishlistFromCache(id);

        expect(cachedWishlist).toBeUndefined();
    });

    test('Retrieve all items from cache', () => {
        someWishlists.forEach(wishlist => wm.saveWishlistInCache(wishlist));

        const cachedWishlists = wm.getAllWishlistsFromCache();

        expect(cachedWishlists).toEqual(someWishlists);
    });

    test('Removal of deleted entries from cache', () => {
        someWishlists.forEach(wishlist => wm.saveWishlistInCache(wishlist));

        const idsToKeep = someWishlists.map(wishlist => wishlist.id);
        idsToKeep.pop(); // Remove one item

        wm.purgeWishlistsCache(idsToKeep);

        const cachedWishlists = wm.getAllWishlistsFromCache();

        expect(cachedWishlists.length).toBe(someWishlists.length - 1);
    });

    test('Cache duration', () => {
        const value = 'anything';
        const tenMinutesAgo = Date.now() - (10 * 60 * 1000);
        const twoHoursAgo = Date.now() - (120 * 60 * 1000);

        const recentEntry = { value, created_at: tenMinutesAgo };
        expect(wm.isExpired(recentEntry)).toBe(false);

        const expiredEntry = { value, created_at: twoHoursAgo };
        expect(wm.isExpired(expiredEntry)).toBe(true);

        // Save current cache duration
        const defaultCacheDuration = wm.cacheDuration;

        // Change cache duration from the default (60 minutes) to 5 minutes
        wm.cacheDuration = 5;
        expect(wm.isExpired(recentEntry)).toBe(true);

        // Revert back to default
        wm.cacheDuration = defaultCacheDuration;
    });
});

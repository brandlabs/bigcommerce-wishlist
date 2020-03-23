/**
 * Unit tests for urls and getUrl
 */

/* eslint-disable no-undef */

import WishlistManager from '../src/wishlist-manager';

describe('urls and getUrl', () => {
    let wm;

    beforeAll(() => {
        global.stencilUtils = { api: { search: { makeRequest() {} } } };
        wm = new WishlistManager();
    });

    afterAll(() => {
        delete global[stencilUtils];
    });

    test('Basic getUrl test', () => {
        const url = wm.getUrl('all');
        expect(url).toBe('http://localhost/wishlist.php');
    });

    test('Configure "base" and a custom key', () => {
        wm.urls.base = 'https://example.com';
        wm.urls.fakepoint = '/revert';

        const url = wm.getUrl('fakepoint');
        expect(url).toBe('https://example.com/revert');
    });

    test('Query string parameter', () => {
        const url = wm.getUrl('fakepoint', { commit_id: 'a1b2c3d4' });
        expect(url).toBe('https://example.com/revert?commit_id=a1b2c3d4');
    });

    test('Array notation', () => {
        const url = wm.getUrl(['fakepoint', { commit_id: 'a1b2c3d4' }]);
        expect(url).toBe('https://example.com/revert?commit_id=a1b2c3d4');
    });

    test('Multiple query string parameters', () => {
        const url = wm.getUrl('add_item', { wishlist_id: 1, product_id: 108 });
        expect(url).toBe('https://example.com/wishlist.php?action=add&wishlist_id=1&product_id=108');
    });

    test('Configuring urls through "init"', () => {
        const context = {
            urls: {
                account: {
                    wishlists: {
                        all: '/experiment.php',
                    },
                },
            },
        };
        wm.init(context);

        const url = wm.getUrl('all');
        expect(url).toBe('https://example.com/experiment.php');
    });

    test('Using weird characters', () => {
        const url = wm.getUrl('delete_item', { 'z+(1)': 'A%B$C# D&E?F!' });
        expect(url).toBe('https://example.com/wishlist.php?action=remove&z%2B%281%29=A%25B%24C%23+D%26E%3FF%21');
    });
});

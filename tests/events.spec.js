/**
 * Unit tests for events
 */

/* eslint-disable no-undef */

import WishlistManager from '../src/wishlist-manager';

describe('event listeners', () => {
    let wm;
    let doSomething;
    let doSomethingElse;

    beforeAll(() => {
        function makeRequest(url, method, options, remote, callback) {
            const response = JSON.stringify(options.params || {});
            callback(null, response);
        }

        global.stencilUtils = { api: { search: { makeRequest } } };
        wm = new WishlistManager();

        // Event Listeners
        doSomething = jest.fn();
        doSomethingElse = jest.fn();
    });

    afterAll(() => {
        delete global[stencilUtils];
    });

    test('Register/Unregister event listener', () => {
        // Register event listener
        wm.on('someEvent', doSomething);
        wm.emitEvent('someEvent');
        expect(doSomething).toBeCalledTimes(1);
    });

    test('Trigger same event again', () => {
        wm.emitEvent('someEvent');
        expect(doSomething).toBeCalledTimes(2);
    });

    test('Unregister event listener', () => {
        wm.off('someEvent', doSomething);
        wm.emitEvent('someEvent');
        expect(doSomething).toBeCalledTimes(2);
        expect(doSomething).not.toBeCalledTimes(3);
    });

    test('Only one payload parameter is passed', () => {
        wm.on('otherEvent', doSomethingElse);
        wm.emitEvent('otherEvent', 'one', 'two', 'three');
        expect(doSomethingElse).not.lastCalledWith('one', 'two', 'three');
        expect(doSomethingElse).lastCalledWith('one');
    });

    test('Payload object', () => {
        const payload = { a: 1, b: 2, c: 3 };
        wm.emitEvent('otherEvent', payload);
        expect(doSomethingElse).lastCalledWith({ a: 1, b: 2, c: 3 });
    });

    test('Events configuration', () => {
        const newEventHandler = jest.fn();
        const surpriseHandler = jest.fn();

        // Attach an event reference to a string
        wm.events.newEvent = 'surprise';

        wm.on(wm.events.newEvent, newEventHandler);
        wm.on('surprise', surpriseHandler);

        wm.emitEvent(wm.events.newEvent);
        wm.emitEvent('surprise');

        expect(newEventHandler).toBeCalledTimes(2);
        expect(surpriseHandler).toBeCalledTimes(2);
    });

    describe('wishlist events', () => {
        let request;

        function setNextResponse(value) {
            request.mockReturnValueOnce(Promise.resolve(value));
        }

        beforeAll(() => {
            request = jest.spyOn(wm, 'request');
        });

        afterAll(() => {
            request.mockRestore();
        });

        beforeEach(() => {
            doSomething.mockClear();
        });

        test('createWishlist event', async () => {
            const id = 108;
            const name = 'Best Wishes';

            setNextResponse({ customer: { wishlists: [{ id, name }] } });

            wm.on(wm.events.createWishlist, doSomething);
            await wm.createWishlist({ name });
            expect(doSomething).lastCalledWith({ wishlist: { id, name } });
        });

        test('deleteWishlist event', async () => {
            wm.on(wm.events.deleteWishlist, doSomething);
            await wm.deleteWishlist(123);
            expect(doSomething).lastCalledWith({ wishlistid: 123 });
        });

        test('updateWishlist event', async () => {
            const id = 123;
            const name = 'Even Better Wishes';

            setNextResponse({ customer: { wishlists: [{ id, name }] } });

            wm.on(wm.events.updateWishlist, doSomething);
            await wm.updateWishlist(id, { name });
            expect(doSomething).lastCalledWith({ wishlist: { id, name } });
        });

        test('deleteWishlistItem event', async () => {
            wm.on(wm.events.deleteWishlistItem, doSomething);
            await wm.deleteWishlistItem(456, 789);
            expect(doSomething).lastCalledWith({ wishlistid: 456, item_id: 789 });
        });

        test('addWishlistItem event', async () => {
            const id = 456;
            const product_id = 789;

            setNextResponse({ wishlist: { id, items: [{ product_id }] } });

            wm.on(wm.events.addWishlistItem, doSomething);
            await wm.addWishlistItem(id, product_id);
            expect(doSomething).lastCalledWith({ wishlist: { id, items: [{ product_id }] }, item: { product_id } });
        });
    });
});

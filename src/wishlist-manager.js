/**
 * Wishlist API functionality in the front-end, for Stencil themes
 */

/**
 * WishlistManager class provides easy-to-use methods
 * to retrieve, edit, delete and create wishlists
 * directly from the store front-end.
 */
class WishlistManager {
    /**
     * Constructs a new WishlistManager instance.
     *
     * @param {object}   options            The options argument
     * @param {boolean}  options.useCache   Use cached data when possible
     */
    constructor({ useCache = true, cacheDuration = 60 } = {}) {
        // Whether to use cache or not
        this.useCache = Boolean(useCache);

        // Cache entry expiration time, in minutes
        this.cacheDuration = Number(cacheDuration);

        // List of URL paths
        this.urls = {
            base: window.location.origin,
            all: '/wishlist.php',
            add: '/wishlist.php?action=addwishlist',
            edit: '/wishlist.php?action=editwishlist',
            delete: '/wishlist.php?action=deletewishlist',
            view: '/wishlist.php?action=viewwishlistitems',
            add_item: '/wishlist.php?action=add',
            delete_item: '/wishlist.php?action=remove',
            share: '/wishlist.php?action=sharewishlist',
        };

        // List of events
        this.events = {
            createWishlist: 'createWishlist',
            deleteWishlist: 'deleteWishlist',
            updateWishlist: 'updateWishlist',
            addWishlistItem: 'addWishlistItem',
            deleteWishlistItem: 'deleteWishlistItem',
        };

        // List of event listeners - keyed by event name
        this.eventListeners = {};

        // Use "makeRequest" from stencil-utils to make AJAX requests
        // eslint-disable-next-line no-undef
        this.makeRequest = stencilUtils.api.search.makeRequest;

        // Whether the list of all wishlists has been set once
        this.wishlistsLoaded = false;

        // Wishlists data - keyed by wishlist ID
        this.wishlists = {};
    }

    /**
     * Cache warming and initial wishlists fetch
     *
     * @param {object} context             Stencil context
     * @param {array}  context.wishlists   Wishlists
     * @param {object} context.urls        URLs
     */
    async init({ wishlists, urls } = {}) {
        // Use wishlists URLs from context
        if (urls && urls.account && urls.account.wishlists) {
            Object.assign(this.urls, urls.account.wishlists);
        }

        // Cache warming
        if (this.useCache) {
            this.getAllWishlistsFromCache();
        }

        // Initial wishlists fetch, if not available in context
        if (Array.isArray(wishlists)) {
            this.setWishlists(wishlists);
        } else {
            await this.getAllWishlists(true);
        }
    }

    /* --- API --- */

    /**
     * Gets all wishlists
     *
     * @return {Promise<array>}   All wishlists
     */
    async getAllWishlists(forceFetch = false) {
        // Try loading from cache
        if (!forceFetch && this.useCache && this.wishlistsLoaded) {
            const wishlists = this.getAllWishlistsFromCache();
            if (wishlists) {
                return wishlists;
            }
        }

        const content = await this.request('all');
        return content && content.customer && content.customer.wishlists;
    }

    /**
     * Gets a wishlist
     *
     * @param  {integer} wishlistid   Wishlist ID
     * @return {Promise<object>}      The wishlist
     */
    async getWishlist(wishlistid, forceFetch = false) {
        // Try loading from cache
        if (!forceFetch && this.useCache) {
            const wishlist = this.getWishlistFromCache(wishlistid);
            if (wishlist && Array.isArray(wishlist.items)) {
                return wishlist;
            }
        }

        const content = await this.request(['view', { wishlistid }]);
        return content && content.wishlist;
    }

    /**
     * Creates a wishlist
     *
     * @param  {object}  params             The wishlist attributes
     * @param  {string}  params.name        Wishlist name (rquired)
     * @param  {boolean} params.is_public   Indicates if wishlist is public (required)
     * @param  {integer} params.product_id  ID of a product to be added to the wishlist (optional)
     * @return {Promise<object>}            The created wishlist
     * @fires  createWishlist
     */
    async createWishlist({ name, is_public, product_id }) {
        const urlInfo = ['add'];
        if (product_id) {
            urlInfo.push({ product_id });
        }

        const payload = {
            submit: '',
            wishlistname: name,
        };
        if (is_public) {
            payload.publicwishlist = 'on';
        }

        const content = await this.request(urlInfo, payload);

        let wishlist;

        // The response varies according to the presence or absence of product ID in the request
        if (product_id) {
            wishlist = content && content.wishlist;
        } else {
            // Get all wishlists with the provided name (the newly created wishlist is not provided separately)
            const wishlists = content && content.customer && Array.isArray(content.customer.wishlists)
                && content.customer.wishlists.filter(item => (item.name === name));

            // From these, pick the wishlist with highest ID
            wishlist = Array.isArray(wishlists)
                && wishlists.reduce((current, next) => (current.id > next.id ? current : next));
        }

        this.emitEvent(this.events.createWishlist, { wishlist });

        return wishlist;
    }

    /**
     * Deletes a wishlist
     *
     * @param  {integer} wishlistid   Wishlist ID
     * @return {Promise<undefined>}
     * @fires  deleteWishlist
     */
    async deleteWishlist(wishlistid) {
        await this.request(['delete', { wishlistid }], {});

        this.emitEvent(this.events.deleteWishlist, { wishlistid });
    }

    /**
     * Updates a wishlist
     *
     * @param  {integer}  wishlistid         Wishlist ID
     * @param  {object}   params             The wishlist attributes
     * @param  {string}   params.name        Wishlist name (required)
     * @param  {boolean}  params.is_public   Indicates if the wishlist is public (required)
     * @return {Promise<wishlist>}           The updated wishlist
     * @fires  updateWishlist
     */
    async updateWishlist(wishlistid, { name, is_public }) {
        const payload = {
            submit: '',
            wishlistname: name,
        };

        if (is_public) {
            payload.publicwishlist = 'on';
        }

        const content = await this.request(['edit', { wishlistid }], payload);

        const wishlist = content && content.customer && Array.isArray(content.customer.wishlists)
            && content.customer.wishlists.find(item => (item.id === Number(wishlistid)));

        this.emitEvent(this.events.updateWishlist, { wishlist });

        return wishlist;
    }

    /**
     * Adds a product to a wishlist
     *
     * @param  {integer} wishlistid   Wishlist ID
     * @param  {integer} product_id   ID of the product to be added
     * @return {Promise<item>}        The added item
     * @fires  addWishlistItem
     */
    async addWishlistItem(wishlistid, product_id) {
        const content = await this.request(['add_item', { wishlistid, product_id }], {});

        const wishlist = content && content.wishlist;

        const item = wishlist && Array.isArray(wishlist.items)
            && wishlist.items.find(wishlistItem => (wishlistItem.product_id === Number(product_id)));

        this.emitEvent(this.events.addWishlistItem, { wishlist, item });

        return item;
    }

    /**
     * Removes a product from a wishlist
     *
     * @param  {integer} wishlistid  Wishlist ID
     * @param  {integer} item_id     Wishlist item ID
     * @return {Promise<undefined>}
     * @fires  deleteWishlistItem
     */
    async deleteWishlistItem(wishlistid, item_id) {
        await this.request(['delete_item', { wishlistid, item_id }], {});

        this.emitEvent(this.events.deleteWishlistItem, { wishlistid, item_id });
    }

    /* --- EXTENDED API --- */

    /**
     * Gets all wishlists details:
     * - retrieves the items for all wishlists
     * - provides an object keyed by the wishlists IDs
     * - this object is also available as this.wishlists
     *
     * @return {Promise<object>}   All wishlists details.
     */
    async getAllWishlistsDetails() {
        const wishlists = await this.getAllWishlists();
        await Promise.all(wishlists.map(wishlist => this.getWishlist(wishlist.id)));
        return Object.values(this.wishlists);
    }

    /**
     * Determines whether the specified product identifier belongs to any wishlist items
     *
     * @param  {integer} product_id   Product ID
     * @return {Promise<boolean>}     True if the specified product ID belongs to any wishlist, False otherwise
     */
    async isProductInAnyWishlist(product_id) {
        const wishlists = await this.getAllWishlistsDetails();

        for (let wishlist, item, i = 0; i < wishlists.length; i++) {
            wishlist = wishlists[i];
            item = wishlist.items.find(wishlistItem => wishlistItem.product_id === Number(product_id));
            if (item) {
                return true;
            }
        }

        return false;
    }

    /* --- REMOTE REQUEST --- */

    /**
     * Builds URL for the remote requests
     * It uses this.urls.base as base, and this.urls[key] as path
     *
     * Both arguments can be passed as an array, in the first argument
     *
     * @param  {string} key      URL key in this.urls object
     * @param  {object} params   Query string parameters to be added
     * @return {string}          Full URL
     */
    getUrl(key, params) {
        if (Array.isArray(key)) {
            // eslint-disable-next-line no-param-reassign
            [key, params] = key;
        }

        const url = new URL(this.urls[key], this.urls.base);

        if (params) {
            Object.keys(params).forEach(name => {
                url.searchParams.append(name, params[name]);
            });
        }

        return url.toString();
    }

    /**
     * Wrapper around stencil-utils "makeRequest" to perform the remote calls:
     * - urlInfo is passed as argument to this.getUrl
     * - if payload is undefined, 'GET' method will be used; otherwise, 'POST'
     * - templates/components/custom/json-this.html file is required in the theme
     * - makeRequest takes care of stencil headers, including the XSRF token
     * - returned wishlists data is automatically used to populate this.wishlists
     *
     * @param  {string|array} urlInfo   The url information (key and params)
     * @param  {object}       payload   The request payload
     * @return {Promise<object>}        The response object (parsed JSON)
     */
    async request(urlInfo, payload) {
        const url = this.getUrl(urlInfo);
        const method = (typeof payload === 'undefined') ? 'GET' : 'POST';
        const options = {
            template: 'custom/json-this',
        };
        if (method === 'POST') {
            options.params = payload;
        }
        return new Promise((resolve, reject) => {
            this.makeRequest(url, method, options, false, (error, response) => {
                if (error) {
                    reject(error);
                } else {
                    try {
                        const content = JSON.parse(response);
                        if (content && content.customer && Array.isArray(content.customer.wishlists)) {
                            this.setWishlists(content.customer.wishlists);
                        }
                        if (content && content.wishlist && Array.isArray(content.wishlist.items)) {
                            this.setWishlistDetails(content.wishlist);
                        }
                        resolve(content);
                    } catch (contentError) {
                        reject(contentError);
                    }
                }
            });
        });
    }

    /* --- LOCAL DATA --- */

    /**
     * Updates this.wishlists with the provided wishlists information
     *
     * @param {array} wishlists   The wishlists data
     */
    setWishlists(wishlists) {
        // Update this.wishlists
        wishlists.forEach(wishlist => this.setWishlistDetails(wishlist));

        // Pluck the wishlists IDs as strings
        const wishlistids = wishlists.reduce((ids, wishlist) => {
            ids.push(wishlist.id);
            return ids;
        }, []);

        // Remove the entries in this.wishlists which does not exist in wishlists
        Object.keys(this.wishlists).forEach(wishlistid => {
            if (wishlistids.indexOf(Number(wishlistid)) === -1) {
                delete this.wishlists[wishlistid];
            }
        });
        this.purgeWishlistsCache(wishlistids);

        this.wishlistsLoaded = true;
    }

    /**
     * Updates this.wishlists with the information provided for a single wishlist
     *
     * @param {object} wishlist   The wishlist data
     */
    setWishlistDetails(wishlist) {
        if (typeof this.wishlists[wishlist.id] === 'undefined') {
            this.wishlists[wishlist.id] = wishlist;
        } else {
            Object.assign(this.wishlists[wishlist.id], wishlist);
        }

        // If the items array is updated, we take care of updating num_items accordingly
        if (Array.isArray(wishlist.items) && (typeof this.wishlists[wishlist.id].num_items === 'number')) {
            this.wishlists[wishlist.id].num_items = wishlist.items.length;
        }

        this.saveWishlistInCache(this.wishlists[wishlist.id]);
    }

    /* --- CACHE --- */

    /**
     * Removes deleted entries from wishlists cache
     *
     * @param {array}  wishlistids   IDs of the current wishlists to keep
     */
    purgeWishlistsCache(wishlistids) {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('wishlist-'));
        const keyRegex = /^wishlist-(\d+)$/;
        keys.forEach(key => {
            const match = key.match(keyRegex);
            if (match) {
                const wishlistid = match[1];
                // Remove the cached entry which does not exist in wishlists anymore
                if (wishlistids.indexOf(Number(wishlistid)) === -1) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    /**
     * Store a wishlist in cache
     *
     * @param {object} wishlist   Wishlist object
     */
    saveWishlistInCache(wishlist) {
        // Add wishlist to cache
        const key = `wishlist-${wishlist.id}`;
        const created_at = Date.now();

        localStorage.setItem(key, JSON.stringify({ created_at, wishlist }));
    }

    /**
     * Retrieves all stored wishlists from cache
     *
     * @return {array|undefined}   Wishlists
     */
    getAllWishlistsFromCache() {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('wishlist-'));

        const keyRegex = /^wishlist-(\d+)$/;

        const wishlists = [];

        keys.forEach(key => {
            const match = key.match(keyRegex);
            if (match) {
                const wishlistid = match[1];
                const wishlist = this.getWishlistFromCache(wishlistid);
                if (wishlist) {
                    wishlists.push(wishlist);
                }
            }
        });

        if (wishlists.length > 0) {
            return wishlists;
        }
    }

    /**
     * Retrieves a wishlist from cache
     *
     * @param  {integer} wishlistid   Wishlist ID
     * @return {object|undefined}     Wishlist
     */
    getWishlistFromCache(wishlistid) {
        const key = `wishlist-${wishlistid}`;
        try {
            const entry = JSON.parse(localStorage.getItem(key));
            if (entry.created_at && !this.isExpired(entry) && entry.wishlist && entry.wishlist.id) {
                this.setWishlistDetails(entry.wishlist);
                return entry.wishlist;
            }
        } catch (e) {
            // no-op
        }
    }

    /**
     * Determines whether the cache entry is expired
     *
     * @param  {object} entry             Cache entry
     * @param  {number} entry.created_at  Timestamp of cache entry creation time
     * @return {boolean}                  True if cache entry is expired, False otherwise
     */
    isExpired({ created_at }) {
        const now = Date.now();
        const ellapsed = now - created_at; // milliseconds since entry creation
        const limit = this.cacheDuration * 60 * 1000; // converts from minutes to milliseconds
        return (ellapsed > limit);
    }

    /* --- EVENTS --- */

    /**
     * Register an event listener
     *
     * @param {string}   name      Event name (one of this.events values)
     * @param {function} callback  The function to run when the event is triggered
     */
    on(name, callback) {
        if (!Array.isArray(this.eventListeners[name])) {
            this.eventListeners[name] = [];
        }
        if (typeof callback !== 'function') {
            throw new Error('Callback must be a function.');
        }
        this.eventListeners[name].push(callback);
    }

    /**
     * Unregister an event listener
     *
     * @param {string}   name      Event name (one of this.events values)
     * @param {function} callback  The function to be removed from listeners
     */
    off(name, callback) {
        if (!Array.isArray(this.eventListeners[name])) {
            return;
        }

        const index = this.eventListeners[name].indexOf(callback);

        if (index > -1) {
            this.eventListeners[name].splice(index, 1);
        }
    }

    /**
     * Call the listeners registered for an event
     *
     * @param {string} name      Event name (one of this.events values)
     * @param {*}      payload   The event payload (passed as a single argument)
     */
    emitEvent(name, payload) {
        if (!Array.isArray(this.eventListeners[name])) {
            return;
        }

        this.eventListeners[name].forEach(listener => {
            listener.call(this, payload);
        });
    }
}

export default WishlistManager;

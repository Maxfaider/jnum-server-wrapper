'use strict'

module.exports = class Driver {
    constructor() {
        this.filters = new Map();
        this.apis = new Map();
        this.controllers = new Map();
        this.listeners = new Map();
        this.pathAssets;
        this.realDirectoryAssets;
    }
    
    addFilter(path, filter) {
        this.filters.set(path, filter);
    }

    addApi(path, api, options) {
        this.api.set(path, {api: api, options: options});
    }
    
    addController(path, controller, options) {
        this.controllers.set(path, {controller: controller, options: options});
    }
    
    addListener(nameListener, callback) {
        this.listeners.set(nameListener, callback);
    }
    
    setAssets(path, realDirectory = '') {
        this.pathAssets = path;
        this.realDirectoryAssets = (realDirectory !== '') ? realDirectory : path;
    }

    setLogger(logger) {
        this.Log = logger;
    }
    
    extSession(extSession) {
        this.extSession = extSession;
    }

    extSocket(extSocket) {
        this.extSocket = extSocket;
    }

    createServer(port, callback) {
        throw new Error('Not support operation');
    }
}
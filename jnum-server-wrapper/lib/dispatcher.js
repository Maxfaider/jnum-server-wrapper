'use strict';

var AppContext = require('app-context-js');
var Log  = require('./logger');

module.exports = class Dispatcher {
    constructor(driver) {
        if(!driver)
            throw new Error("Driver not specified");

        this.driver = driver;
        this.driver.setLogger(Log.Logger('Server Nodejs', [{filename: "temp/server"}]));
    }

    run(port, callback) {
        this.driver.createServer(port, callback);
    }

    addFilter(path, filter) {
        this.driver.addFilter(path, filter);
    }

    addApi(path, api, options = {}) {
        this.driver.addApi(path, api, options);
    }
    
    addController(path, controller, options = {}) {
        this.driver.addController(path, controller, options)
    }
    
    addListener(nameListener, callback) {
        this.driver.addListener(nameListener, callback);
    }
    
    setAssets(path, realDirectory = '') {
        this.driver.setAssets(path, realDirectory);
    }

    setLogger(configFileNames = []) {
        contextName = AppContext.getAttr('nameApp') 
            ? AppContext.getAttr('nameApp') : 'Server Nodejs';

        this.driver.setLogger(Log.Logger(contextName, configFileNames));
    }
    
    extSession(extSession) {
        this.driver.extSession(extSession);
    }

    extSocket(extSocket) {
        this.driver.extSocket(extSocket);
    }

}

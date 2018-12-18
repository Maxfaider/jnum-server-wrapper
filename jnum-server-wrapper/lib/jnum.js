'use strict';

var AppContext = require('app-context-js');
var Dispatcher = require('./dispatcher');

//util
var Cookie = require('./cookie');
const HTTP_STATUS = require('./http-status');
const LISTENER = require('./listener');
const PARSER = require('./body-parser');

//extension
var Driver = require('./driver');
var RequestWrapper = require('./request-wrapper');
var ResponseWrapper = require('./response-wrapper');

module.exports = {
    Dispatcher: function(driver) {
        return new Dispatcher(driver);
    },
    Cookie: Cookie,
    Driver: Driver,
    RequestWrapper: RequestWrapper,
    ResponseWrapper: ResponseWrapper,
    Listener: LISTENER,
    BODY_PARSER: PARSER,
    HTTP_STATUS: HTTP_STATUS,
    AppContext: AppContext
}
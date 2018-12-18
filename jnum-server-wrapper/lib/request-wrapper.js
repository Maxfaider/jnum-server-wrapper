'use strict'

module.exports = class RequestWrapper {
    constructor(Request, AppContext) {
        this.Request = Request;
        this.AppContext = AppContext;
        this.Attributes = new Map();
    }

    getProtocol() {
        return this.Request.protocol;
    }

    getRequestURL() {
        return this.Request.baseUrl;
    }

    getRequestPath() {
        return this.Request.path;
    }

    getRequestURI() {
        return this.Request.originalUrl;
    }

    getMethod() {
        return this.Request.method;
    }

    getHeaderNames() {
        var headerNames = [];
        for(key in this.Request.headers)   
            headerNames.push(key);
        return headerNames;
    }

    getHeaders(name) {
        return this.Request.get(name);
    }

    getContentType() {
        return this.Request.get('Content-Type');
    }

    getCharacterEncoding() {
        return this.Request.get('Accept-Encoding');
    }

    getLocale() {
        return this.Request.get('Accept-Language');
    }

    isSecure() {
        return this.Request.secure;
    }

    getSession() {
        return this.Request.session;
    }

    getCookies() {
        return this.Request.cookies;
    }

    getCookie(name) {
        return this.Request.cookies[name];
    }

    getBody() {
        return this.Request.body;
    }

    getHostnames() {
        return this.Request.hostname;
    }

    getRemoteIp() {
        return this.Request.ip;
    }

    getParamNames() {
        var paramNames = [];
        for(key in this.Request.params)   
            paramNames.push(key);
        return paramNames;
    }

    addParams(name, value) {
        this.Request.params[name] = value;
    }

    getParam(name) {
        return this.Request.params[name];
    }

    getQueryNames() {
        var queryNames = [];
        for(key in this.Request.query)   
            queryNames.push(key);
        return queryNames;
    }

    addQuery(name, value) {
        this.Request.query[name] = value;
    }

    getQuery(name) {
        return this.Request.query[name];
    }

    getAttributeNames() {
        return this.Attributes.keys();
    }

    addAttribute(name, Object) {
        this.Attributes.set(name, Object);
    }

    removeAttribute(name) {
        return this.Attributes.delete(name);
    }

    getAttribute(name) {
        return this.Attributes.get(name);
    }

    getAppContext() {
        return this.AppContext;
    }
}
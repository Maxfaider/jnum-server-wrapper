'use strict'

module.exports = class ResponseWrapper {
    constructor(Response, AppContext) {
        this.Response = Response;
        this.AppContext = AppContext;
    }

    getHeaderNames() {
        var headerNames = [];
        for(key in this.Request.headers)   
            headerNames.push(key);
        return headerNames;
    }

    addHeader(name, value) {
        this.Response.set(name, value);
    }

    getHeaders(name) {
        return this.Response.get(name);
    }

    addCookie(Cookie) {
        this.Response.cookie(Cookie.getName(), Cookie.getValue, Cookie.getOptions());
    }

    addCookie(name, value) {
        this.Response.cookie(name, value);
    }

    removeCookie(nameCookie) {
        this.Response.clearCookie(nameCookie);
    }

    sendRedirect(location) {
        this.Response.redirect(location);
    }

    send(msg) {
        this.Response.send(msg);
    }

    sendJSON(json) {
        this.Response.json(json);
    }

    sendXML(xml) {
        throw new Error('Not support operation');
    }

    sendYML(yml) {
        throw new Error('Not support operation');
    }

    pushFile(filename) {
        throw new Error('Only support HTTP2');
    }

    sendFile(pathFile) {
        this.Response.sendFile(pathFile);
    }

    sendError(status, msg = '') {
        this.Response.status(status).send(msg);
    }

    setStatus(status) {
        this.Response.status(status);
    }

    getAppContext() {
        return this.AppContext;
    }
}
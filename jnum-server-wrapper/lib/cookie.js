'use strict'

module.exports = class Cookie {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.options = {};
    }

    setDomain(domain) {
        this.options.domain = domain;
    }

    setHttpOnly(isHttpOnly) {
        this.options.httpOnly = isHttpOnly;
    }

    setMaxAge(expiry) {
        this.options.maxAge = expiry;
    }

    setPath(path) {
        this.options.path = path;
    }

    setSecure(isSecure) {
        this.options.secure = isSecure;
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }

    getOptions() {
        return this.options;
    }
}
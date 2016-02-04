"use strict";

import sf from 'sf';//resolved by webpack's "externals"
import Tinymce from 'tinymce';

var SfTinymce = function (sf, node, options) {
    this._construct(sf, node, options);
};

/**
 * @lends sf.Form.prototype
 */
SfTinymce.prototype = Object.create(sf.core.BaseDOMConstructor.prototype);

/**
 * Name to register
 * @type {string}
 */
SfTinymce.prototype.name = "tinymce";

SfTinymce.prototype._construct = function (sf, node, options) {

    this.init(sf, node, options);//call parent

    this.uid = 'sf-uid-' + Math.random().toString(36).substr(2);
    node.classList.add(this.uid);

    if (this.options.baseURL) {
        tinymce.baseURL = this.options.baseURL;
    } else {
        console.warn('You haven\'t specified baseURL path to tinyMCE resources')
    }

    tinymce.init(sf.tools.extend({selector: '.' + this.uid}, this.options.config || {}));

};

/**
 * @override
 * @inheritDoc
 * @enum {string}
 */
SfTinymce.prototype.optionsToGrab  = {
    baseURL: {
        domAttr: "data-base-url"
    },
    config: {
        value: {},
        domAttr: "data-config",
        processor: function (node, val, self) {
            if (!val) return this.value;
            if (typeof val == "string") {
                try {
                    val = JSON.parse(val);
                } catch (e) {
                    console.error("TinyMCE config JSON.parse error: ", e);
                }
            }
            return Object.assign(self.value, val);
        }
    }
};

SfTinymce.prototype.die = function () {
    delete this;
};

export { SfTinymce as default };
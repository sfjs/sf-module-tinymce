"use strict";
import sf from 'sf';//resolved by webpack's "externals"
import SfTinymce from './sf-tinymce';

sf.instancesController.registerInstanceType(SfTinymce,"js-sf-tinymce");
module.exports = SfTinymce;   // ES6 default export will not expose us as global
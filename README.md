# tinyMCE
tinyMCE module for Spiral and sf.js

### Usage example

```html
<textarea name="textarea-name" data-config='{"height": 300, "plugins":"image media codesample","toolbar": "image media codesample"}' data-base-url="../node_modules/tinymce" class="js-sf-tinymce">Lorem Ipsum is simply dummy text...</textarea>
```

### Options
* **data-base-url** - specify path to tinyMCE resources (skins, themes etc.)
* **data-config** - pass JSON-config of tinyMCE-instance

### Installation

    npm install -g gulp
    npm install

### Building

    gulp build

## License

Copyright (c) 2016 Yauheni Yasinau and contributors. Released under an [MIT license](https://github.com/sfjs/sf-module-tinymce/blob/master/LICENSE).

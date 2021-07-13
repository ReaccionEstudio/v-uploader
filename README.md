<br><br>

<p align="center"><img src="https://terryz.gitee.io/image/v-uploader/v-uploader-single.png" alt="v-uploader"></p>

<h3 align="center">v-uploader</h3>

<p align="center">
  A <strong>Vue2</strong> plugin make files upload simple and easier, <br>
  single file upload with image preview, multiple upload with drag and drop
</p>

<p align="center">Added Spanish translation.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/v-uploader"><img src="https://img.shields.io/npm/v/v-uploader.svg"></a>
  <a href="https://mit-license.org/"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
<a href="https://app.fossa.io/projects/git%2Bgithub.com%2FTerryZ%2Fv-uploader?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2FTerryZ%2Fv-uploader.svg?type=shield"/></a>
  <a href="https://www.npmjs.com/package/v-uploader"><img src="https://img.shields.io/npm/dy/v-uploader.svg"></a>
</p>

<br><br><br><br><br>

## Examples and Documentation

Explorer on

- [English site](https://terryz.github.io/vue/#/upload)
- [国内站点](https://terryz.gitee.io/vue/#/upload)

## Plugin preview

Single file upload with image preview

<p align="center"><img src="https://terryz.github.io/image/v-uploader/v-uploader-single.png" alt="v-uploader-single" ></p>

Multiple files upload with drag and drop

<p align="center"><img src="https://terryz.github.io/image/v-uploader/v-uploader-multiple.png" alt="v-uploader-multiple" ></p>

## Installation

```
npm i "ReaccionEstudio/v-uploader"
```

Include and install plugin in your `main.js` file.

```js
import Vue from 'vue'
import Uploader from 'v-uploader'

/**
 * v-uploader plugin global config
 */
const uploaderConfig = {
  uploadFileUrl: 'https://some-site/upload',
  deleteFileUrl: 'https://some-site/delete',
  showMessage: (vue, message) => {
    // using v-dialogs to show message
    vue.$dlg.alert(message, null, { messageType: 'error' })
  }
}

// install plugin with options
Vue.use(Uploader, uploaderConfig)
```

There is using **[v-dialogs](https://github.com/TerryZ/v-dialogs)** to show message in example

## Dependencies

- [fine-uploader](https://github.com/FineUploader/fine-uploader)
- [holderjs](https://github.com/imsky/holder)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FTerryZ%2Fv-uploader.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FTerryZ%2Fv-uploader?ref=badge_large)

## Vue plugin series

| Plugin | Status | Description |
| :---------------- | :-- | :-- |
| [v-page](https://github.com/TerryZ/v-page) | [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) | A simple pagination bar, including length Menu, i18n support |
| [v-dialogs](https://github.com/TerryZ/v-dialogs) | [![npm version](https://img.shields.io/npm/v/v-dialogs.svg)](https://www.npmjs.com/package/v-dialogs) | A simple and powerful dialog, including Modal, Alert, Mask and Toast modes |
| [v-tablegrid](https://github.com/TerryZ/v-tablegrid) | [![npm version](https://img.shields.io/npm/v/v-tablegrid.svg)](https://www.npmjs.com/package/v-tablegrid) | A simpler to use and practical datatable |
| [v-uploader](https://github.com/TerryZ/v-uploader) | [![npm version](https://img.shields.io/npm/v/v-uploader.svg)](https://www.npmjs.com/package/v-uploader) | A Vue2 plugin to make files upload simple and easier, <br>you can drag files or select file in dialog to upload |
| [v-ztree](https://github.com/TerryZ/v-ztree) | [![npm version](https://img.shields.io/npm/v/v-ztree.svg)](https://www.npmjs.com/package/v-ztree) | A simple tree for Vue2, support single or multiple(check) select tree, <br>and support server side data |
| [v-gallery](https://github.com/TerryZ/v-gallery) | [![npm version](https://img.shields.io/npm/v/v-gallery.svg)](https://www.npmjs.com/package/v-gallery) | A Vue2 plugin make browsing images in gallery |
| [v-region](https://github.com/TerryZ/v-region) | [![npm version](https://img.shields.io/npm/v/v-region.svg)](https://www.npmjs.com/package/v-region) | A simple region selector, provide Chinese administrative division data |
| [v-selectpage](https://github.com/TerryZ/v-selectpage) | [![npm version](https://img.shields.io/npm/v/v-selectpage.svg)](https://www.npmjs.com/package/v-selectpage) | A powerful selector for Vue2, list or table view of pagination, <br>use tags for multiple selection, i18n and server side resources supports |
| [v-suggest](https://github.com/TerryZ/v-suggest) | [![npm version](https://img.shields.io/npm/v/v-suggest.svg)](https://www.npmjs.com/package/v-suggest) | A Vue2 plugin for input suggestions by autocomplete |
| [v-playback](https://github.com/TerryZ/v-playback) | [![npm version](https://img.shields.io/npm/v/v-playback.svg)](https://www.npmjs.com/package/v-playback) | A Vue2 plugin to make video play easier |
| [v-selectmenu](https://github.com/TerryZ/v-selectmenu) | [![npm version](https://img.shields.io/npm/v/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) | A simple, easier and highly customized menu solution |

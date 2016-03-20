## load-config-folder [![npm](https://img.shields.io/npm/v/load-config-folder.svg)](https://npmjs.org/package/load-config-folder)

[![Build Status](https://img.shields.io/travis/snowyu/load-config-folder.js/master.svg)](http://travis-ci.org/snowyu/load-config-folder.js)
[![Code Climate](https://codeclimate.com/github/snowyu/load-config-folder.js/badges/gpa.svg)](https://codeclimate.com/github/snowyu/load-config-folder.js)
[![Test Coverage](https://codeclimate.com/github/snowyu/load-config-folder.js/badges/coverage.svg)](https://codeclimate.com/github/snowyu/load-config-folder.js/coverage)
[![downloads](https://img.shields.io/npm/dm/load-config-folder.svg)](https://npmjs.org/package/load-config-folder)
[![license](https://img.shields.io/npm/l/load-config-folder.svg)](https://npmjs.org/package/load-config-folder)

Load the config from folder as a plain object.

* The config file format can be registered.
* The registered file format order is the search order.
* the virtual file system can be specfied: `loadConfig.setFileSystem(fs)`
  * `fs.path = require('path.js/lib/path').path` for the virtual POSIX path.
    * you must set the path first before call setFileSystem.

The `load-config-folder` is similar to the [load-config-file](https://github.com/snowyu/load-config-file.js).
But it will load the configuration from the folder with a specified file name, you can use `addConfig`
to set the specified config file name(it's a `basename`).


## Usage

```js
var loadConfig = require('load-config-folder');
var yaml  = require('js-yaml');
var cson  = require('cson');

//the config file basename for the folder.
loadConfig.addConfig(['_config']);
loadConfig.register(['.yaml', '.yml'], yaml.safeLoad);
loadConfig.register('.cson', cson.parseCSONString.bind(cson));
loadConfig.register('.json', JSON.parse);

//Synchronously load config for the folder.
//it will search folder/_config.yaml, folder/_config.yml, folder/_config.cson, folder/_config.json
//the first exist file will be loaded.
//the default encoding is "utf8" if no encoding.
//loadConfig('config', {encoding: 'ascii'})
//the non-enumerable "$cfgPath" property added.
console.log(loadConfig('./folder'));

//Asynchronously load config from file
loadConfig('./folder', function(err, result){
  if (err) {
    console.log('error:', err);
  } else {
    console.log(result);
  }
})

```

## API

```js
var config = require('load-config-folder');
```

* `config.setFileSystem(fs)`: set your favour file system. defaults to 'fs'.
  * the "file system" must implement `readFile(path[, options], done)` and `readFileSync(path[, options])`
* `load(dir, options, done)`: Asynchronously load config from dir
  * return the plain object and the `$cfgPath` property added if suceesful.
* `loadSync(dir, options)`: Synchronously load config from dir
  * return the plain object and the `$cfgPath` property added if suceesful.

## License

MIT

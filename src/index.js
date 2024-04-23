import { extend, isArray, isString, isObject, isFunction, defineProperty } from 'util-ex'
import { any } from 'promise-sequence'
import { Config }from 'load-config-file'
import _path from 'path.js'
import _fs from 'fs'

const indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

FolderConfig.prototype.configurators = {};
FolderConfig.prototype.files = [];

let fs = FolderConfig.prototype.fs = null;
let path = FolderConfig.prototype.path = _path;

FolderConfig.prototype.readFile = null;

export function FolderConfig(aPath, aOptions, done) {
  if (!(this instanceof FolderConfig)) {
    if (isFunction(aOptions) || aOptions === true) {
      done = aOptions;
      aOptions = null;
    }
    let result;
    if (isFunction(done) || done === true) {
      result = FolderConfig.load(aPath, aOptions, done);
    } else {
      result = FolderConfig.loadSync(aPath, aOptions);
    }
    return result;
  }
  if (isObject(aPath)) {
    aOptions = aPath;
    aPath = undefined;
  }
  this.path = aPath;
  if (isObject(aOptions)) {
    this.options = aOptions;
  }
}

FolderConfig.prototype.load = function(aPath, aOptions, done) {
  if (isObject(aPath)) {
    done = aOptions;
    aOptions = aPath;
    aPath = null;
  } else if (isFunction(aPath)) {
    done = aPath;
    aPath = null;
    aOptions = null;
  } else if (isFunction(aOptions)) {
    done = aOptions;
    aOptions = null;
  }
  if (aPath == null) {
    aPath = this.path;
  }
  if (aOptions == null) {
    aOptions = this.options;
  }
  return FolderConfig.load(aPath, aOptions, done);
};

FolderConfig.prototype.loadSync = function(aPath, aOptions) {
  if (isObject(aPath)) {
    aOptions = aPath;
    aPath = null;
  }
  if (aPath == null) {
    aPath = this.path;
  }
  if (aOptions == null) {
    aOptions = this.options;
  }
  return FolderConfig.loadSync(aPath, aOptions);
};

FolderConfig.prototype.addConfig = function(aFile, aOptions) {
  if (aOptions == null) {
    aOptions = this.options;
  }
  const aConfigFiles = aOptions && aOptions.files;
  return FolderConfig.addConfig(aFile, aConfigFiles);
};

FolderConfig.addConfig = function(aFile, aConfigFiles) {
  if (aConfigFiles == null) {
    aConfigFiles = FolderConfig.prototype.files;
  }
  let result = 0;
  if (isString(aFile) && !(indexOf.call(aConfigFiles, aFile) >= 0)) {
    aConfigFiles.push(aFile);
    result++;
  } else if (isArray(aFile)) {
    for (let i = 0; i < aFile.length; i++) {
      const f = aFile[i];
      if (indexOf.call(aConfigFiles, aFile) < 0) {
        aConfigFiles.push(f);
        result++;
      }
    }
  }
  return result;
};

FolderConfig.load = function(aPath, aOptions, done) {
  aOptions = extend({}, aOptions);
  if (aOptions.encoding == null) {
    aOptions.encoding = 'utf8';
  }
  if (!isObject(aOptions.configurators)) {
    defineProperty(aOptions, 'configurators', FolderConfig.prototype.configurators);
  }
  let vFiles;
  if (isString(aOptions.file)) {
    vFiles = [aOptions.file];
  } else if (isArray(aOptions.file)) {
    vFiles = aOptions.file;
  } else {
    vFiles = FolderConfig.prototype.files;
  }
  const raiseError = aOptions.raiseError;
  defineProperty(aOptions, 'raiseError', true);
  let error
  return any(vFiles, function(name) {
    return Config.load(path.join(aPath, name), aOptions).catch(function(err){
      if (err.code !== 'ENOENT' && raiseError) {
        throw err
      }
      error = err
    });
  }).catch(function(err) {
    if (raiseError) {
      throw err;
    }
  }).then(function(result) {
    if (result === undefined && error && raiseError) {
      throw error
    }
    return result
  }).asCallback(done);
};

FolderConfig.loadSync = function(aPath, aOptions) {
  var result, vFiles;
  if (aOptions == null) {
    aOptions = {};
  }
  if (aOptions.encoding == null) {
    aOptions.encoding = 'utf8';
  }
  if (!isObject(aOptions.configurators)) {
    defineProperty(aOptions, 'configurators', FolderConfig.prototype.configurators);
  }
  if (isString(aOptions.file)) {
    vFiles = [aOptions.file];
  } else if (isArray(aOptions.file)) {
    vFiles = aOptions.file;
  } else {
    vFiles = FolderConfig.prototype.files;
  }
  const raiseError = aOptions.raiseError;
  defineProperty(aOptions, 'raiseError', true);
  let error
  for (let i = 0, len = vFiles.length; i < len; i++) {
    const name = vFiles[i];
    try {
      result = Config.loadSync(path.join(aPath, name), aOptions);
      if (result) {
        break;
      }
    } catch(err) {
      if (err.code !== 'ENOENT' && raiseError) {
        throw err
      }
      error = err
    }
  }
  if (result === undefined && error && raiseError) {
    throw error
  }
  return result;
};

FolderConfig.register = function(aExts, aProcess, aConfigurators) {
  if (aConfigurators == null) {
    aConfigurators = FolderConfig.prototype.configurators;
  }
  return Config.register(aExts, aProcess, aConfigurators);
};

FolderConfig.setFileSystem = function(aFileSystem) {
  if (Config.setFileSystem(aFileSystem)) {
    FolderConfig.prototype.fs = fs = aFileSystem;
    if (aFileSystem.path) {
      FolderConfig.prototype.path = path = aFileSystem.path;
    }
    FolderConfig.prototype.readFile = fs.readFile;
    return true;
  }
};

FolderConfig.setFileSystem(_fs);

export default FolderConfig;

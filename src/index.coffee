any             = require('promise.any')
# any = require('@ungap/promise-any')
isArray         = require('util-ex/lib/is/type/array')
isString        = require('util-ex/lib/is/type/string')
isObject        = require('util-ex/lib/is/type/object')
isFunction      = require('util-ex/lib/is/type/function')
defineProperty  = require('util-ex/lib/defineProperty')
Config          = require('load-config-file')
# { callbackify } = require('load-config-file/lib/callbackify')

getKeys     = Object.keys

class FolderConfig

  configurators: {}
  files: []
  fs: fs = null
  path: path = require('path.js')#require('path.js/lib/path').path
  readFile: readFile = null

  constructor: (aPath, aOptions, done) ->
    unless @ instanceof FolderConfig
      if isFunction(aOptions)
        done = aOptions
        aOptions = null
      if isFunction(done)
        result = FolderConfig.load(aPath, aOptions, done)
      else
        result = FolderConfig.loadSync(aPath, aOptions)
      return result
    @path = aPath
    @options = aOptions if isObject aOptions

  load: (aPath, aOptions, done)->
    if isObject(aPath)
      done  = aOptions
      aOptions = aPath
      aPath = null
    else if isFunction(aPath)
      done = aPath
      aPath = null
      aOptions = null
    else if isFunction(aOptions)
      done = aOptions
      aOptions = null
    aPath ?= @path
    aOptions ?= @options
    FolderConfig.load aPath, aOptions, done

  loadSync: (aPath, aOptions)->
    if isObject(aPath)
      aOptions = aPath
      aPath = null
    aPath ?= @path
    aOptions ?= @options
    FolderConfig.loadSync aPath, aOptions

  @addConfig: (aFile, aConfigFiles) ->
    aConfigFiles ?= FolderConfig::files
    result = 0
    if isString(aFile) and !(aFile in aConfigFiles)
      aConfigFiles.push aFile
      result++
    else if isArray aFile
      for f in aFile
        unless aFile in aConfigFiles
          aConfigFiles.push f
          result++
    result

  @load: (aPath, aOptions, done) ->
    aOptions ?= {}
    aOptions.encoding ?= 'utf8'
    unless isObject aOptions.configurators
      defineProperty aOptions, 'configurators', FolderConfig::configurators
    if isString aOptions.file
      vFiles = [aOptions.file]
    else if isArray aOptions.file
      vFiles = aOptions.file
    else
      vFiles = FolderConfig::files

    raiseError = aOptions.raiseError
    defineProperty aOptions, 'raiseError', true
    any vFiles.map (name)->
      Config.load path.join(aPath, name), aOptions
    .catch (err)->
      throw err if raiseError
    .asCallback done

  @loadSync: (aPath, aOptions) ->
    aOptions ?= {}
    aOptions.encoding ?= 'utf8'
    unless isObject aOptions.configurators
      defineProperty aOptions, 'configurators', FolderConfig::configurators
    if isString aOptions.file
      vFiles = [aOptions.file]
    else if isArray aOptions.file
      vFiles = aOptions.file
    else
      vFiles = FolderConfig::files

    for name in vFiles
      result = Config.loadSync path.join(aPath, name), aOptions
      break if result
    result

  @register: (aExts, aProcess, aConfigurators) ->
    aConfigurators ?= FolderConfig::configurators
    Config.register aExts, aProcess, aConfigurators

  @setFileSystem: (aFileSystem) ->
    if Config.setFileSystem(aFileSystem)
      FolderConfig::fs = fs = aFileSystem
      FolderConfig::path = path = aFileSystem.path if aFileSystem.path
      FolderConfig::readFile = readFile = fs.readFile
      true

FolderConfig.setFileSystem require('fs')

module.exports = FolderConfig
module.exports.default = FolderConfig

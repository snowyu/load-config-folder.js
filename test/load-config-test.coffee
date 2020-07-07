chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)


loadConfig      = require '../src/'
fs              = require 'fs'
fs.path         = require('path.js/lib/path').path
cfgs            = null
loadConfig.setFileSystem fs


describe 'loadConfig', ->
  before ->
    result = loadConfig.addConfig ['index', 'readme', 'config']
    assert.equal result, 3

  it 'should add a config file name', ->
    old = loadConfig::files
    loadConfig::files = []
    result = loadConfig.addConfig 'index'
    assert.equal result, 1
    loadConfig::files.should.have.length 1
    result = loadConfig.addConfig 'index'
    assert.equal result, 0
    loadConfig::files.should.have.length 1
    result = loadConfig::files.pop()
    assert.equal result, 'index'
    loadConfig::files = old

  it 'should add multi config file names', ->
    assert.deepEqual loadConfig::files, ['index', 'readme', 'config']

  it 'should register a config format', ->
    cfgs = loadConfig.register 'json', JSON.parse
    should.exist cfgs
    cfgs.should.have.property '.json', JSON.parse
    delete cfgs['.json']

  it 'should register a config format with multi extnames', ->
    cfgs = loadConfig.register ['.jsn', 'jon', '.json'], JSON.parse
    should.exist cfgs
    cfgs.should.be.deep.equal
      '.jsn': JSON.parse
      '.jon': JSON.parse
      '.json': JSON.parse

  describe 'load', ->
    before ->
      loadConfig::files = ['index', 'readme', 'config']
      loadConfig.register ['.jsn', 'jon', '.json'], JSON.parse

    it 'should load config synchronously', ->
      result = loadConfig(__dirname+'/fixture')
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
      result.should.be.deep.equal
        str: 'hello'


    it 'should load config asynchronously', (done)->
      loadConfig __dirname+'/fixture/', (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'
        done()
      return
    it 'should load config asynchronously promise', ()->
      loadConfig.load __dirname+'/fixture/'
      .then (result)->
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'

  describe 'object usage', ->
    before ->
      loadConfig::files = ['index', 'readme', 'config']
      loadConfig.register ['.jsn', 'jon', '.json'], JSON.parse
    it 'should create a new Config object', ->
      result = new loadConfig 'path1', {hi:112}
      result.should.have.property 'path', 'path1'
      result.should.have.ownProperty 'options'
      result.options.should.be.deep.equal {hi:112}

    it 'should create a new Config object without path', ->
      result = new loadConfig {hi:112}
      result.should.have.property 'path', undefined
      result.should.have.ownProperty 'options'
      result.options.should.be.deep.equal {hi:112}

    it 'should load config synchronously', ->
      result = new loadConfig(__dirname+'/fixture/')
      result = result.loadSync()
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
      result.should.be.deep.equal
        str: 'hello'

    it 'should load config synchronously with nothinh loaded', ->
      result = new loadConfig(__dirname+'/fixture/saaw')
      result = result.loadSync(encoding:'utf8')
      should.not.exist result

    it 'should load config synchronously overwrite path', ->
      result = new loadConfig(__dirname+'/fixture/con')
      result = result.loadSync(__dirname+'/fixture')
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
      result.should.be.deep.equal
        str: 'hello'

    it 'should load config asynchronously', (done)->
      result = new loadConfig __dirname+'/fixture/'
      result.load (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'
        done()
      return

    it 'should load config asynchronously', ()->
      result = new loadConfig __dirname+'/fixture/'
      result.load()
      .then (result)->
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'

    it 'should load config asynchronously with raise error if nothing loaded', (done)->
      result = new loadConfig __dirname+'/fixture/sds'
      result.load raiseError: true, (err, result)->
        should.exist err
        should.not.exist result
        done()
      return

    it 'should load config asynchronously overwrite path', (done)->
      result = new loadConfig __dirname+'/fixture/con'
      result.load __dirname+'/fixture/', (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'
        done()
      return

  describe 'fake filesystem', ->
    fakeFS = require 'load-config-file/test/fake-fs'
    before ->
      loadConfig.setFileSystem(fakeFS).should.be.true
    afterEach ->
      fakeFS.result = {}
    it 'should set FileSystem', ->
      loadConfig::fs.should.be.equal fakeFS

    it 'should load config synchronously', ->
      result = loadConfig('p', encoding:'ascii')
      should.not.exist result
      expectedResult = {}
      for k of cfgs
        expectedResult['p/index'+k] = encoding: 'ascii'
        expectedResult['p/readme'+k] = encoding: 'ascii'
        expectedResult['p/config'+k] = encoding: 'ascii'
      fakeFS.result.should.be.deep.equal expectedResult

    it 'should load config asynchronously', (done)->
      loadConfig 'p/', encoding:'ascii', (err, result)->
        should.not.exist result
        expectedResult = {}
        for k of cfgs
          expectedResult['p/index'+k] = encoding: 'ascii'
          expectedResult['p/readme'+k] = encoding: 'ascii'
          expectedResult['p/config'+k] = encoding: 'ascii'
        fakeFS.result.should.be.deep.equal expectedResult
        done(err)
      return

    describe 'external file names', ->
      it 'should load config synchronously with a config file name', ->
        result = loadConfig('p', file: '123')
        should.not.exist result
        expectedResult = {}
        for k of cfgs
          expectedResult['p/123'+k] = file: '123', encoding: 'utf8'
        fakeFS.result.should.be.deep.equal expectedResult
      it 'should load config synchronously with multi config file names', ->
        result = loadConfig('p', file: ['123','abc'])
        should.not.exist result
        expectedResult = {}
        for k of cfgs
          expectedResult['p/123'+k] = file: ['123','abc'], encoding: 'utf8'
          expectedResult['p/abc'+k] = file: ['123','abc'], encoding: 'utf8'
        fakeFS.result.should.be.deep.equal expectedResult

      it 'should load config asynchronously with a config file name', (done)->
        loadConfig 'p/', file:'as', (err, result)->
          should.not.exist result
          expectedResult = {}
          for k of cfgs
            expectedResult['p/as'+k] = file:'as', encoding: 'utf8'
          fakeFS.result.should.be.deep.equal expectedResult
          done(err)
        return

      it 'should load config asynchronously with multi config file names', (done)->
        loadConfig 'p/', file:['as','23'], (err, result)->
          should.not.exist result
          expectedResult = {}
          for k of cfgs
            expectedResult['p/as'+k] = file:['as','23'], encoding: 'utf8'
            expectedResult['p/23'+k] = file:['as','23'], encoding: 'utf8'
          fakeFS.result.should.be.deep.equal expectedResult
          done(err)
        return

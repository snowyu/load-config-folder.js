import fs from 'fs'
import _path from 'path.js'
import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
chai.use(sinonChai);

import loadConfig from '../src/index'


fs.path = _path;

let cfgs = null;
loadConfig.setFileSystem(fs);

describe('loadConfig', function() {
  before(function() {
    const result = loadConfig.addConfig(['index', 'readme', 'config']);
    assert.equal(result, 3);
    loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse);
  });
  it('should add a config file name', function() {
    var old, result;
    old = loadConfig.prototype.files;
    loadConfig.prototype.files = [];
    result = loadConfig.addConfig('index');
    assert.equal(result, 1);
    loadConfig.prototype.files.should.have.length(1);
    result = loadConfig.addConfig('index');
    assert.equal(result, 0);
    loadConfig.prototype.files.should.have.length(1);
    result = loadConfig.prototype.files.pop();
    assert.equal(result, 'index');
    loadConfig.prototype.files = old;
  });
  it('should add multi config file names', function() {
    assert.deepEqual(loadConfig.prototype.files, ['index', 'readme', 'config']);
  });
  it('should register a config format', function() {
    cfgs = loadConfig.register('json', JSON.parse);
    should.exist(cfgs);
    cfgs.should.have.property('.json', JSON.parse);
    delete cfgs['.json'];
  });
  it('should register a config format with multi extnames', function() {
    cfgs = loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse);
    should.exist(cfgs);
    cfgs.should.be.deep.equal({
      '.jsn': JSON.parse,
      '.jon': JSON.parse,
      '.json': JSON.parse
    });
  });
  describe('load', function() {
    before(function() {
      loadConfig.prototype.files = ['index', 'readme', 'config'];
      loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse);
    });
    it('should load config synchronously', function() {
      var result;
      result = loadConfig(__dirname + '/fixture');
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
      result.should.be.deep.equal({
        str: 'hello'
      });
    });
    it('should load config asynchronously', function(done) {
      loadConfig(__dirname + '/fixture/', function(err, result) {
        if (err) {
          return done(err);
        }
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
        result.should.be.deep.equal({
          str: 'hello'
        });
        done();
      });
    });
    return it('should load config asynchronously promise', function() {
      return loadConfig.load(__dirname + '/fixture/').then(function(result) {
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
        result.should.be.deep.equal({
          str: 'hello'
        });
      });
    });
  });
  describe('object usage', function() {
    before(function() {
      loadConfig.prototype.files = ['index', 'readme', 'config'];
      loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse);
    });
    it('should create a new Config object', function() {
      var result;
      result = new loadConfig('path1', {
        hi: 112
      });
      result.should.have.property('path', 'path1');
      result.should.have.ownProperty('options');
      result.options.should.be.deep.equal({
        hi: 112
      });
    });
    it('should create a new Config object without path', function() {
      var result;
      result = new loadConfig({
        hi: 112
      });
      result.should.have.property('path', void 0);
      result.should.have.ownProperty('options');
      result.options.should.be.deep.equal({
        hi: 112
      });
    });
    it('should load config synchronously', function() {
      var result;
      result = new loadConfig(__dirname + '/fixture/');
      result = result.loadSync();
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
      result.should.be.deep.equal({
        str: 'hello'
      });
    });
    it('should load config synchronously with nothinh loaded', function() {
      var result;
      result = new loadConfig(__dirname + '/fixture/saaw');
      result = result.loadSync({
        encoding: 'utf8'
      });
      should.not.exist(result);
    });
    it('should load config synchronously overwrite path', function() {
      var result;
      result = new loadConfig(__dirname + '/fixture/con');
      result = result.loadSync(__dirname + '/fixture');
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
      result.should.be.deep.equal({
        str: 'hello'
      });
    });
    it('should load config asynchronously', function(done) {
      var result;
      result = new loadConfig(__dirname + '/fixture/');
      result.load(function(err, result) {
        if (err) {
          return done(err);
        }
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
        result.should.be.deep.equal({
          str: 'hello'
        });
        done();
      });
    });
    it('should load config asynchronously', async function() {
      const cfg = new loadConfig(__dirname + '/fixture/');
      const result = await cfg.load({raiseError: false});
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
      result.should.be.deep.equal({
        str: 'hello'
      });
    });
    it('should load config asynchronously with raise error if nothing loaded', function(done) {
      var result;
      result = new loadConfig(__dirname + '/fixture/sds');
      result.load({
        raiseError: true
      }, function(err, result) {
        should.exist(err);
        should.not.exist(result);
        done();
      });
    });
    it('should load config asynchronously with raise error if nothing loaded(promise)', function(done) {
      const cfg = new loadConfig(__dirname + '/fixture/sds');
      cfg.load({
        raiseError: true
      }).asCallback(function(err, result) {
        try {
        should.exist(err);
        should.not.exist(result);
        err = undefined
      } catch(e) {err = e}
         finally {
        done(err);
        }
      });
    });
    it('should load config asynchronously overwrite path', function(done) {
      var result;
      result = new loadConfig(__dirname + '/fixture/con');
      result.load(__dirname + '/fixture/', function(err, result) {
        if (err) {
          return done(err);
        }
        try {
          should.exist(result);
          result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
          result.should.be.deep.equal({
            str: 'hello'
          });
        } catch(e) {err=e} 
        finally {
          done(err);
        }
      });
    });
  });
  describe('fake filesystem', function() {
    const fakeFS = require('load-config-file/test/fake-fs');
    before(function() {
      loadConfig.setFileSystem(fakeFS).should.be["true"];
    });
    afterEach(function() {
      fakeFS.result = {};
    });
    it('should set FileSystem', function() {
      loadConfig.prototype.fs.should.be.equal(fakeFS);
    });
    it('should load config synchronously', function() {
      var expectedResult, k, result;
      result = loadConfig('p', {
        encoding: 'ascii'
      });
      should.not.exist(result);
      expectedResult = {};
      for (k in cfgs) {
        expectedResult['p/index' + k] = {
          encoding: 'ascii'
        };
        expectedResult['p/readme' + k] = {
          encoding: 'ascii'
        };
        expectedResult['p/config' + k] = {
          encoding: 'ascii'
        };
      }
      fakeFS.result.should.be.deep.equal(expectedResult);
    });
    it('should load config asynchronously', function(done) {
      loadConfig('p/', {
        encoding: 'ascii'
      }, function(err, result) {
        var expectedResult, k;
        should.not.exist(result);
        expectedResult = {};
        for (k in cfgs) {
          expectedResult['p/index' + k] = {
            encoding: 'ascii'
          };
          expectedResult['p/readme' + k] = {
            encoding: 'ascii'
          };
          expectedResult['p/config' + k] = {
            encoding: 'ascii'
          };
        }
        fakeFS.result.should.be.deep.equal(expectedResult);
        done(err);
      });
    });
    describe('external file names', function() {
      before(function(){
        cfgs = loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse);
      })
      it('should load config synchronously with a config file name', function() {
        var expectedResult, k, result;
        result = loadConfig('p', {
          file: '123'
        });
        should.not.exist(result);
        expectedResult = {};
        for (k in cfgs) {
          expectedResult['p/123' + k] = {
            file: '123',
            encoding: 'utf8'
          };
        }
        fakeFS.result.should.be.deep.equal(expectedResult);
      });
      it('should load config synchronously with multi config file names', function() {
        var expectedResult, k, result;
        result = loadConfig('p', {
          file: ['123', 'abc']
        });
        should.not.exist(result);
        expectedResult = {};
        for (k in cfgs) {
          expectedResult['p/123' + k] = {
            file: ['123', 'abc'],
            encoding: 'utf8'
          };
          expectedResult['p/abc' + k] = {
            file: ['123', 'abc'],
            encoding: 'utf8'
          };
        }
        fakeFS.result.should.be.deep.equal(expectedResult);
      });
      it('should load config asynchronously with a config file name', function(done) {
        loadConfig('p/', {
          file: 'as'
        }, function(err, result) {
          var expectedResult, k;
          should.not.exist(result);
          expectedResult = {};
          for (k in cfgs) {
            expectedResult['p/as' + k] = {
              file: 'as',
              encoding: 'utf8'
            };
          }
          fakeFS.result.should.be.deep.equal(expectedResult);
          done(err);
        });
      });
      it('should load config asynchronously with multi config file names', function(done) {
        loadConfig('p/', {
          file: ['as', '23']
        }, function(err, result) {
          try {
          should.not.exist(result);
          const expectedResult = {};
          for (let k in cfgs) {
            expectedResult['p/as' + k] = {
              file: ['as', '23'],
              encoding: 'utf8'
            };
            expectedResult['p/23' + k] = {
              file: ['as', '23'],
              encoding: 'utf8'
            };
          }
          try {
          expect(fakeFS.result).to.deep.equal(expectedResult);
          } catch (e) {err = e}
          } finally {
            done(err);
          }
        });
      });
      it('should load config asynchronously with multi config file names', async function() {
        const result = await loadConfig('p/', {
          file: ['as', '23']
        }, true);
        should.not.exist(result);
        const expectedResult = {};
        for (let k in cfgs) {
          expectedResult['p/as' + k] = {
            file: ['as', '23'],
            encoding: 'utf8'
          };
          expectedResult['p/23' + k] = {
            file: ['as', '23'],
            encoding: 'utf8'
          };
        }
        expect(fakeFS.result).to.deep.equal(expectedResult);

      });

    });
  });
});

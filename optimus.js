'use strict';

(function() {

  var MAX_INT32 = 2147483647;
  var MULTIPLIER = 4294967296 // 2^32;

  var root = this;
  var prevOptimus = root.Optimus;

  var has_require = typeof require !== 'undefined'
  var Long = root.dcodeIO.Long;
  
  if(typeof Long === 'undefined') {
    if(has_require) {
      Long = require('long');
    } else {
      throw new Error('Optimus requires long js see https://github.com/dcodeIO/long.js');
    }
  }

  var Optimus = function(prime, inverse, random) {
    this.prime = Long.fromInt(prime);
    this.inverse = Long.fromInt(inverse);
    this.random = Long.fromInt(random);
  };

  Optimus.prototype.encode = function(num) {
    var n = Long.fromInt(num);
    return n.mul(this.prime).and(Long.fromInt(MAX_INT32)).xor(this.random).toSigned().toInt();
  };

  Optimus.prototype.decode = function(num) {
    var n = Long.fromInt(num);
    return n.xor(this.random).mul(this.inverse).and(Long.fromInt(MAX_INT32)).toSigned().toInt();
  };

  Optimus.noConflict = function() {
    root.Optimus = prevOptimus;
    return Optimus;
  }

  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = Optimus;
    }
    exports.mymodule = Optimus;
  } 
  else {
    root.Optimus = Optimus;
  }

}).call(this);

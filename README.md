Knuth's integer hashing based id obfuscation
============================================
[![Build Status](http://img.shields.io/travis/chamindu/optimus-js.svg)](https://travis-ci.org/chamindu/optimus-js) [![Latest build](https://img.shields.io/npm/v/optimus-js.svg)](https://www.npmjs.com/package/optimus-js)

This is a port of [jenssegers/optimus](https://github.com/jenssegers/optimus) PHP library for Javascript. It works on the browser as well as node.

Installation
-------------

```
npm install optimus-js
```

```
bower install optimus-js
```

Usage
-----
To initialize the library you need 3 things.

- Large prime number lower than 2147483647 (prime)
- The inverse prime so that (prime * inverse) & 2147483647 = 1
- A large random number lower than 2147483647

for more info and a command line too to generate these values please refer the [original project](https://github.com/jenssegers/optimus)

using the above parameters you can create instances of Optimus(prime, inverse, random)


```
var Optimus = require('optimus');

var optimus = new Optimus(1580030173, 59260789, 1163945558);
```

After that you can use encode and decode methods to encode/decode positive integers ranging from (0 to 2147483647). 

```
var hash = optimus.encode(25);
var original = optimus.decode(hash);
```

***Warning***: Please note that this library only provides obfuscation and not encryption.


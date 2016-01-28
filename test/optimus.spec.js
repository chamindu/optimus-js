if(typeof Optimus === 'undefined') {
  var Optimus = require('..');
}

describe('Optimus', function() {
  var optimus = new Optimus(1915711547, 1687808243, 1180519796);

  it('should encode/decode integers', function() {
    var values = [20, 55, 500, 9999];
    values.forEach(function(v) {
      expect(optimus.decode(optimus.encode(22))).toEqual(22);
    });
  })

  it('should work with zero', function() {
    expect(optimus.decode(optimus.encode(0))).toEqual(0);
  });

  it('should work with the largest 32 bit value', function() {
    expect(optimus.decode(optimus.encode(2147483647))).toEqual(2147483647);
  });

});

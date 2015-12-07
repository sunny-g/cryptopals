"use strict";

var expect = chai.expect;

describe('set 1', function() {
  describe('1.1 hex to base64', function() {
    
    it('should convert hex to base64', function() {
      var hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
      var base64String = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';

      var output = hex2Base64(hex);
      expect(output).to.equal(base64String);
    });
  });

  describe('1.2 fixed XOR', function() {
    it('should XOR two Buffers', function() {
      var hex1 = '1c0111001f010100061a024b53535009181c';
      var hex2 = '686974207468652062756c6c277320657965';
      var output = '746865206b696420646f6e277420706c6179';

      expect(xor2HexStrings(hex1, hex2)).to.equal(output)
    });
  });

  describe('1.3 single-byte XOR cipher', function() {
    it('should test something', function() {

    });
  });

  describe('1.4 detect single-char XOR', function() {
    it('should test something', function() {

    });
  });

  describe('1.5 implementing repeating-key XOR', function() {
    it('should test something', function() {

    });
  });

  describe('1.6 break repeating-key XOR', function() {
    it('should test something', function() {

    });
  });

  describe('1.7 AES in ECB mode', function() {
    it('should test something', function() {

    });
  });

  describe('1.8 detect AES in ECB mode', function() {
    it('should test something', function() {

    });
  });
});

describe('set 2', function() {

});

describe('set 3', function() {

});

describe('set 4', function() {

});

describe('set 5', function() {

});

describe('set 6', function() {

});

describe('set 7', function() {

});

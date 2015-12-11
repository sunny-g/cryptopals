"use strict";

let expect = chai.expect;
let should = chai.should();

describe('set 1', () => {
  describe('1.1 hex to base64', () => {
    
    it('should convert hex to base64', () => {
      const hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
      const base64String = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';

      const output = hex2Base64(hex);
      expect(output).to.equal(base64String);
    });
  });

  describe('1.2 fixed XOR', () => {
    it('should XOR two Buffers', () => {
      const hex1 = '1c0111001f010100061a024b53535009181c';
      const hex2 = '686974207468652062756c6c277320657965';
      const output = '746865206b696420646f6e277420706c6179';

      expect(xor2HexStrings(hex1, hex2)).to.equal(output)
    });
  });

  describe('1.3 single-byte XOR cipher', () => {
    it('should convert hex to ascii', () => {
      
    });

    it('should decrypt the hex string', () => {
      const ciphertext = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
    });
  });

  describe('1.4 detect single-char XOR', () => {
    it('should test something', () => {

    });
  });

  describe('1.5 implementing repeating-key XOR', () => {
    it('should test something', () => {

    });
  });

  describe('1.6 break repeating-key XOR', () => {
    it('should test something', () => {

    });
  });

  describe('1.7 AES in ECB mode', () => {
    it('should test something', () => {

    });
  });

  describe('1.8 detect AES in ECB mode', () => {
    it('should test something', () => {

    });
  });
});

describe('set 2', () => {

});

describe('set 3', () => {

});

describe('set 4', () => {

});

describe('set 5', () => {

});

describe('set 6', () => {

});

describe('set 7', () => {

});

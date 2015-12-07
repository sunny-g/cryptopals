"use strict";

/*
Convert hex to base64

The string:
49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d

Should produce:
SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t

So go ahead and make that happen. You'll need to use this code for the rest of the exercises.

Cryptopals Rule:
Always operate on raw bytes, never on encoded strings. Only use hex and base64 for pretty-printing.
 */

const hexTable = {
  0: 0x0, 1: 0x1, 2: 0x2, 3: 0x3,
  4: 0x4, 5: 0x5, 6: 0x6, 7: 0x7,
  8: 0x8, 9: 0x9, a: 0xa, b: 0xb,
  c: 0xc, d: 0xd, e: 0xe, f: 0xf,
};

const hexAlphabet = "0123456789abcdef";
const base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

class ByteArray extends Uint8Array {
  constructor(length) {
    super(new ArrayBuffer(length));
  }
}

function hex2Base64(hex) {
  return bytes2Base64(hex2Bytes(hex));
};

/**********************************************************/
/********************** helpers ***************************/
/**********************************************************/

// TODO: handle odd-number length hex strings
function hex2Bytes(hex) {
  return hex.split('').reduce((uint8, char, index) => {
    if (index % 2) { return uint8; }
    
    // set each element of the uint8 array to a one-byte int
    uint8[index / 2] = (hexTable[char] << 0x4) | hexTable[hex[index + 1]];
    return uint8;
  
  // every two hex chars is a byte, so make an ArrayBuffer of length hex.length / 2
  }, new ByteArray(Math.ceil(hex.length / 2)));
}

function bytes2Hex(bytes) {
  return bytes.reduce((hex, byte) => {
    return hex + hexAlphabet[byte >>> 0x4] + hexAlphabet[byte & 0xf];
  }, '');
}

function bytes2Base64(bytes) {
  let base64String = '';

  // every 3 bytes becomes 4 base64 chars
  for (var i = 0; i < bytes.length; i += 3) {
    let topByte = bytes[i];
    let midByte = bytes[i + 1];
    let botByte = bytes[i + 2];

    base64String += base64Alphabet[topByte >>> 0x2];
    base64String += base64Alphabet[((topByte & 0x3) << 0x4) | (midByte >>> 0x4)];
    base64String += base64Alphabet[((midByte & 0xf) << 0x2) | (botByte >>> 0x6)]
    base64String += base64Alphabet[botByte & 0x3f];
  }

  // pad with '=' if bytes.length is not divisible by 3
  if (bytes.length - i === 2) {
    base64String += '==';
  } else if (bytes.length - i === 1) {
    base64String += '=';
  }
  return base64String;
}

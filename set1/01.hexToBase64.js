/*
convert hex to base64

input: 49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d

output: SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t

note: always operate on raw bytes, never on encoded strings; only use hex and base64 for pretty-printing
 */

function hexToBase64(hex) {
  // every two hex chars is a byte
  // every 3 bytes becomes 4 base64 chars

  // make an ArrayBuffer of length hex.length / 2
  // create a uint8 array from the arraybuffer
  // set each item to parseInt('0x' + twoHexChars, 16)
  var arrayBuffer = new ArrayBuffer(hex.length / 2);
  var uint8 = new Uint8Array(arrayBuffer);
  hex.split('').forEach(function() {

  })
};

var hexDigitToHex = {
  0: 0x0,
  1: 0x1,
  2: 0x2,
  3: 0x3,
  4: 0x4,
  5: 0x5,
  6: 0x6,
  7: 0x7,
  8: 0x8,
  9: 0x9,
  a: 0xa,
  b: 0xb,
  c: 0xc,
  d: 0xd,
  e: 0xe,
  f: 0xf,
}

function hexToRawBytes(hex) {
  // make an ArrayBuffer of length hex.length / 2
  // create a uint8 array from the arraybuffer
  // set each item to parseInt('0x' + twoHexChars, 16)
  
}

function hexToBinary(hex) {

}

function bytesToBase64(bytes) {

}

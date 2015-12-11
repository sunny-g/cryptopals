"use strict";

/*
Fixed XOR

Write a function that takes two equal-length buffers and produces their XOR combination.

If your function works properly, then when you feed it the string:

1c0111001f010100061a024b53535009181c

... after hex decoding, and when XOR'd against:
686974207468652062756c6c277320657965

... should produce:
746865206b696420646f6e277420706c6179
 */

function xor2HexStrings(hex1, hex2) {
  return bytes2Hex(xor2ByteArrays(hex2Bytes(hex1), hex2Bytes(hex2)));
}

function xor2ByteArrays(buffer1, buffer2) {
  return buffer1.reduce((uint8, byte, index) => {
    uint8[index] = byte ^ buffer2[index];
    return uint8;
  }, new ByteArray(buffer1.length));
}

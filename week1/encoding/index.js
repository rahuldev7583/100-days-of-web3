const bs58 = require("bs58");

// bytes to ascii

function bytesToAscii(byteArray) {
  return byteArray.map((byte) => String.fromCharCode(byte)).join("");
}

const bytes = [72, 101, 108, 108, 111]; //  "Hello"
const asciiString = bytesToAscii(bytes);
console.log({ "bytes to ascii": asciiString });

// ascii to bytes

function asciiToBytes(asciiString) {
  const byteArray = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

const ascii = "Hello"; //  [72, 101, 108, 108, 111]
const byteArray = asciiToBytes(ascii);
console.log({ "ascii to bytes": byteArray });

//Uint8Array to ascii

function bytesToAsciiUint8(byteArray) {
  if (!(byteArray instanceof Uint8Array)) {
    byteArray = new Uint8Array(byteArray);
  }
  return new TextDecoder().decode(byteArray);
}

const bytesTwo = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
const asciiStr = bytesToAsciiUint8(bytesTwo);
console.log({ "Uint8Array to ascii": asciiStr });

// ascii to UintArray
function asciiToBytesUint8(asciiString) {
  return new Uint8Array([...asciiString].map((char) => char.charCodeAt(0)));
}

const asciiTwo = "Hello"; // Output: Uint8Array(5) [72, 101, 108, 108, 111]
const byteArrayTwo = asciiToBytesUint8(asciiTwo);
console.log({ "ascii to Uint8Array": byteArrayTwo });

//Uint8 to Hex
function arrayToHex(byteArray) {
  let hexString = "";
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, "0");
  }
  return hexString;
}

const byteArr = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
const hexString = arrayToHex(byteArr);
console.log({ "Uint8 to Hex": hexString }); // Output: "48656c6c6f"

//Hex to Uint8

function hexToArray(hexString) {
  const byteArray = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return byteArray;
}

const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);
console.log({ "Hex to Uint8": byteArrayFromHex }); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

//Uint8 to base64

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log({ "Uint8 to base64": base64Encoded });

//Uint8 to base58

function uint8ArrayToBase58(uint8Array) {
  return bs58.default.encode(uint8Array);
}

const byteArr1 = new Uint8Array([72, 101, 108, 108, 111]); //  "Hello"
const base58String = uint8ArrayToBase58(byteArr1);
console.log({ "Uint8 to base58": base58String }); // Output: Base58 encoded string

//base 58 to Uint8

function base58ToUint8Array(base58String) {
  return bs58.default.decode(base58String);
}

const base58 = base58String; // Use the previously encoded Base58 string
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log({ "base58 to Uint8": byteArrayFromBase58 }); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

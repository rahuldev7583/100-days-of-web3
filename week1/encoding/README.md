# Encoding

Encoding is the process of converting data from one form to another. In computing, this often involves transforming human-readable text or raw binary data into a format that can be easily stored, transmitted, or processed by computers.

## Types of Encoding

### ASCII (American Standard Code for Information Interchange)

- 7-bit encoding scheme
- Represents 128 characters, including English letters, numbers, and basic punctuation

### Hexadecimal

- Base-16 number system
- Uses digits 0-9 and letters A-F
- Often used to represent binary data in a more human-readable format

### Base64

- Represents binary data using 64 characters
- Commonly used for encoding binary data for transmission over text-based protocols

### Base58

- Similar to Base64, but omits similar-looking characters (0, O, I, l) and non-alphanumeric characters
- Often used in cryptocurrency systems like Bitcoin

### UTF-8

- Variable-width character encoding
- Capable of encoding all valid Unicode code points
- Backward compatible with ASCII

## ASCII vs UTF-8

- ASCII is a subset of UTF-8
- UTF-8 can represent a much wider range of characters and symbols
- UTF-8 uses variable-width encoding, while ASCII is fixed-width

## TypedArrays in JavaScript

JavaScript provides several TypedArray objects for working with binary data:

- Int8Array
- Uint8Array
- Uint8ClampedArray
- Int16Array
- Uint16Array
- Int32Array
- Uint32Array
- Float32Array
- Float64Array

These allow efficient storage and manipulation of binary data in JavaScript.

## ArrayBuffer and Uint8Array

### ArrayBuffer

An ArrayBuffer is a fixed-length binary data buffer in memory. It represents a contiguous block of binary data, but you can't directly manipulate its contents. Think of it as a raw chunk of memory.

ArrayBuffer is the raw binary data.
It's created with a fixed length that can't be changed.
It doesn't have any format or specific data type associated with it.
To work with the data in an ArrayBuffer, you need to create a view using a TypedArray or DataView.

- Represents a fixed-length binary data buffer
- Cannot be directly manipulated
- Serves as the core binary data container for TypedArrays

### Uint8Array

Uint8Array is a TypedArray that provides a view into an ArrayBuffer, interpreting it as an array of 8-bit unsigned integers.

It allows you to read and write individual bytes in the buffer.
Each element is treated as a number between 0 and 255.
It can be created from an existing ArrayBuffer or as a new array with its own buffer.

- Represents an array of 8-bit unsigned integers
- Provides a view into an ArrayBuffer
- Allows direct manipulation of binary data

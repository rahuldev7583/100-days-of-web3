# Hash

## Overview

This project provides a simple implementation of hashing algorithms, with a focus on SHA256 (Secure Hash Algorithm 256-bit).

## What is Hashing?

Hashing is a process of converting input data of arbitrary size into a fixed-size string of characters. The output, called a hash value or digest, is typically a hexadecimal number.

## Key features of hashing include:

1. The same input always produces the same output.
2. It's computationally infeasible to reverse a hash to obtain the original input.
3. A small change in the input results in a significantly different output.

Hashing is used in various applications, including:

- Data integrity - Verifying the data has not been altered.
- Cryptography- Securing data, Passwords, encrypting messages
- Digital signatures - Ensuring that a message has not been altered.

## SHA256

SHA
SHA256 is part of the SHA-2 (Secure Hash Algorithm 2) family, designed by the U.S. National Security Agency (NSA). Key features of SHA256 include:

- Produces a 256-bit (32-byte) hash value
- Typically represented as a 64-character hexadecimal number
- Widely used in security applications and protocols

### Proof of work

Proof of Work (PoW) is a consensus mechanism widely used in blockchain networks, such as Bitcoin, to secure transactions and prevent fraudulent activities like double-spending. The basic idea of PoW is to require participants (often called miners) to solve a computationally intensive puzzle before they can add a new block to the blockchain.

The puzzle typically involves finding a value (called a nonce) that, when hashed with other block data, produces a hash with certain characteristics, such as a specific number of leading zeros. The difficulty of the puzzle can be adjusted by changing the number of required leading zeros in the hash.

In Proof of Work, the difficulty of the puzzle is determined by the number of leading zeros required in the hash. The more zeros required, the more difficult the puzzle becomes, because the number of possible inputs that will produce such a hash decreases exponentially. As a result, the time required to find a solution increases.

As the number of required leading zeros ("00000") increases, the function will take longer to find a valid input because the chances of randomly finding a hash that meets the criteria become smaller.

The code provides two main functions:

1. `findHashStartWith`: Finds an input that, when hashed with SHA256, produces a hash starting with a specified prefix.
2. `findHashStartWithAndHash`: Finds an input that, when combined with a given prefix and hashed, produces a hash starting with a specified hash prefix.

### The key aspects of PoW demonstrated in this code are:

1. **Difficulty**: Represented by the number of leading zeros required in the hash.
2. **Nonce**: A variable (in this case, `input`) that is incremented to find a hash meeting the difficulty requirement.
3. **Hashing**: Using SHA256 to create a unique hash from the input data.

## How Difficulty Increases

In this implementation, difficulty is determined by the number of leading zeros required in the hash. As more zeros are added to the required prefix, the difficulty increases exponentially:

- Requiring 1 zero: 1/16 chance (hexadecimal)
- Requiring 2 zeros: 1/256 chance
- Requiring 3 zeros: 1/4,096 chance
- Requiring 4 zeros: 1/65,536 chance
- And so on...

Each additional zero makes the puzzle 16 times harder to solve, significantly increasing the computational work required.

## Resource

### SHA256 online tool helps you calculate hash from string or binary. You can input UTF-8, UTF-16, Hex to SHA256.

https://emn178.github.io/online-tools/sha256.html

## Blockchain Demo

https://andersbrownworth.com/blockchain/

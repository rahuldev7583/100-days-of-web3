# Cryptographic Key Pair Generator

This Node.js project demonstrates the generation of public-private key pairs using two popular cryptographic algorithms: EdDSA (specifically ED25519) and ECDSA (using the secp256k1 curve).

## Cryptographic Concepts

### Public Key Cryptography

Public key cryptography, also known as asymmetric cryptography, uses a pair of keys: a public key and a private key. The public key can be freely distributed, while the private key must be kept secret. This system allows for secure communication and digital signatures.

### EdDSA (Edwards-curve Digital Signature Algorithm)

EdDSA is a digital signature scheme using a variant of Schnorr signature based on twisted Edwards curves. This project focuses on ED25519, which is EdDSA using SHA-512 and Curve25519.

- **ED25519**: A specific implementation of EdDSA using the edwards25519 curve. It provides fast single-signature verification and high security.

### ECDSA (Elliptic Curve Digital Signature Algorithm)

ECDSA is a digital signature algorithm that uses elliptic curve cryptography. This project focuses on the secp256k1 curve, which is widely used in blockchain technologies, particularly in Bitcoin and Ethereum.

- **secp256k1**: A specific elliptic curve used in ECDSA. It's known for its efficiency and is widely adopted in cryptocurrency systems.

## Libraries Used

**@noble/ed25519**: A modern, secure, and fast ED25519 implementation for JavaScript.
**@solana/web3.js**: Solana's JavaScript API, which includes utilities for ED25519 key generation.
**@noble/secp256k1**: A secure and efficient implementation of the secp256k1 elliptic curve.
**ethers**: A complete Ethereum wallet implementation and utilities in JavaScript and TypeScript.

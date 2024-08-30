import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { toHexString, toBase64String, toBase58String } from "./helper";

// Generate a new keypair
const keypair = Keypair.generate();

// Extract the public and private keys
const publicKey = keypair.publicKey.toBytes();
const secretKey = keypair.secretKey;

console.log("Public Key (Hex):", toHexString(publicKey));
console.log("Public Key (Base64):", toBase64String(publicKey));
console.log("Public Key (Base58):", toBase58String(publicKey));

console.log("Private Key (Hex):", toHexString(secretKey));
console.log("Private Key (Base64):", toBase64String(secretKey));
console.log("Private Key (Base58):", toBase58String(secretKey));

// Convert the message "hello world" to a Uint8Array
const message = new TextEncoder().encode("hello world");

console.log("Message (UTF-8):", new TextDecoder().decode(message));

// Sign the message
const signature = nacl.sign.detached(message, secretKey);

console.log("Signature (Hex):", toHexString(signature));
console.log("Signature (Base64):", toBase64String(signature));
console.log("Signature (Base58):", toBase58String(signature));

// Verify the signature
const isValid = nacl.sign.detached.verify(message, signature, publicKey);

// Output the result
console.log("Is the signature valid?", isValid); // Should print `true` if the signature is valid

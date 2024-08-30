import * as ed from "@noble/ed25519";
import { toHexString, toBase64String, toBase58String } from "./helper";

export async function main() {
  // Generate a secure random private key
  const privKey = ed.utils.randomPrivateKey();

  console.log("Private Key (Hex):", toHexString(privKey));
  console.log("Private Key (Base64):", toBase64String(privKey));
  console.log("Private Key (Base58):", toBase58String(privKey));

  // Convert the message "hello world" to a Uint8Array
  const message = new TextEncoder().encode("hello world");

  console.log("Message (UTF-8):", new TextDecoder().decode(message));

  // Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  console.log("Public Key (Hex):", toHexString(pubKey));
  console.log("Public Key (Base64):", toBase64String(pubKey));
  console.log("Public Key (Base58):", toBase58String(pubKey));

  // Sign the message
  const signature = await ed.signAsync(message, privKey);

  console.log("Signature (Hex):", toHexString(signature));
  console.log("Signature (Base64):", toBase64String(signature));
  console.log("Signature (Base58):", toBase58String(signature));

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  // Output the result
  console.log("Is the signature valid?", isValid); // Should print `true` if the signature is valid
}

main();

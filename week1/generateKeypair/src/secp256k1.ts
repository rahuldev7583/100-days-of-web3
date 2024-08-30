import * as secp from "@noble/secp256k1";
import { toHexString, toBase64String, toBase58String } from "./helper";

async function main() {
  const privKey = secp.utils.randomPrivateKey(); // Secure random private key
  // sha256 of 'hello world'

  console.log("Private Key (Hex):", toHexString(privKey));
  console.log("Private Key (Base64):", toBase64String(privKey));
  console.log("Private Key (Base58):", toBase58String(privKey));

  const msgHash =
    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";
  const pubKey = secp.getPublicKey(privKey);

  console.log("Public Key (Hex):", toHexString(pubKey));
  console.log("Public Key (Base64):", toBase64String(pubKey));
  console.log("Public Key (Base58):", toBase58String(pubKey));

  const signature = await secp.signAsync(msgHash, privKey); // Sync methods below

  const isValid = secp.verify(signature, msgHash, pubKey);
  console.log(isValid);
}

main();

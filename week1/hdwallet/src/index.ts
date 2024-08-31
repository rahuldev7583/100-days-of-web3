import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

// Generate a 12-word mnemonic
// const mnemonic = generateMnemonic(128);
// console.log("Generated Mnemonic:", mnemonic);

// Generate a 24-word mnemonic
// const mnemonic24 = generateMnemonic(256);
// console.log("Generated 24 words Mnemonic:", mnemonic24);

// const seed = mnemonicToSeedSync(mnemonic);
// console.log("Seed:", seed);

// const mnemonic = generateMnemonic();
const mnemonic = process.env.MNEMONIC;

if (!mnemonic) {
  throw new Error("MNEMONIC is not defined in the environment variables.");
}

const seed = mnemonicToSeedSync(mnemonic);
for (let i = 0; i < 3; i++) {
  const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}

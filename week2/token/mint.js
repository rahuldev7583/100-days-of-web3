require("dotenv").config();

const { createMint } = require("@solana/spl-token");
const {
  Keypair,
  Connection,
  clusterApiUrl,
  TOKEN_PROGRAM_ID,
} = require("@solana/web3.js");

const decodedPrivateKey = Uint8Array.from(
  process.env.PRIVATE_KEY.split(",").map(Number)
);
const payer = Keypair.fromSecretKey(decodedPrivateKey);

const mintAthority = payer;

const connection = new Connection(clusterApiUrl("devnet"));

async function createMintForToken(payer, mintAuthority) {
  const mint = await createMint(
    connection,
    payer,
    mintAuthority,
    null,
    6,
    TOKEN_PROGRAM_ID
  );
  console.log("Mint created at", mint.toBase58());
  return mint;
}

async function main() {
  const mint = await createMintForToken(payer, mintAthority.publicKey);
}

main();

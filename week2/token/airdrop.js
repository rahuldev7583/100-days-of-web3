require("dotenv").config();

const {
  Connection,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  PublicKey,
} = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"));

async function airdrop(publicKey, amount) {
  const airdropSignature = await connection.requestAirdrop(
    new PublicKey(publicKey),
    amount
  );
  await connection.confirmTransaction({ signature: airdropSignature });
  return airdropSignature;
}

airdrop(process.env.PUBLIC_KEY, LAMPORTS_PER_SOL)
  .then((signature) => {
    console.log("Airdrop signature:", signature);
  })
  .catch((err) => {
    console.error("Airdrop failed:", err);
  });

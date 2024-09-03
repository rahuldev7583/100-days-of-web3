require("dotenv").config();

const {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} = require("@solana/spl-token");
const {
  Keypair,
  Connection,
  clusterApiUrl,
  TOKEN_PROGRAM_ID,
  PublicKey,
} = require("@solana/web3.js");

const decodedPrivateKey = Uint8Array.from(
  process.env.PRIVATE_KEY.split(",").map(Number)
);
const payer = Keypair.fromSecretKey(decodedPrivateKey);

const mintAuthority = payer;

const connection = new Connection(clusterApiUrl("devnet"));

async function createMintForToken(payer, mintAuthority) {
  try {
    const mint = await createMint(
      connection,
      payer,
      mintAuthority,
      null,
      6, // Number of decimals for the token
      TOKEN_PROGRAM_ID
    );
    console.log("Mint created at", mint.toBase58());
    return mint;
  } catch (error) {
    console.error("Failed to create mint:", error);
    throw error;
  }
}

async function mintNewTokens(mint, to, amount) {
  try {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      payer,
      mint,
      new PublicKey(to)
    );

    console.log("Token account created at", tokenAccount.address.toBase58());
    await mintTo(connection, payer, mint, tokenAccount.address, payer, amount);
    console.log("Minted", amount, "tokens to", tokenAccount.address.toBase58());
  } catch (error) {
    console.log(tokenAccount.address.toBase58());

    console.error("Failed to mint tokens:", error);
    throw error;
  }
}

async function main() {
  try {
    const mint = await createMintForToken(payer, mintAuthority.publicKey);
    await mintNewTokens(mint, mintAuthority.publicKey, 100 * 10 ** 6); // Adjusting for decimals
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main();

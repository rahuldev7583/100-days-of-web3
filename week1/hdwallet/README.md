# HDWallet

## Hierarchical Deterministic (HD) Wallets (BIP32)

Hierarchical Deterministic (HD) Wallets, as defined in Bitcoin Improvement Proposal 32 (BIP32), are a system of deriving keys from a single starting point known as a seed. This system allows for the creation of "child" keys from "parent" keys in a hierarchical structure.

Key features of HD wallets:

1. Deterministic: All keys can be recreated from the seed, allowing easy backups.
2. Hierarchical: Keys are organized in a tree structure, enhancing privacy and organization.
3. Sequence of key pairs: Can generate a sequence of public/private key pairs from the seed.

The hierarchical structure is denoted using "derivation paths", which show the exact route from the master key to the specific key being used.

## Mnemonic Phrases (BIP39)

BIP39 (Bitcoin Improvement Proposal 39) introduces a standardized way of generating mnemonic phrases. These are human-readable sequences of words that can be used to derive deterministic wallets.

Key aspects of BIP39:

1. Mnemonic generation: Creates a random sequence of words (usually 12 or 24) from a standardized word list.
2. Entropy: The mnemonic represents a certain amount of entropy (randomness). 12 words provide 128 bits of entropy, while 24 words provide 256 bits.
3. Seed generation: The mnemonic is used along with an optional passphrase to generate a binary seed.

Process:

1. Generate random entropy (128 to 256 bits)
2. Create a checksum of the entropy
3. Combine entropy and checksum
4. Divide the result into 11-bit segments
5. Map each 11-bit value to a word from the predefined word list

The resulting mnemonic is much easier for humans to record and remember compared to raw binary data.

## Derivation Paths (BIP44)

BIP44 (Bitcoin Improvement Proposal 44) defines a logical hierarchy for deterministic wallets based on BIP32. It introduces a standard derivation path structure:

Where:

- `m`: The master node
- `purpose`: Always set to 44' for BIP44
- `coin_type`: A number representing the cryptocurrency (e.g., 0' for Bitcoin, 501' for Solana)
- `account`: Allows users to split funds into different accounts
- `change`: 0 for external (receiving) addresses, 1 for internal (change) addresses
- `address_index`: The index of the address (0, 1, 2, ...)

The apostrophe (') indicates hardened derivation, which provides improved security by preventing a compromised child key from compromising its parent key.

In the context of this project:

- We use `m/44'/501'/${i}'/0'`
- `501'` is specific to Solana
- `${i}'` allows for multiple accounts
- `0'` indicates we're using the external chain

## Seed Generation

The seed is the starting point for generating all keys in an HD wallet. In BIP39:

1. The mnemonic phrase is combined with an optional passphrase.
2. This combination is put through PBKDF2-HMAC-SHA512, a key stretching function.
3. The result is a 512-bit seed, which is then used as the master key for BIP32 derivation.

## Key Derivation

Once we have the seed:

1. We use the derivation path to navigate the hierarchical structure.
2. At each step of the path, we derive a new key using the parent key and the index.
3. The final derived key is used to generate the Solana address.

For Solana specifically, we use Ed25519 elliptic curve cryptography, which is why the `ed25519-hd-key` library is used in this project.

## Solana Address Generation

In Solana:

1. The public key is derived from the secret key using Ed25519.
2. This public key is then encoded in Base58 format to create the Solana address.

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository

git clone git@github.com:rahuldev7583/100-days-of-web3.git

cd week1/hdwallet

2. Install dependencies

npm install

3. Set up environment variables

- Create a `.env` file in the root directory of the project
- Add your mnemonic to the file:
  ```
  MNEMONIC=your mnemonic phrase here
  ```

## Testing with a Fresh Wallet

To verify the correctness of this HD wallet implementation, you can create a new wallet in Phantom or Backpack and compare the generated addresses. Follow these steps:

1. Create a Fresh Wallet

   - Open Phantom or Backpack browser extension
   - Click on "Create New Wallet"
   - Follow the prompts to create a new wallet
   - **IMPORTANT**: Write down the seed phrase (usually 12 or 24 words) securely

2. Set Up the Environment

   - In your project directory, create or edit the `.env` file
   - Add your seed phrase to the file:
     ```
     MNEMONIC=your seed phrase here
     ```
   - Save the file

3. Run the Index File

   - Open a terminal in your project directory
   - Run the command: `npx tsc`
   - Run the command: `node dist/index.js`
   - The script will generate and display three Solana public addresses

4. Compare Addresses

   - In your wallet (Phantom or Backpack), find the option to "Add Account" or "Create New Account"
   - Create two additional accounts (you should now have three total)
   - Compare the addresses of these three accounts with the ones generated by your script
   - They should match exactly

5. Verification
   - If the addresses match, it confirms that your HD wallet implementation is correctly deriving addresses using the same method as popular Solana wallets

⚠️ CAUTION:

- Use a fresh wallet created specifically for this test
- Do not use an existing wallet or one containing any funds
- After testing, it's recommended to delete this test wallet for security
- Never share your seed phrase or use it on multiple devices or applications

By following these steps, you can verify that your HD wallet implementation is correctly generating Solana addresses in the same sequence as established wallet providers. This test demonstrates the interoperability and standardization of HD wallets across different implementations.

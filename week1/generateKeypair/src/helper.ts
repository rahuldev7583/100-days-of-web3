import * as bs58 from "bs58";

// Helper function to convert Uint8Array to hex string
export function toHexString(byteArray: Uint8Array): string {
  return Array.from(byteArray, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

// Helper function to convert Uint8Array to base64 string
export function toBase64String(byteArray: Uint8Array): string {
  return Buffer.from(byteArray).toString("base64");
}

// Helper function to convert Uint8Array to base58 string
export function toBase58String(byteArray: Uint8Array): string {
  return bs58.default.encode(byteArray);
}

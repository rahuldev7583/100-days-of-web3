const crypto = require("crypto");

const input = "secretPassword";
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(hash);

const crypto = require("crypto");

const input = "secretPassword";
const hash = crypto.createHash("sha256").update(input).digest("hex");
console.log(hash);

//finds an input that produces a hash starting with a specified prefix

function findHashStartWith(prefix) {
  let input = 0;

  console.time("Time taken");

  while (true) {
    const inputStr = input.toString();
    const hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      console.timeEnd("Time taken");

      return { input: input, hash: hash };
    }
    input++;
  }
}

const result = findHashStartWith("00000");
console.log(result);

//finds an input that, when combined with a given prefix and hashed, produces a hash starting with a specified hash prefix

function findHashStartWithAndHash(prefix, hash) {
  let input = 0;
  console.time("Time taken");
  while (true) {
    let inputStr = prefix + input.toString();
    const hashValue = crypto
      .createHash("sha256")
      .update(inputStr)
      .digest("hex");

    if (hashValue.startsWith(hash)) {
      console.timeEnd("Time taken");
      return { input: inputStr, hash: hashValue };
    }
    input++;
  }
}

const resultTwo = findHashStartWithAndHash("100xdevs", "00000");
console.log(resultTwo);

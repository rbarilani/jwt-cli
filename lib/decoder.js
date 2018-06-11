const jwt = require("jsonwebtoken");

class Decoder {
  decode(data) {
    let rawToken = data.trim();
    rawToken = rawToken.replace(/^"(.*)"$/, "$1"); // This regexp will only remove the quotes if they are the first and last characters of the string
    const decoded = jwt.decode(rawToken, { complete: true });
    if (decoded === null) {
      throw new Error("Can't parse token. Invalid input.");
    }
    return decoded;
  }
}

module.exports = Decoder;

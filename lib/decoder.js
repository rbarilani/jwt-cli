const jwt = require("jsonwebtoken");

class Decoder {
  decode(data) {
    const token = data.trim();
    const decoded = jwt.decode(token, { complete: true });
    if (decoded === null) {
      throw new Error("Can't parse token. Invalid input.");
    }
    return decoded;
  }
}

module.exports = Decoder;

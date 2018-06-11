#!/usr/bin/env node

const Decoder = require("./lib/decoder");
const { ArgInput, PipeInput } = require("./lib/inputs");
const DecodeController = require("./lib/decode-controller");

/**
 * jwt command line utility
 *
 * Decode a JWT token and output the decoded JSON string
 *
 * Usage:
 *
 * `echo "$JWT_TOKEN" | jwt | jq`
 *
 * or
 *
 * `jwt "$JWT_TOKEN" | jq`
 *
 */
(function main() {
  const input = process.stdin.isTTY
    ? new ArgInput({ process })
    : new PipeInput({ process });

  const decoder = new Decoder();
  const ctrl = new DecodeController({
    process,
    console,
    decoder
  });

  input.onData(ctrl.handler());
})();

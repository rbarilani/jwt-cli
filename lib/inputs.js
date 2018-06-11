class Input {
  constructor({ process }) {
    this.process = process;
  }
}

class PipeInput extends Input {
  onData(cb) {
    let data = "";
    this.process.stdin.resume();
    this.process.stdin.setEncoding("utf8");

    this.process.stdin.on("data", function(chunk) {
      data += chunk;
    });

    this.process.stdin.on("end", function() {
      cb(data);
    });
  }
}

class ArgInput extends Input {
  onData(cb) {
    const data = this.process.argv[2];
    cb(data);
  }
}

module.exports = {
  PipeInput,
  ArgInput
};

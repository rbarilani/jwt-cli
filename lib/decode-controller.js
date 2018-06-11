class DecodeController {
  constructor({ process, console, decoder }) {
    this.decoder = decoder;
    this.process = process;
    this.console = console;
  }
  handler() {
    return data => {
      try {
        const token = this.decoder.decode(data);
        this.process.stdout.write(JSON.stringify(token));
      } catch (error) {
        this.console.error(error.message);
        this.process.exit(1);
      }
    };
  }
}

module.exports = DecodeController;

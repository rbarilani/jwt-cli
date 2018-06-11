@rbarilani/jwt-cli
==================

A simple command line utility to decode JWT tokens.

## Install

```bash
npm install -g @rbarilani/jwt-cli
```

## Usage

You can use the tool with piped input:

````bash
echo "$JWT_TOKEN" | jwt 
```

or passing the input as the first argument:

```bash
jwt $JWT_TOKEN
```

> If you want pretty JSON output you can use [jq](https://github.com/stedolan/jq) like so: ```echo "$JWT_TOKEN" | jwt | jq```

## License 

Copyright 2018 Ruben Barilani

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


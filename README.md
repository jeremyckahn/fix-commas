# fix-commas

A simple CLI tool to convert a JavaScript file from comma-first to comma-last.

## Why

Because ESLint's `--fix` option for [`comma-style`](http://eslint.org/docs/rules/comma-style) doesn't work properly.

## Installation

```
npm i -g fix-commas
```

## Usage

```
$: fix-commas --help

  Usage: fix-commas [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    --fix          Overwrite file with fixed code
```

Omitting `--fix` prints the fixed text to stdout.

## Known limitations

This tool is pretty bare-bones:

  * Only partial support for comments
  * Only goes from comma-first to comma-last, not the other way around

If you'd like to improve this project, pull requests are welcomed!

Please review the changes made with this tool; don't run it and commit blindly.

## License

MIT.

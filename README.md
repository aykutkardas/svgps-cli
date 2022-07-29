# svgps-cli

[![npm](https://img.shields.io/npm/v/svgps-cli?color=%234fc921)](https://www.npmjs.com/package/svgps-cli)
[![License](https://img.shields.io/badge/License-MIT-green.svg?color=%234fc921)](https://opensource.org/licenses/MIT)

**SVGPS** converts your icons into a single JSON file that is ready to use in your frontend or mobile projects. This project is the CLI version of the [svgps](https://github.com/aykutkardas/svgps) package.

You can also use it online: [svgps.app](https://github.com/aykutkardas/svgps.app)

## Install

```
npm install -g svgps-cli
```

## Syntax

```
svgps <input-path> <output-path> [...options]
```

## Usage

### Combine All Icons

It parses all icons and combines them into a single JSON file.

```sh
svgps your/path/icons your/output/path/icons.json
```

### Parse Single File

Use `--file` option

```sh
svgps your/path/arrow-down.svg your/output/path/arrow-down.json --file
```

### IcoMoon Template

Use `--template` option with `icomoon`

```sh
svgps your/path/icons your/output/path/icons.json --template icomoon
```

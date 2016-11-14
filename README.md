# replace-section

[![NPM version](https://img.shields.io/npm/v/replace-section.svg?style=flat-square)](https://npmjs.com/package/replace-section) [![NPM downloads](https://img.shields.io/npm/dm/replace-section.svg?style=flat-square)](https://npmjs.com/package/replace-section) [![Build Status](https://img.shields.io/circleci/project/egoist/replace-section/master.svg?style=flat-square)](https://circleci.com/gh/egoist/replace-section)

## Install

```bash
$ npm install --save replace-section
```

## Usage

```js
const input = `const foo = 1
// @remove start
const text = 'not me'
// @remove end
const bar = 2`

replaceSection({
  input,
  startWith: '// @remove start',
  endWith: '// @remove end',
  replaceWith: ''
})
//=> yields
/*
const foo = 1
const bar = 2
*/
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)

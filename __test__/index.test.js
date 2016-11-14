const replaceSection = require('../src')

test('main', () => {
  const result = replaceSection({
    input: `const foo = 1
// @replace-on-reject start
hey!
// @replace-on-eject end
const bar = 2
`,
    startWith: '// @replace-on-reject start',
    endWith: '// @replace-on-eject end',
    replaceWith: 'lol'
  })

  expect(result).toBe(`const foo = 1
lol
const bar = 2
`)
})

module.exports = function ({
  input,
  startWith,
  endWith,
  replaceWith
} = {}) {
  const RE = new RegExp(`${startWith}[^]*${endWith}`, 'g')
  return input.replace(RE, replaceWith)
}

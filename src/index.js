export default function ({
  input,
  startWith,
  endWith,
  replaceWith
} = {}) {
  const RE = new RegExp(`${startWith}([\s\S]*?)${endWith}`, 'gm')
  return input.replace(RE, replaceWith)
}

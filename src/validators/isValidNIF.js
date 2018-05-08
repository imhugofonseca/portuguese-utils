/**
 * Validates a portuguese fiscal number (NIF)
 * @param {String} nif
 */
export default function isValidNIF(nif) {
  if (typeof nif !== 'string') {
    return false
  }

  if (!/^\d{9}$/g.test(nif)) {
    return false
  }

  const split = nif.split('')
  const ident = split[0]

  if (['0', '3', '4', '7'].indexOf(ident) !== -1) {
    return false
  }

  const total = split
    .slice(0, split.length - 1)
    .map(sp => parseInt(sp, 10))
    .reduce((sum, nif, index, array) => sum + nif * (array.length + 1 - index), 0)
  const divided = 11 - total % 11
  const control = divided >= 10 ? 0 : divided
  return control === parseInt(split[split.length - 1], 10)
}

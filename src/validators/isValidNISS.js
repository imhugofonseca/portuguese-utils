/**
 * Validates a portuguese Social Security Identifier Number (NISS)
 *
 * Helpful guides:
 * - Portaria n.º 1483/2004 @ https://dre.pt/pesquisa/-/search/219725/details/maximized
 * - Algorithm @ http://maracujah.net/files/software/NISS.pdf
 *
 *
 * @param {String} niss
 */
export default function isValidNISS(niss) {
  if (typeof niss !== 'string') {
    return false
  }

  // Must have 11 digits
  // 1st digit must be 1=singular person, OR 2=collective person
  if (!/^[1|2]\d{10}$/g.test(niss)) {
    return false
  }

  const arrayNISS = niss
    .split('')
    .reverse()
    .map(sp => parseInt(sp, 10))
  const arrayFactors = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29] // based on prime numbers

  let total = 0
  let i = 1 // ignore control digit
  let loops = arrayNISS.length

  // multiply and sum
  for (i; i < loops; i++) {
    total = total + arrayNISS[i] * arrayFactors[i]
  }

  const rest = total % 10
  const control = 9 - rest

  return control === arrayNISS[0] ? true : false
}

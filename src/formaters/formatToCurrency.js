/**
 *
 * Formats number (integer or float) to currency
 * @param {number} number
 *
 **/

/**
  * Helper function
  * Returns a string number with the thounsands separator
  + Example: 1000000 => 1.000.000
  * @param {string} integer
**/

function intToThousands(integer) {
  let count = 0

  return integer
    .split('')
    .reverse()
    .reduce((acc, curr) => {
      if (count === 3) {
        acc += '.' + curr
        count = 0
      } else {
        acc += curr
      }
      count++
      return acc
    }, '')
    .split('')
    .reverse()
    .join('')
}

export default function formatCurrency(number, numDecimals) {
  if (typeof number !== 'number' || isNaN(number)) return false

  let numTrailingZeroes = numDecimals === undefined ? 0 : numDecimals
  let integer, decimal, output, string

  string =
    numTrailingZeroes !== 0
      ? number.toFixed(numTrailingZeroes)
      : Math.floor(number).toString()

  if (string.indexOf('.') !== -1) {
    let split = string.split('.')
    decimal = split[1]
    integer = intToThousands(split[0])
    output = integer + ',' + decimal
  } else {
    integer = intToThousands(string)
    output = integer
  }

  output = output + ' €'
  return output
}

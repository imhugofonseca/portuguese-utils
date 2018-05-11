/**
 *
 * Formats number (integer or float) to currency
 * @param {number} number
 *
 **/

export default function formatToCurrency(number, numDecimals) {
  if (typeof number !== 'number') {
    throw new TypeError('Argument number must be of type number')
  }

  let integer
  let decimal
  let output
  let string = numDecimals
    ? number.toFixed(numDecimals)
    : Math.floor(number).toString()

  if (string.indexOf('.') !== -1) {
    let split = string.split('.')
    decimal = split[1]
    integer = addSeparators(split[0])
    output = `${integer},${decimal}`
  } else {
    integer = addSeparators(string)
    output = integer
  }

  output = `${output} €`
  return output
}

/**
  * Helper function
  * Returns a the 'number' with thousands separator
  + Example: 1000000 => 1.000.000
  * @param {string} number
**/

function addSeparators(number) {
  if (typeof number !== 'string' || isNaN(parseInt(number))) {
    throw new TypeError('Argument number must be digits of type String')
  }

  if (number.indexOf('.') !== -1) {
    throw new TypeError('Argument must be an integer of type String')
  }

  let count = 0

  return number
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

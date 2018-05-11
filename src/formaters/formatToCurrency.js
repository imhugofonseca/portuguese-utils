/**
 *
 * Formats number (integer or float) to currency
 * @param {number} number
 * @param {string|number} numDecimals
 * @param {boolean} ISO
 *
 **/

export default function formatToCurrency(number, numDecimals, ISO) {
  if (typeof number !== 'number') {
    throw new TypeError('Argument number must be of type number')
  }

  let integer
  let decimal
  let output
  let string = numDecimals
    ? number.toFixed(numDecimals)
    : Math.floor(number).toString()
  let symbol = ISO ? 'EUR' : '€'

  if (string.indexOf('.') !== -1) {
    let split = string.split('.')
    decimal = split[1]
    integer = addSeparators(split[0])
    output = `${integer},${decimal}`
  } else {
    integer = addSeparators(string)
    output = integer
  }

  output = `${output} ${symbol}`
  return output
}

/**
  * Helper function
  * Returns a number with thousands separator
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
    .reduce((end, digit, index) => {
      end.push(index && index % 3 === 0 ? `${digit} ` : digit)
      return end
    }, [])
    .reverse()
    .join('')
}

/**
 *
 * Formats number (integer, float or string) to currency
 * @param {number|string} number
 * @param {string|number} numDecimals
 * @param {boolean} ISO
 *
 **/

export default function formatToCurrency(number, numDecimals, ISO) {
  if (typeof number !== 'number' && typeof number !== 'string') {
    throw new TypeError('Argument number must be of type number or string')
  }

  let numberToFormat = number

  if (typeof number === 'string') {
    numberToFormat = parseFloat(number.replace(',', '.'))
    if (isNaN(numberToFormat)) throw new Error('Parsed string is NaN')
  }

  let integer
  let decimal
  let output
  let string = numDecimals
    ? numberToFormat.toFixed(numDecimals)
    : Math.floor(numberToFormat).toString()
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

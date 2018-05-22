/**
 * Helper function to convert a string with a float written with ','
 * for decimal places.
 * @param {string} number
 */
function parseToEnglishFloat(number) {
  const parsed = parseFloat(number.replace(',', '.'))
  if (isNaN(parsed)) throw new Error('Parsed string is NaN')

  return parsed
}

/**
 *
 * Formats number (integer, float or string) to currency
 * @param {number|string} number
 * @param {string|number} numDecimals
 * @param {boolean} ISO
 *
 **/
export default function formatToCurrency(number, numDecimals = 0, ISO) {
  if (typeof number !== 'number' && typeof number !== 'string') {
    throw new TypeError('Argument number must be of type number or string')
  }

  let numberToFormat = number

  if (typeof number === 'string') {
    numberToFormat = parseToEnglishFloat(number)
  }

  const integer = Math.floor(numberToFormat).toString()
  const decimal = numDecimals
    ? numberToFormat.toFixed(numDecimals).split('.')[1]
    : ''

  const output = `${addSeparators(integer)}${numDecimals ? ',' : ''}${decimal}`
  const symbol = ISO ? 'EUR' : '€'

  return `${output} ${symbol}`
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

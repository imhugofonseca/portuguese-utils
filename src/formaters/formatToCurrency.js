/**
 * Helper function to convert a string with a float written with ','
 * for decimal places.
 * @param {string} number
 **/
function parseToEnglishFloat(number) {
  const parsed = parseFloat(number.replace(',', '.'))
  if (isNaN(parsed)) throw new Error('Parsed string is NaN')

  return parsed
}

function getPaddedDecimal(number, decimals) {
  const splitted = number.toFixed(decimals).split('.')
  return splitted.length > 1 ? `,${splitted[1]}` : ''
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
  if (['string', 'number'].indexOf(typeof number) == -1) {
    throw new TypeError('Argument number must be of type number or string')
  }

  let numberToFormat = number

  if (typeof number === 'string') {
    numberToFormat = parseToEnglishFloat(number)
  }

  const integer = Math.floor(numberToFormat).toString()
  const decimal = getPaddedDecimal(numberToFormat, numDecimals)

  const output = `${addSeparators(integer)}${decimal}`
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

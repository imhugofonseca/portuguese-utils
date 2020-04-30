import 'core-js/modules/es7.string.pad-end'

/**
 * Formats decimal numbers to semicolon format, portugal's standard
 * @param {string|number} number
 * @param {Object} options
 * @param {boolean} options.showLeadingZeros - Show leading zeros at the end?
 * @param {number} options.decimals - Number of decimals to show
 */
export default function formatDecimalNumber(
  number,
  options = { showLeadingZeros: false, decimals: 2 }
) {
  if (['string', 'number'].indexOf(typeof number) === -1) {
    throw new TypeError('Argument number must of type Number or String')
  }

  if (!options || typeof options !== 'object') {
    throw new TypeError('Argument options must of type Object')
  }

  let minSize = 3
  // because it may be zero, and that will evaluate false
  if (options.decimals === undefined || options.decimals === null) {
    // set defaults as 2
    options.decimals = 2
  }
  // let decimalsSize = options.decimals || 2
  let decimalsSize = options.decimals
  let padSize = minSize + decimalsSize
  let formatedNumber = number

  // set the decimal cases
  formatedNumber = Number(formatedNumber).toFixed(decimalsSize)

  if (options.showLeadingZeros) {
    formatedNumber = String(formatedNumber).padEnd(padSize, '0')
  }

  return String(formatedNumber).replace('.', ',')
}

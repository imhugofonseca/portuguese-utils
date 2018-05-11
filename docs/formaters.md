# Formaters

## formatDecimalNumber(number: string|number, options: Object)

Formats decimal numbers to semicolon format, portugal's standard

#### Arguments

**number (string|number)**: The number to be formated as string or number

**options (Object)**: The options object

> **options.showLeadingZeros (boolean)**: Toggles leading zeros

> _default: false_

> **options.decimals (number)**: Number of decimals to show if showLeadingZeros is true

> _default: 2_

#### Returns

**_(string)_**: The formated number

#### Example

```js
import formatDecimalNumber from 'portuguese-utils/formaters/formatDecimalNumber'

// Default options
let formatedNumber = formatDecimalNumber('300.134')

console.log(formatedNumber)
// => '300,134'

formatedNumber = formatDecimalNumber(300)

console.log(formatedNumber)
// => '300'

formatedNumber = formatDecimalNumber(300.5)

console.log(formatedNumber)
// => '300,5'

// Show leading zeros
formatedNumber = formatDecimalNumber(300.5, {
  showLeadingZeros: true,
  decimals: 2
})

console.log(formatedNumber)
// => '300,50'

// More decimals
formatedNumber = formatDecimalNumber(300.128, {
  showLeadingZeros: true,
  decimals: 3
})

console.log(formatedNumber)
// => '300,128'
```

## formatToCurrency(number: number, numDecimals: number, ISO: boolan)

Formats numbers (integer or floating) portugal's currency

#### Arguments

**number (number)**: The number to be formated

**numDecimals (number|string)**: Option for number of decimals

> _default: 0_

**ISO (boolean)**: Option to show ISO version of the symbol (EUR). False will print '€', true will print 'EUR'

> _default: false_

#### Returns

**_(string)_**: The formated number

#### Example

```js
import formatToCurrency from 'portuguese-utils/formaters/formatToCurrency'

// Default options
let formatedNumber = formatToCurrency('3000.134')

console.log(formatedNumber)
// => '3.00 €'

formatedNumber = formatToCurrency(300.5, 2)

console.log(formatedNumber)
// => '300.50 €'

formatedNumber = formatToCurrency(1234567.9, 2)

console.log(formatedNumber)
// => '1.234.567,90 €'

formatedNumber = formatToCurrency(500.5, 2, true)

console.log(formatedNumber)
// => '500,50 EUR'
```

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

# Formaters

A list of formaters to help you format content in your portuguese application

## formatDecimalNumber

Formats decimal numbers to semicolon format, portugal's standard

#### Arguments

* **_number (string|number)_**: The number to be formated as string or number

* **_options (Object)_**: The options object

  * **_options.showLeadingZeros (boolean)_**: Toggles leading zeros `default: false`

  * **_options.decimals (number)_**: Number of decimals to show if showLeadingZeros is true `default: 2`

#### Returns

* **_(string)_**: The formated number

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

#### Playground

```runkit
> id:
formatDecimalNumber

> preamble:
var formatDecimalNumber = require('portuguese-utils/formaters/formatDecimalNumber').default

> kit:
formatDecimalNumber(300.44, {
  showLeadingZeros: true,
  decimals: 2
})
```

---

## formatToCurrency

Formats numbers (integer or floating) portugal's currency

#### Arguments

* **_number (number)_**: The number to be formated

* **_numDecimals (number|string)_**: Option for number of decimals `default: 0`

* **_ISO (boolean)_**: Option to show ISO version of the symbol (EUR). False will print '€', true will print 'EUR' `default: false`

#### Returns

* **_(string)_**: The formated number

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

#### Playground

```runkit
> id:
formatToCurrency

> preamble:
var formatToCurrency = require('portuguese-utils/formaters/formatToCurrency').default

> kit:
formatToCurrency('3000.134')
```

---

## formatDate

Formats a date to portuguese format

### Arguments

* **_date (string|date)_**: The date to be formated

* **_delimiter (string)_**: Delimiter to be used `default: -`

### Returns

* **_(string)_**: The formated date

### Example

```js
import formatDate from 'portuguese-utils/formaters/formatDate'

let apiDate = '2018-05-18T10:57:22.785182+00:00'

// Default
let formatedDate = formatDate(apiDate)
console.log(formatedDate)
// => 18-05-2018

// Custom delimiter
formatedDate = formatDate(apiDate, '/')
console.log(formatedDate)
// => 18/05/2018
```

#### Playground

```runkit
> id:
formatDate

> preamble:
var formatDate = require('portuguese-utils/formaters/formatDate').default

> kit:
formatDate('2018-05-18T10:57:22.785182+00:00')
```

---

## formatDateTime

Formats a date time to portuguese format

### Arguments

* **_date (string|date)_**: The date to be formated

* **_delimiter (string)_**: Delimiter to be used `default: -`

### Returns

* **_(string)_**: The formated date

### Example

```js
import formatDateTime from 'portuguese-utils/formaters/formatDateTime'

let apiDate = '2018-05-18T10:57:22.785182+00:00'

// Default
let formatedDate = formatDateTime(apiDate)
console.log(formatedDate)
// => 18-05-2018 10:57:22

// Custom delimiter
formatedDate = formatDateTime(apiDate, '/')
console.log(formatedDate)
// => 18/05/2018 10:57:22
```

#### Playground

```runkit
> id:
formatDateTime

> preamble:
var formatDateTime = require('portuguese-utils/formaters/formatDateTime').default

> kit:
formatDateTime('2018-05-18T10:57:22.785182+00:00')
```

---

## formatDateExtended

Formats a date to portuguese extended format

### Arguments

* **_date (string|date)_**: The date to be formated
* **_includeWeekDay (boolean)_**: Include week day in the extended formated

### Returns

* **_(string)_**: The formated date

### Example

```js
import formatDateExtended from 'portuguese-utils/formaters/formatDateExtended'

let date = '2016-10-12'

// Default
let formatedDate = formatDateExtended(date)
console.log(formatedDate)
// => 12 de Outubro de 2016

// With week day
formatedDate = formatDateExtended(date, true)
console.log(formatedDate)
// => Quarta-Feira, 12 de Outubro de 2016
```

### Playground

```runkit
> id:
formatDateExtended

> preamble:
var formatDateExtended = require('portuguese-utils/formaters/formatDateExtended').default

> kit:
formatDateExtended('2018-05-18T10:57:22.785182+00:00')
```

---

# Portuguese Javascript Utils
[![Maintainability](https://api.codeclimate.com/v1/badges/a1670c105d39da659957/maintainability)](https://codeclimate.com/github/hugo-fonseca/portuguese-utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a1670c105d39da659957/test_coverage)](https://codeclimate.com/github/hugo-fonseca/portuguese-utils/test_coverage)
![npm](https://img.shields.io/npm/v/portuguese-utils?color=rgb%2869%2C%20210%2C%20152%29)
[![Donate with Bitcoin](https://en.cryptobadges.io/badge/micro/1Q52VzcG3848UiWmK81bxqqpQqKehBiQYF)](https://en.cryptobadges.io/donate/1Q52VzcG3848UiWmK81bxqqpQqKehBiQYF)

A set of useful utils for developing Portuguese Web Applications.

## How to install

### Using CDN

You can use this lib in the browser using the minified bundle via CDN.

```html
<script src="https://cdn.jsdelivr.net/npm/portuguese-utils@latest/portuguese-utils.min.js" />
<script>
    portugueseUtils.isValidPostalCode('3863-122')
</script>
```

### Using NPM

`npm install --save portuguese-utils`

#### Import the needed function

From the validators module

```js
import { isValidPostalCode } from 'portuguese-utils/validators'
```

From the single exported function

```js
import isValidPostalCode from 'portuguese-utils/validators/isValidPostalCode'
```

From the full package

```js
import { isValidPostalCode } from 'portuguese-utils'
```

An the use the function as shown bellow

```js
const postalCode = '3863-122'
const isMyPostalCodeValid = isValidPostalCode(postalCode)
console.log(isMyPostalCodeValid) // true
```

## Available Utils

### Formaters

As the name says these utils allow to format input data

* `formatDate`
* `formatDateExtended`
* `formatDateTime`
* `formatDecimalNumber`
* `formatToCurrency`

### Validators

These utils allows you to validate input data

* `isValidCCNumber`
* `isValidCPECUI`
* `isValidCurrency`
* `isValidHoliday`
* `isValidLicensePlate`
* `isValidMobileNumber`
* `isValidNIF`
* `isValidNISS`
* `isValidNNU`
* `isValidPostalCode`

### Helpers

These utils offer other helpers useful in portuguese apps

* `holidays`
* `monthsExtended`
* `monthsSlug`
* `weekDays`
* `weekDaysSlug`

## Documentation

Documentation of all utils is available at:
https://portuguese-utils.netlify.com/

## License

MIT

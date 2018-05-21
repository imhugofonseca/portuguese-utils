# 🇵🇹 Portuguese Utils

[![Build Status](https://travis-ci.org/hugo-fonseca/portuguese-utils.svg?branch=master)](https://travis-ci.org/hugo-fonseca/portuguese-utils)
[![Maintainability](https://api.codeclimate.com/v1/badges/a1670c105d39da659957/maintainability)](https://codeclimate.com/github/hugo-fonseca/portuguese-utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a1670c105d39da659957/test_coverage)](https://codeclimate.com/github/hugo-fonseca/portuguese-utils/test_coverage)

A set of usefull utils for developing Portuguese Web Applications.

## How to install

Using NPM:

`npm install --save portuguese-utils`

Using Yarn:

`yarn add portuguese-utils`

## How to use

### CDN

You can use this lib in the browser using the minified bundle via CDN.

```html
<script src="https://cdn.jsdelivr.net/npm/portuguese-utils/portuguese-utils.min.js" />
<script>
    portugueseUtils.isValidPostalCode('3863-122')
</script>
```

### Module

You can also use this package as a module following the instructions bellow

#### Import the needed function

* From the validators module

```js
import { isValidPostalCode } from 'portuguese-utils/validators'
```

* From the single exported function

```js
import isValidPostalCode from 'portuguese-utils/validators/isValidPostalCode'
```

* From the full package

```js
import { isValidPostalCode } from 'portuguese-utils'
```

#### Using

```js
const postalCode = '3863-122'
const isMyPostalCodeValid = isValidPostalCode(postalCode)
console.log(isMyPostalCodeValid) // true
```

## License

MIT

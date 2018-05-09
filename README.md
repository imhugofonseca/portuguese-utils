# 🇵🇹 Portuguese Utils 
[![Build Status](https://travis-ci.org/hugo-fonseca/portuguese-utils.svg?branch=master)](https://travis-ci.org/hugo-fonseca/portuguese-utils)
[![Maintainability](https://api.codeclimate.com/v1/badges/a1670c105d39da659957/maintainability)](https://codeclimate.com/github/hugo-fonseca/portuguese-utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a1670c105d39da659957/test_coverage)](https://codeclimate.com/github/hugo-fonseca/portuguese-utils/test_coverage)

A set of usefull utils for developing Portuguese Web Applications.


## 🔰 How to install

Using NPM:

`npm install --save portuguese-utils` 

Using Yarn:

`yarn add -D portuguese-utils`


## 🚀 How to use

1. Import the needed function

- From the validators module
```js
import { isValidPostalCode } from 'portuguese-utils/validators'
```

- From the single function
```js
import isValidPostalCode from 'portuguese-utils/validators/isValidPostalCode'
```

- From the full lib
```js
import { isValidPostalCode } from 'portuguese-utils'
```


2. Use the function
```js
const postalCode = '3863-122'
const isMyPostalCodeValid =  isValidPostalCode(postalCode)
console.log(isMyPostalCodeValid) // true
```

## 📎Documentation
Available at:
https://portuguese-utils.netlify.com/#/

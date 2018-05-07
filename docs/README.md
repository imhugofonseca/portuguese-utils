# 🇵🇹 Portuguese Utils
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


## Documentation
*Todo*

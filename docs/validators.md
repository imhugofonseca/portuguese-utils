# Validators

## isValidNIF(nif: string)
Validates a portuguese fiscal number


#### Arguments
***nif (string)*** : The fiscal number to be checked as string.


#### Returns
***(boolean)***: True if valid and False if invalid.


#### Example

```js
import isValidNIF from 'portuguese-utils/validators/isValidNIF'
const isNIFValid = isValidNIF('227866410')

console.log(isNIFValid)
// => true
```

## isValidPostalCode(postalCode: string)
Validates a portuguese postal-code


#### Arguments
***postalCode (string)*** : The postal code to be checked as string.


#### Returns
***(boolean)***: True if valid and False if invalid.


#### Example

```js
import isValidPostalCode from 'portuguese-utils/validators/isValidPostalCode'
const isCodeValid = isValidPostalCode('3865-134')

console.log(isCodeValid)
// => true
```
## isValidMobileNumber(mobileNumber: string)
Validates a portuguese mobile number


#### Arguments
***mobileNumber (string)*** : The mobile number to be checked as string.


#### Returns
***(boolean)***: True if valid and False if invalid.


#### Example

```js
import isValidMobileNumber from 'portuguese-utils/validators/isValidMobileNumber'
const isNumberValid = isValidMobileNumber('917344888')

console.log(isNumberValid)
// => true
```
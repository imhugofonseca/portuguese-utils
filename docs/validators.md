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

## isValidCCNumber(citizenCardNumber: string)
Validates a portuguese citizen card number


#### Arguments
***citizenCardNumber (string)*** : The citizen card number to be checked as string.


#### Returns
***(boolean)***: True if valid and False if invalid.


#### Example

```js
import isValidCCNumber from 'portuguese-utils/validators/isValidCCNumber'
const isCCValid = isValidCCNumber('00000000 0 ZZ4')

console.log(isCCValid)
// => true
```

## isValidLicensePlate(plateNumber: string)
Validates a portuguese license plate number


#### Arguments
***plateNumber (string)*** : The license plate number checked as string.


#### Returns
***(boolean)***: True if valid and False if invalid.


#### Example

```js
import isValidLicensePlate from 'portuguese-utils/validators/isValidLicensePlate'
const isCCValid = isValidCCNumber('00-AA-00')

console.log(isValidLicensePlate)
// => true
```
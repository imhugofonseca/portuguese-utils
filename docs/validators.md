# Validators

## isValidNIF

Validates a portuguese fiscal number

#### Arguments

* **_nif (string)_** : The fiscal number to be checked as string.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidNIF from 'portuguese-utils/validators/isValidNIF'

let isNIFValid = isValidNIF('227866410')
console.log(isNIFValid)
// => true
```

### Playground

```runkit
> id:
isValidNIF

> preamble:
var isValidNIF = require('portuguese-utils/validators/isValidNIF').default

> kit:
isValidNIF('227466756')
```

---

## isValidNISS

Validates a portuguese Social Security Identifier Number (NISS)

#### Arguments

* **_niss (string)_** : The Social Security Identifier Number to be checked as string.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidNISS from 'portuguese-utils/validators/isValidNISS'

let isNISSValid = isValidNISS('11115611236')
console.log(isNISSValid)
// => true
```

### Playground

```runkit
> id:
isValidNISS

> preamble:
var isValidNISS = require('portuguese-utils/validators/isValidNISS').default

> kit:
isValidNISS('11115611236')
```

---

## isValidNNU

Validates a portuguese Heath System, Nacional Patient Number (NNU)

#### Arguments

* **_nnu (string)_** : The national patient number to be checked as string.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidNNU from 'portuguese-utils/validators/isValidNNU'

let isNNUValid = isValidNNU('234567232')
console.log(isNNUValid)
// => true
```

### Playground

```runkit
> id:
isValidNNU

> preamble:
var isValidNNU = require('portuguese-utils/validators/isValidNNU').default

> kit:
isValidNNU('234567232')
```

---

## isValidPostalCode

Validates a portuguese postal-code

#### Arguments

* **_postalCode (string)_** : The postal code to be checked as string.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidPostalCode from 'portuguese-utils/validators/isValidPostalCode'

let isCodeValid = isValidPostalCode('3865-134')
console.log(isCodeValid)
// => true
```

### Playground

```runkit
> id:
isValidPostalCode

> preamble:
var isValidPostalCode = require('portuguese-utils/validators/isValidPostalCode').default

> kit:
isValidPostalCode('1660-112')
```

---

## isValidMobileNumber

Validates a portuguese mobile number

#### Arguments

* **_mobileNumber (string)_** : The mobile number to be checked as string.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidMobileNumber from 'portuguese-utils/validators/isValidMobileNumber'

let isNumberValid = isValidMobileNumber('917344888')
console.log(isNumberValid)
// => true
```

### Playground

```runkit
> id:
isValidMobileNumber

> preamble:
var isValidMobileNumber = require('portuguese-utils/validators/isValidMobileNumber').default

> kit:
isValidMobileNumber('964342343')
```

---

## isValidCCNumber

Validates a portuguese citizen card number

#### Arguments

* **_citizenCardNumber (string)_** : The citizen card number to be checked as string.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidCCNumber from 'portuguese-utils/validators/isValidCCNumber'

let isCCValid = isValidCCNumber('00000000 0 ZZ4')
console.log(isCCValid)
// => true
```

### Playground

```runkit
> id:
isValidCCNumber

> preamble:
var isValidCCNumber = require('portuguese-utils/validators/isValidCCNumber').default

> kit:
isValidCCNumber('00000000 0 ZZ4')
```

---

## isValidLicensePlate

Validates a portuguese license plate number

#### Arguments

* **_plateNumber (string)_** : The license plate number checked as string.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidLicensePlate from 'portuguese-utils/validators/isValidLicensePlate'

let isLicensePlateValid = isValidLicensePlate('00-AA-00')
console.log(isLicensePlateValid)
// => true
```

### Playground

```runkit
> id:
isValidLicensePlate

> preamble:
var isValidLicensePlate = require('portuguese-utils/validators/isValidLicensePlate').default

> kit:
isValidLicensePlate('00-AA-00')
```

---

## isValidCPECUI

Validates CPE and CUI

* CPE - Código de ponto de entrega
* CUI - Código universal da instalação

#### Arguments

* **_cpe (string)_** : the CPE or CUI.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidCPECUI from 'portuguese-utils/validators/isValidCPECUI'

let isValid = isValidCPECUI('PT 0014 483920194837 DW')
console.log(isValid)
// => true
```

### Playground

```runkit
> id:
isValidCPECUI

> preamble:
var isValidCPECUI = require('portuguese-utils/validators/isValidCPECUI').default

> kit:
isValidCPECUI('PT 0014 483920194837 DW')
```

---

## isValidCurrency

Validates Currency

#### Arguments

* **_currency (string)_** : The currency string to be validated

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidCurrency from 'portuguese-utils/validators/isValidCurrency'

let isValid = isValidCurrency('1.000,20 €')
console.log(isValid)
// => true
```

### Playground

```runkit
> id:
isValidCurrency

> preamble:
var isValidCurrency = require('portuguese-utils/validators/isValidCurrency').default

> kit:
isValidCurrency('1.000,20 €')
```

---

## isValidHoliday

Validates a portuguese holiday

#### Arguments

* **_date (date)_** : The date to be checked.

#### Returns

* **_(boolean)_**: `true` if valid `false` if invalid.

#### Example

```js
import isValidHoliday from 'portuguese-utils/validators/isValidHoliday'

let date = new Date('2018-04-25')
let isValidHoliday = isValidHoliday(date)
console.log(isValidHoliday)
// => true
```

### Playground

```runkit
> id:
isValidHoliday

> preamble:
var isValidHoliday = require('portuguese-utils/validators/isValidHoliday').default

> kit:
isValidHoliday(new Date('2018-04-25'))
```

---

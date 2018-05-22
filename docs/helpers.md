# Helpers

A combination of useful constants to use in portuguese applications.

## monthsExtended

Returns the list of months in portuguese

#### Returns

* **_(array)_**: Array of month labels

#### Example

```js
import monthsExtended from 'portuguese-utils/helpers/monthsExtended'

console.log(monthsExtended)
// => ['Janeiro', 'Fevereiro', ...]
```

##### Playground

```runkit
> id:
monthsExtended

> preamble:
var monthsExtended = require('portuguese-utils/helpers/monthsExtended').default

> kit:
console.log(monthsExtended)
```

---

## monthsSlug

Returns the list of months slugs in portuguese

#### Returns

* **_(array)_**: Array of month labels

#### Example

```js
import monthsSlug from 'portuguese-utils/helpers/monthsSlug'

console.log(monthsSlug)
// => ['Jan', 'Fev', ...]
```

##### Playground

```runkit
> id:
monthsSlug

> preamble:
var monthsSlug = require('portuguese-utils/helpers/monthsSlug').default

> kit:
console.log(monthsSlug)
```

---

## weekDays

Returns the list of weekdays in portuguese

#### Returns

* **_(array)_**: Array of month labels

#### Example

```js
import weekDays from 'portuguese-utils/helpers/weekDays'

console.log(weekDays)
// => ['Segunda-Feira', 'Terça-Feira', ...]
```

##### Playground

```runkit
> id:
weekDays

> preamble:
var weekDays = require('portuguese-utils/helpers/weekDays').default

> kit:
console.log(weekDays)
```

---

## weekDaysSlug

Returns the list of weekdays slugs in portuguese

#### Returns

* **_(array)_**: Array of month labels

#### Example

```js
import weekDaysSlug from 'portuguese-utils/helpers/weekDaysSlug'

console.log(weekDaysSlug)
// => ['Seg', 'Ter', ...]
```

##### Playground

```runkit
> id:
weekDaysSlug

> preamble:
var weekDaysSlug = require('portuguese-utils/helpers/weekDaysSlug').default

> kit:
console.log(weekDaysSlug)
```

---

## holidays

Returns the list of portuguese holidays

#### Returns

* **_(array)_**: Array of holidays

#### Example

```js
import holidays from 'portuguese-utils/helpers/holidays'

console.log(holidays)
// => [
//      { day: 1, month: 0, holiday: 'Dia de Ano Novo' },
//      { day: 25, month: 3, holiday: 'Dia da Liberdade' },
//      ...
//    ]
```

##### Playground

```runkit
> id:
holidays

> preamble:
var holidays = require('portuguese-utils/helpers/holidays').default

> kit:
console.log(holidays)
```

---

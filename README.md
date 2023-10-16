# Toolbox

Some useful functions and types.

## Motivation

Set of functions and types used across the different projects of Productive Codebases.

## Prerequisites

Typescript is not mandatory but highly recommended.

## Installation

```bash
npm install @productive-codebases/toolbox
```

## Exposed tooling

### Conditions

#### `assertUnreachableCase`

Ensures that all cases of a `switch` are implemented by returning a `never` type in the default case.

Usage:

```ts
switch (unionOfValues) {
  case 'value1': {
    // ...
  }

  case 'value2': {
    // ...
  }

  default: {
    assertUnreachableCase(unionOfValues)
  }
}
```

### Entities

#### `createEntity` and `createEntities`

Instanciate entities from a litteral objects.

Usage:

```ts
const user = createEntity(EntityUser, {
  id: '1',
  username: 'John'
})

const users = createEntities(EntityUser, [
  {
    id: '1',
    username: 'John'
  },
  {
    id: '2',
    username: 'T1000'
  }
])
```

#### `StrictObject`

Typed listing of keys, values and entries from an object.

Usage:

```ts
const user = {
  id: '1',
  username: 'John'
}

StrictObject.keys(user)     // ['id', 'username']
StrictObject.values(user)   // ['1', 'John']
StrictObject.entries(user)  // [['id', '1'], ['username', 'John']]
```

### Objects

#### `deepMerge`

Deeply merges multiple objects.

Usage:

```ts
const mergedObjects = deepMerge([object1, object2], optionalOptions)
```

### Arrays

#### `ensureArray`

Ensures that a value is an array.

Usage:

```ts
ensureArray(x).map(...)
```

### Sets

#### `ensureSet`

Ensures that a value is a set.

Usage:

```ts
ensureSet(x).forEach(...)
```

### Maps

#### `addSetValueToMap`, `removeSetValueToMap`

Add or remove a `Set` value to a map.

Usage:

```ts
const map = new Map<string, Set<number>>()

addSetValueToMap(map, 'scores', 42)
addSetValueToMap(map, 'scores', 92)

const numbers = map.get('scores')

numbers.size // 2
```

#### `indexEntitiesToMap`, `appendEntitiesToMap`

Index / Append entities (objects) to a map.

Usage:

```ts
const users = [
  {
    id: 1,
    name: 'Bob'
  },
  {
    id: 2,
    name: 'Alice'
  },
  {
    id: 3,
    name: 'John'
  }
]

const usersMap = indexEntitiesToMap(users, 'id')
const bobUser = usersMap.get(1)
```

```ts
const users = [
  {
    id: 1,
    name: 'Bob',
    lastName: 'Foo'
  },
  {
    id: 2,
    name: 'Alice',
    lastName: 'Foo'
  },
  {
    id: 3,
    name: 'John',
    lastName: 'Bar'
  }
]

const usersMap = appendEntitiesToMap(users, 'lastName')
const usersHavingFoo = usersMap.get('Foo')

usersHavingFoo.size // 2
```

### Assertions

#### `isDefined`

Returns a type predicate to remove undefined or nullable values of an array.

Usage:

```ts
if (isDefined(x)) {
  //...
}
```

```ts
const values = [null, undefined, '', 'value', 0].filter(isDefined)

values.length // 3
```


#### `isNotFalsy`, `isNotFalsy`

Returns a type predicate to filter falsy values of an array.

Usage:

```ts
if (isNotFalsy(x)) {
  //...
}
```

```ts
const values = [null, undefined, '', 'value', 0].filter(filterFalsies)

values.length // 1
```

#### `isTruthy`

Return true if the value is truthy.

Usage:

```ts
if (isTruthy(x)) {
  //...
}
```

### Tooling

#### `setupLogger`

Return a composite function allowing to log message from a defined logger mapping.

```ts
const loggerMapping = {
  server: {
    express: 'express',
    middleware: 'middleware'
  },
  client: {
    react: 'react',
    store: 'store'
  }
}

const { newLogger } = setupLogger(loggerMapping)
const logger = newLogger('server')('middleware')

logger('info')('Send request')
logger('error')('Error 500')
```

You can enable / disable logger messages by adding a `debug` property in local storage. Example:

```ts
// Will show only log messages for the server middleware:
localStorage.set('debug', 'server:middleware:*')
```

#### `MetaData`

Metadata-like data storage.

Usage:

```ts
interface IMetaData {
  data: string
}

const metadata = new MetaData<IMetaData>()
metadata.set({ data: 'foo' })
const value = metadata.get('data')
```

### Types

#### `Maybe`

Define a value that can be null.

Usage:

```ts
type Value = Maybe<string>
```

#### `MaybeUndef`

Define a value that can be undefined.

Usage:

```ts
type Value = MaybeUndef<string>
```

#### `Perhaps`

Define a value that can be null or undefined.

Usage:

```ts
type Value = Perhaps<string>
```

#### `PropertiesNullable`

Define an object with all properties as nullable values.

Usage:

```ts
interface IUser = {
  id: number
  name: string
}

const user: PropertiesNullable<IUser> = {
  id: null,
  name: null
}
```

#### `PropertiesNonNullable`

Define an object with all properties as non-nullable values.

Usage:

```ts
interface INullableUser = {
  id: Maybe<number>
  name: Maybe<string>
}

const user: PropertiesNonNullable<INullableUser> = {
  id: 1,
  name: null  // Error
}
```

#### `PartialDeep`

Partial applyed deeply.

Usage:

```ts
interface IUser = {
  id: number
  name: string
  address: {
    city: string
    country: string
  }
}

const user: PartialDeep<IUser> = {
  id: 1,
  address: {
    country: 'France'
  }
}
```

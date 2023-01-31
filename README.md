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

### Functions

#### `isDefined`

Return true if the value is neither null nor undefined.

Usage:

```ts
if (isDefined(x)) {
  //...
}
```

#### isTruthy

Return true if the value is truthy.

Usage:

```ts
if (isTruthy(x)) {
  //...
}
```

#### ensureArray

Ensure that a value is an array.

Usage:

```ts
ensureArray(x).map(...)
```

#### ensureSet

Ensure that a value is a set.

Usage:

```ts
ensureSet(x).forEach(...)
```

#### deepMerge

Merge deeply multiple objects.

Usage:

```ts
const mergedObjects = deepMerge([object1, object2], optionalOptions)
```

#### indexEntitiesToMap, appendEntitiesToMap

Index / Append entities (objects) to a map.

Usage:

```ts
const entities = indexEntitiesToMap(entitiesAsArray, 'id')
const entityId1 = entities.get('1')
```

#### addSetValueToMap, removeSetValueToMap

Add or remove a value to a set, indexed by a key.

Usage:

```ts
const map = new Map()
addSetValueToMap(map, '1', 'value')
const set = map.get('1')
```

#### assertUnreachableCase

Allow to ensure that all cases of a `switch` are implemented by returning a `never` type in the default case.

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

#### MetaData

Container allowing to store typed metadata.

Usage:

```ts
interface IMetaData {
  data: string
}

const metadata = new MetaData<IMetaData>()
metadata.set({ data: 'foo' })
const value = metadata.get('data')
```

#### setupLogger

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

### Types

#### Maybe

Define a value that can be null.

Usage:

```ts
type Value = Maybe<string>
```

#### MaybeUndef

Define a value that can be undefined.

Usage:

```ts
type Value = MaybeUndef<string>
```

#### Perhaps

Define a value that can be null or undefined.

Usage:

```ts
type Value = Perhaps<string>
```

#### PropertiesNullable

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

#### PropertiesNonNullable

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

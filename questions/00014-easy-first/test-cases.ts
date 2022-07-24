import type { Equal, Expect } from '@type-challenges/utils'

type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// alternatively:
// type First<T extends any[]> = T extends [infer first, ...any[]] ? first : never

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

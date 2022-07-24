import type { Equal, Expect } from '@type-challenges/utils'

/**
 * Can't do [P in K]: T[K]
 * Because then we the return type for every prop would be string | boolean
 * since we're saying T[K] could be any of the union in K, we need to narrow it to P, which is an
 * individual property
 * as opposed to either string or boolean depending on the key
 */
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

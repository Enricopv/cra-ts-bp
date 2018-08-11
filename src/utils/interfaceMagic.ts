

type Diff<T extends string | number | symbol, U extends string | number | symbol> =
  ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];

// Merge interfaces
export type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U;
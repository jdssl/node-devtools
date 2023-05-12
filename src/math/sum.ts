export const sum = (...args: number[]): number => {
  return args.reduce((accumulator, currentValue) => accumulator + currentValue,
    0)
}

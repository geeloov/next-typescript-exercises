export function fibonacci(n: number): number[] {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Parameter n must be a non-negative integer.')
  }

  const sequence: number[] = []

  if (n >= 1) {
    sequence.push(0)
  }
  if (n >= 2) {
    sequence.push(1)
  }

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2])
  }

  return sequence
}

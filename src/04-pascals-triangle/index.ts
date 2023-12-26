function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex < 0) {
    throw new Error('Row index must be non-negative.')
  }

  const row: number[] = []

  for (let i = 0; i <= rowIndex; i++) {
    row.push(getCoefficient(rowIndex, i))
  }

  return row
}

function getCoefficient(n: number, k: number): number {
  return factorial(n) / (factorial(k) * factorial(n - k))
}

function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1
  }

  return n * factorial(n - 1)
}

export { getPascalsTriangleRow }

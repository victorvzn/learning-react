export function flattenObject (data1) {
  const result = []
  function getFlattenObject (data2) {
    for (const value of Object.values(data2)) {
      if (value === null) continue
      if (typeof value === 'object') {
        getFlattenObject(value)
      } else {
        result.push(value)
      }
    }
  }
  getFlattenObject(data1)
  return result
}

export function randomInRange (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

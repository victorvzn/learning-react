import { describe, expect, it } from 'vitest'

// import { canReconfigure } from './canReconfigure'

const canReconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('from is not a string')

  const isSameLength = from.length === to.length

  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size

  if (!hasSameUniqueLetters) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]

    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}

describe('canReconfigure', () => {
  // it('should be a function', () => {
  //   expect(canReconfigure).toBeTypeOf('function')
  // })

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if strings provided have different length even with same unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})

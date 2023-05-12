import { sum } from '@/math/sum'

describe('Sum', () => {
  it('should return a correct sum value', () => {
    expect(sum(1, 1, 2, 5, 1)).toEqual(10)
  })
})

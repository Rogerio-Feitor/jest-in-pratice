import { expect } from 'chai';
import map from './map';

it('map should be a function', () => {
  expect(map).to.a('function')
})

it('map([1, 2], (item) => item) should return [1, 2]', () => {
  expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([3, 4], (item) => item) should return [3, 4]', () => {
  expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('map([1, 2], (item) => item + 1) should return [2, 3]', () => {
  expect(map([1, 2], (item) => item +1 )).to.be.deep.equal([2, 3])
})

it('map([2, 3], (item) => item * 2) should return [4, 6]', () => {
  expect(map([2, 3], (item) => item * 2)).to.be.deep.equal([4, 6])
})
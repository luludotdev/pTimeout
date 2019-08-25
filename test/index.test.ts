import test from 'ava'
import pTimeout from '../src'

test('is a function', t => {
  t.is(typeof pTimeout, 'function')
})

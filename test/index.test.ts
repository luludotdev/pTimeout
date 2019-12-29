import test from 'ava'
import pTimeout, { TimeoutError } from '../src'

test('exports a function', t => {
  t.is(typeof pTimeout, 'function')
})

test('TimeoutError is an error', t => {
  t.is(TimeoutError.prototype instanceof Error, true)

  const x = new TimeoutError('')
  t.is(x instanceof TimeoutError, true)
  t.is(x instanceof Error, true)
})

test('throws when `milliseconds` is not a number', async t => {
  await t.throwsAsync(async () => {
    // @ts-ignore
    await pTimeout(() => Promise.resolve(), 'hello')
  })
})

test('throws when `milliseconds` is negative', async t => {
  await t.throwsAsync(async () => {
    await pTimeout(() => Promise.resolve(), -1)
  })
})

test('does not throw when `milliseconds` is 0', async t => {
  await t.notThrowsAsync(async () => {
    await pTimeout(() => Promise.resolve(), 0)
  })
})

test('does not throw when `milliseconds` is positive', async t => {
  await t.notThrowsAsync(async () => {
    await pTimeout(() => Promise.resolve(), 1)
  })
})

test('throws when `promise` is not a function', async t => {
  await t.throwsAsync(async () => {
    // @ts-ignore
    await pTimeout('hello')
  })

  await t.throwsAsync(async () => {
    // @ts-ignore
    await pTimeout(12)
  })
})

test('does not throw when `promise` is a function', async t => {
  await t.notThrowsAsync(async () => {
    await pTimeout(() => Promise.resolve())
  })
})

test('throws when timeout is exceeded', async t => {
  await t.throwsAsync(async () => {
    const never = new Promise(() => {
      // never resolves
    })

    await pTimeout(() => never, 100)
  })
})

test('throws passed error when timeout is exceeded', async t => {
  const error = new Error('test error')

  try {
    const never = new Promise(() => {
      // never resolves
    })

    await pTimeout(() => never, 100, error)
  } catch (err) {
    t.is(err, error)
  }
})

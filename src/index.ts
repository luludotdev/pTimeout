import { TimeoutError } from './error'

const timeoutFn: (millis: number, error?: Error) => Promise<never> = (
  millis,
  error
) =>
  new Promise((_, reject) =>
    setTimeout(
      () =>
        reject(
          error ||
            new TimeoutError(`Promise timed out after ${millis} milliseconds`)
        ),
      millis
    )
  )

const pTimeout: <T>(
  promise: () => Promise<T>,
  milliseconds?: number,
  error?: Error
) => Promise<T> = (promise, milliseconds = 1000 * 10, error) => {
  if (typeof milliseconds !== 'number' || milliseconds < 0) {
    throw new TypeError('Expected `milliseconds` to be a positive number')
  }

  return Promise.race([timeoutFn(milliseconds, error), promise()])
}

export default pTimeout

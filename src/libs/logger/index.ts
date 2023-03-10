import debug from 'debug'
import { LoggerLevel } from './types'

export type Logger = (loggerLevel: LoggerLevel) => debug.Debugger

/**
 * Return a composite function allowing to log message from a defined logger mapping.
 *
 * Example:
 *
 * const loggerMapping = {
 *   server: {
 *     express: 'express',
 *     middleware: 'middleware'
 *   },
 *   client: {
 *     react: 'react',
 *     store: 'store'
 *   }
 * }
 *
 * const { newLogger } = setupLogger(loggerMapping)
 *
 * const logger = newLogger('server')('middleware')
 *
 * logger('info')('Send request')
 * logger('error')('Error 500')
 */
export function setupLogger<TLoggerMapping extends object>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: TLoggerMapping
) {
  const newLogger = function newLogger<
    TLoggerName extends keyof TLoggerMapping
  >(name: TLoggerName) {
    return function logger<
      TLoggerNamespace extends keyof TLoggerMapping[TLoggerName]
    >(namespace: TLoggerNamespace) {
      const log: Logger = loggerLevel => {
        const finalNamespace = [name, namespace, loggerLevel].join(':')
        return debug(finalNamespace)
      }
      return log
    }
  }

  return {
    newLogger,
    debug
  }
}

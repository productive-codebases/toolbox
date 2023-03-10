import { setupLogger } from '.'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Logger', () => {
  const loggerMapping = {
    serverTest: {
      express: 'express',
      middleware: 'middleware'
    },
    clientTest: {
      react: 'react',
      store: 'store'
    }
  }

  const { newLogger, debug } = setupLogger(loggerMapping)

  // Mock the log function
  let logs: any[] = []

  debug.log = (...args: any[]) => {
    logs.push(args)
  }

  beforeEach(() => {
    // reset logs for each test
    logs = []
  })

  it('should log messages if the debug is enabled', () => {
    debug.enable('serverTest:*')

    const logger = newLogger('serverTest')('middleware')

    logger('debug')('A debug message')
    logger('info')('A info message')
    logger('warn')('A warn message')
    logger('error')('An error message')

    expect(logs).toEqual([
      ['serverTest:middleware:debug A debug message'],
      ['serverTest:middleware:info A info message'],
      ['serverTest:middleware:warn A warn message'],
      ['serverTest:middleware:error An error message']
    ])
  })

  it('should not log messages if the debug is disabled', () => {
    debug.disable()

    const logger = newLogger('clientTest')('store')

    logger('debug')('A debug message')
    logger('info')('A info message')
    logger('warn')('A warn message')
    logger('error')('An error message')

    expect(logs).toEqual([])
  })

  it('should not log messages if the enabled namespace does not match the logger name', () => {
    debug.enable('serverTest:*')

    const logger = newLogger('clientTest')('store')

    logger('debug')('A debug message')
    logger('info')('A info message')
    logger('warn')('A warn message')
    logger('error')('An error message')

    expect(logs).toEqual([])
  })
})

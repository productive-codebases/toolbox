import { setupLogger } from '.'

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
      [
        '  \x1B[38;5;206;1mserverTest:middleware:debug \x1B[0mA debug message',
        '\x1B[38;5;206m+0ms\x1B[0m'
      ],
      [
        '  \x1B[38;5;197;1mserverTest:middleware:info \x1B[0mA info message',
        '\x1B[38;5;197m+0ms\x1B[0m'
      ],
      [
        '  \x1B[38;5;129;1mserverTest:middleware:warn \x1B[0mA warn message',
        '\x1B[38;5;129m+0ms\x1B[0m'
      ],
      [
        '  \x1B[38;5;79;1mserverTest:middleware:error \x1B[0mAn error message',
        '\x1B[38;5;79m+0ms\x1B[0m'
      ]
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

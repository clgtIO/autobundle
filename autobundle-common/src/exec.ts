import cp from 'child_process'

export function exec (command: string, options: any, timeout?: number) {
  let timerId: NodeJS.Timeout
  return new Promise((resolve, reject) => {
    const child = cp.exec(
      command,
      options,
      (error, stdout, stderr) => {
        if (error) {
          reject(stderr)
        } else {
          resolve(stdout)
        }

        if (timerId) {
          clearTimeout(timerId)
        }
      },
    )

    if (timeout) {
      timerId = setTimeout(() => {
        process.kill(child.pid!)
        reject(
          `Execution of ${command.substring(0, 40)}... cancelled as it exceeded a timeout of ${timeout} ms`,
        )
      }, timeout)
    }
  })
}

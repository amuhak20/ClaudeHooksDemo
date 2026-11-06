// Small scoped logger: prefixes every line with an ISO timestamp, level, and scope.
export type LogLevel = "debug" | "info" | "warn" | "error";

export interface Logger {
  debug(message: string, ...args: unknown[]): void;
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}

export function createLogger(scope: string): Logger {
  const write = (level: LogLevel, message: string, args: unknown[]): void => {
    const prefix = `${new Date().toISOString()} [${level.toUpperCase()}] [${scope}]`;
    const line = `${prefix} ${message}`;

    switch (level) {
      case "warn":
        console.warn(line, ...args);
        break;
      case "error":
        console.error(line, ...args);
        break;
      default:
        console.log(line, ...args);
    }
  };

  return {
    debug: (message, ...args) => write("debug", message, args),
    info: (message, ...args) => write("info", message, args),
    warn: (message, ...args) => write("warn", message, args),
    error: (message, ...args) => write("error", message, args),
  };
}

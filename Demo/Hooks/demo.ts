// Demo of a simple typed hook: createHook wraps a handler with start/complete/fail logging.
import { createLogger } from "./logger";

const logger = createLogger("demo");

type Hook<T> = (value: T) => void | Promise<void>;

export function createHook<T>(name: string, handler: Hook<T>): Hook<T> {
  return async (value) => {
    console.log(`[${name}] started`);

    try {
      await handler(value);
      console.log(`[${name}] completed`);
    } catch (error) {
      console.error(`[${name}] failed`, error);
      throw error;
    }
  };
}

export const demoHook = createHook<{ message: string }>(
  "demo",
  async ({ message }) => {
    console.log(`Hook received: ${message}`);
  },
);
console.log("demo.ts loaded");

// Example: await demoHook({ message: "Hello from the demo hook!" });

console.log("demo.ts loaded");logger.info("demo.ts finished loading");

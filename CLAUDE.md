# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

This is a small demo. The only source file is `Demo/Hooks/demo.ts`. The repo has a minimal `package.json` with no scripts and no dependencies. It has no tsconfig, lint config, test suite, README, or CI config, so there are no documented build, lint, or test commands. Don't assume a toolchain exists; check for one before running anything.

## Architecture

`Demo/Hooks/demo.ts` defines a minimal typed hook pattern:

- `Hook<T>` is a handler type: a function taking a value of type `T` and returning `void` or `Promise<void>`.
- `createHook<T>(name, handler)` wraps a handler in an async function that logs `[name] started`, awaits the handler, then logs `[name] completed`. On error it logs `[name] failed` and rethrows, so callers still see the failure.
- `demoHook` is an exported instance created with `createHook` for `{ message: string }`. It logs the received message.

The example call at the bottom of the file is commented out: `await demoHook({ message: "Hello from the demo hook!" })`.

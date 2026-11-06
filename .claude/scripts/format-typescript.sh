#!/usr/bin/env bash
# Format TypeScript files in this project with Prettier.
#
# Usage:
#   scripts/format-typescript.sh            # rewrite files in place
#   scripts/format-typescript.sh --check    # report unformatted files, exit non-zero if any

set -euo pipefail

cd "$(dirname "$0")/../.."

mode="--write"
if [[ "${1:-}" == "--check" ]]; then
  mode="--check"
fi

# Prettier is fetched on demand via npx, so no dependency is required in package.json.
npx --yes prettier@3 "$mode" "**/*.ts"

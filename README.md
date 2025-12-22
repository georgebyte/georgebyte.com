# georgebyte.com

## Setup

- Install toolchain: `mise install` (uses `mise.toml`)
- Install deps: `npm install`

## Development

- Start dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Formatting and linting

- Format (write): `npm run format`
- Lint (check only): `npm run lint`

## Pre-commit hooks

- Husky is installed via `npm install` (runs `prepare` npm script)
- On commit, `lint-staged` runs lint checks (e.g. `prettier --check`) on staged files

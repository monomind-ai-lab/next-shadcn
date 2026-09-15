# next-shadcn

A Next.js monorepo for shadcn/ui style components, split into primitives and presets.

## Primitives

Unstyled, headless building blocks that provide behavior and accessibility:

- `radix-ui` — accessible behaviors (Slot, Dialog, Popover, etc.)
- `@base-ui/react` — low-level components from the Base UI project

Primitives carry no styling. You compose your own classes on top of them.

## Presets

Ready-to-use, styled components that layer Tailwind styling on top of primitives:

- Live in `packages/ui/src/components/` (e.g. `button.tsx`)
- Use `class-variance-authority` (cva) for variants and sizes
- Importable from the `@workspace/ui` package

Presets are what you actually drop into pages.

## Project structure

```
apps/web            Next.js app (consumes the ui package)
packages/ui         Shared UI package — presets in src/components, styles in src/styles
```

## Adding components

Add a new preset to the `web` app, placing it in `packages/ui/src/components`:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

## Using components

```tsx
import { Button } from "@workspace/ui/components/button";
```

## Development

```bash
bun install
bun run dev       # turbo dev
bun run build     # turbo build
```

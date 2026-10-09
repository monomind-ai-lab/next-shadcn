# next-shadcn — `untitledui` branch

A Next.js monorepo that uses **Untitled UI** (React Aria + Tailwind v4) for layout and components, styled with the **next-shadcn preset** tokens (colors, radius, fonts). `master` stays a clean shadcn base; this branch is the Untitled UI variant. Clone it to start a new project:

```bash
git clone -b untitledui https://github.com/monomind-ai-lab/next-shadcn.git my-app
cd my-app && bun install && bun run dev
```

## Structure

```
apps/web        Next.js app (consumes @workspace/ui)
packages/ui     Shared UI package
  src/components/base/            Buttons, inputs, select, checkbox, dropdown, avatar, ...
  src/components/application/     Tables, tabs, modals, charts, date pickers, navigation, ...
  src/components/marketing/       Landing-page sections (headers, footers, pricing, ...)
  src/components/foundations/     Icons, featured icon, logos, payment icons
  src/components/shared-assets/   Illustrations, background patterns, mockups
  src/hooks, src/utils            use-breakpoint, use-clipboard, cx, ...
  src/styles                      globals.css, theme.css, typography.css, shadcn-bridge.css
```

## Using components

```tsx
"use client"
import { Button } from "@workspace/ui/components/base/buttons/button"
import { Input } from "@workspace/ui/components/base/input/input"
import { ArrowRight } from "@untitledui/icons"

<Button color="primary" iconTrailing={ArrowRight}>Continue</Button>
```

- Components are React Aria based and mostly client components. Pages that pass icon components as props need `"use client"`.
- See `apps/web/app/components/page.tsx` for a working example.
- Add more components (or refresh one) from `packages/ui`:

```bash
npx untitledui@latest add <component> -d . -p src/components -y
```

The CLI writes to `src/src/components/...` with `@/` imports. Move the files into `src/components/` and rewrite `@/...` to `@workspace/ui/...`. Its final `npm install` step fails on `workspace:*`; install dependencies with `bun add` instead.

## Theming

Visual tokens live in `packages/ui/src/styles/globals.css` (`:root` / `.dark`: `--background`, `--primary`, `--border`, `--radius`, ...). `shadcn-bridge.css` maps Untitled UI's semantic tokens (`bg-primary`, `text-*`, `border-*`, `bg-brand-solid`) onto them, and the `--color-brand-*` palette is Tailwind blue. Change those variables to re-theme every component.

Dark mode uses the `.dark` class (`next-themes`); press `d` to toggle in the demo app.

## Notes

- shadcn components are intentionally not used here: Untitled UI's `bg-primary` / `text-primary` class names collide with shadcn tokens.
- Untitled UI components are copied into the repo. Some Untitled UI components may be covered by a PRO license; check Untitled UI's license terms before making this repository public or publishing it as a package.
- On Apple Silicon with an x64 Node, Tailwind's `lightningcss` may need the x64 binary: `bun install --cpu '*'`.

## Development

```bash
bun install
bun run dev        # turbo dev
bun run build      # turbo build
bun run typecheck
```

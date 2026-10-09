"use client"

import { Button } from "@workspace/ui/components/base/buttons/button"
import { ArrowRight } from "@untitledui/icons"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1 className="text-display-xs font-semibold text-primary">
          Untitled UI ready
        </h1>
        <div className="flex gap-3">
          <Button color="primary" iconTrailing={ArrowRight}>
            Primary
          </Button>
          <Button color="secondary">Secondary</Button>
        </div>
        <div className="font-mono text-xs text-tertiary">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

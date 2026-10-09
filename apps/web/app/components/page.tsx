"use client"

import { Button } from "@workspace/ui/components/base/buttons/button"
import { Input } from "@workspace/ui/components/base/input/input"
import { Select } from "@workspace/ui/components/base/select/select"
import { TextArea } from "@workspace/ui/components/base/textarea/textarea"
import { Checkbox } from "@workspace/ui/components/base/checkbox/checkbox"
import { Tabs } from "@workspace/ui/components/application/tabs/tabs"
import { Mail01 } from "@untitledui/icons"

const items = [
  { id: "design", label: "Design" },
  { id: "eng", label: "Engineering" },
  { id: "product", label: "Product" },
]

export default function Page() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-5 p-8">
      <Input label="Email" placeholder="you@example.com" icon={Mail01} hint="We won't spam you." />
      <Select label="Team" placeholder="Select team" items={items}>
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <TextArea label="Message" placeholder="Write something" />
      <Checkbox label="Accept terms" />
      <Tabs>
        <Tabs.List type="button-brand" items={items}>
          {(tab) => <Tabs.Item {...tab} />}
        </Tabs.List>
      </Tabs>
      <Button color="primary">Submit</Button>
    </div>
  )
}

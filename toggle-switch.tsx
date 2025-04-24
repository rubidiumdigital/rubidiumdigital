import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface ToggleSwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label: string
}

export function ToggleSwitch({ checked, onCheckedChange, label }: ToggleSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="demo-mode" checked={checked} onCheckedChange={onCheckedChange} />
      <Label htmlFor="demo-mode" className="text-sm text-gray-400">
        {label}
      </Label>
    </div>
  )
}


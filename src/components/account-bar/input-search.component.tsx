import { Input } from "./input.component"
import { Search } from 'lucide-react'

export function InputSearch() {
  return (
    <div className="space-y-4 w-full rounded-2xl bg-text-contrast h-14 shadow-sm">
      <div className="relative">
        <Input type="text" placeholder="Search" className="pr-8 rounded-2xl  h-14" />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-2xl h-14 mr-5">
          <Search className="h-4 w-4 text-gray-500" />
        </button>
      </div>
    </div>
  )
}
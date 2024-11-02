import { Coins } from "./Coins";
import { Input } from "./Input";

export function Header() {
  return (
    <header className="flex items-center bg-zinc-50 justify-between border-b border-zinc-200 bg-white px-8 py-6 dark:border-zinc-700 dark:bg-zinc-900">
      <Input />

      <div className="flex items-center gap-4">
        <Coins />
      </div>
    </header>
  )
}
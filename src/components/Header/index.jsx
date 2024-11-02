import { Profile } from "../Sidebar/Profile";
import { Coins } from "./Coins";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-8 py-6 dark:border-zinc-700 dark:bg-zinc-900">
      <Profile />

      <div className="flex items-center gap-4">
        <Coins />
      </div>
    </header>
  )
}
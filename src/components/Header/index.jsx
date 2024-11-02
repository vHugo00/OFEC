import { Profile } from "../Sidebar/Profile";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-6 dark:border-zinc-700 dark:bg-zinc-900">
      <Profile />
    </header>
  )
}
import { Search } from "lucide-react";

export function Input() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-zinc-200 px-4 py-2 dark:bg-zinc-800">
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        type="text"
        name="search"
        placeholder="Pesquisar..."
        className="w-full bg-transparent text-md text-zinc-700 outline-none placeholder:text-zinc-500 dark:text-zinc-200"
      />
    </div>
  );
}
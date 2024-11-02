export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-zinc-100 px-4 py-5 dark:bg-zinc-800">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-5 text-zinc-700 dark:text-zinc-100">
          Plano - Vagão Assombrado
        </span>
        <span className="text-sm leading-5 text-zinc-500 dark:text-zinc-400">
          Você pode atualizar seu plano para obter maiores benefícios
        </span>
      </div>

      <div className="h-2 rounded-full bg-zinc-300 dark:bg-zinc-600">
        <div className="h-2 w-3/4 rounded-full bg-minha-cor dark:bg-minha-cor" />
      </div>

      <div className="flex gap-3">

        <button
          type="button"
          className="text-sm font-medium text-zinc-700 dark:text-minha-cor"
        >
          Atualizar
        </button>

        <button
          type="button"
          className="text-sm font-medium text-zinc-500 dark:text-violet-300"
        >
          Saiba mais
        </button>
      </div>
    </div>
  )
}

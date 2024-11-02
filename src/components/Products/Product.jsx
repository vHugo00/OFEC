export function Product() {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800">
      <img
        src="https://github.com/vHugo00.png"
        className="h-32 w-32 rounded-full"
        alt="Vitor Hugo's profile"
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Vitor Hugo
        </span>
        <span className="text-sm leading-5 text-zinc-500 dark:text-zinc-400"> vv001226@gmail.com </span>
      </div>
    </div>
  );
}
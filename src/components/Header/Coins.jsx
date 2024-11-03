import { ShoppingCart } from 'lucide-react';
import { Coins as CoinsIcon } from 'lucide-react';

export function Coins() {
  return (
    <div className='flex gap-4'>
      <div className="flex bg-zinc-100 px-4 py-2 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-md items-center space-x-2">

        <CoinsIcon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        <span className="text-lg text-amber-600 dark:text-amber-300">500</span>
      </div>

      <div className="flex bg-zinc-100 px-4 py-2 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-md items-center space-x-2">
        <a href="">
          <ShoppingCart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </a>
      </div>
    </div>
  );
}

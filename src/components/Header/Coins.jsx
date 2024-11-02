import { Coins as CoinsIcon } from 'lucide-react';

export function Coins() {
  return (
    <div className="flex items-center space-x-2">
      <CoinsIcon className="h-6 w-6 text-amber-500 dark:text-amber-400" />
      <span className="text-lg text-amber-500 dark:text-amber-300">500</span>
    </div>
  );
}

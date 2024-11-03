import { CoinsIcon } from 'lucide-react';
import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

Product.propTypes = {
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  coins: PropTypes.number.isRequired,
  purchaseLink: PropTypes.string.isRequired
};

export function Product({
  image,
  product,
  price,
  coins,
  purchaseLink,
}) {
  return (
    <a
      href={purchaseLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="flex flex-col h-full p-4 border rounded-lg border-zinc-700 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-700 hover:transition-colors">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={`${product}`}
            className="rounded-md w-full"
          />
        </div>

        <div className="flex-grow flex flex-col justify-end">
          <span className="text-md font-semibold text-zinc-700 dark:text-zinc-100 mt-4">
            {product}
          </span>

          <div className="flex mt-1">
            {Array(5).fill().map((_, index) => (
              <Star key={index} className="w-4 h-4 text-amber-500" />
            ))}
          </div>

          <span className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Por apenas:
          </span>

          <div className="flex items-center space-x-2 text-md text-zinc-700 dark:text-zinc-100 mt-1">
            <span className="text-md text-zinc-500 dark:text-amber-400">
              {price}
            </span>
            <span>ou</span>
            <span className="flex items-center text-md text-zinc-400 dark:text-amber-400">
              <CoinsIcon className="mr-1 w-4 h-4" /> {coins}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

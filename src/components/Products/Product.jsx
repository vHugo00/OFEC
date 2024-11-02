import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

Product.propTypes = {
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onBuy: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  buyText: PropTypes.string,
  addToCartText: PropTypes.string,
};

export function Product({
  image,
  product,
  price,
  onBuy,
  onAddToCart,
  buyText = "Comprar",
  addToCartText = "Adicionar ao carrinho"
}) {
  return (
    <div className="flex justify-between space-y-4 flex-col gap-2 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800">
      <img
        src={image}
        alt={`${product}'s profile`}
      />
      <div className="flex flex-col space-y-1 gap-1">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          {product}
        </span>
        <span className='flex'>
          <Star className='w-4 h-4 text-amber-500' />
          <Star className='w-4 h-4 text-amber-500' />
          <Star className='w-4 h-4 text-amber-500' />
          <Star className='w-4 h-4 text-amber-500' />
          <Star className='w-4 h-4 text-amber-500' />
        </span>
        <span className="text-sm leading-5 text-zinc-500 dark:text-zinc-400">
          Por apenas:
        </span>
        <span className="text-md leading-5 text-zinc-500 dark:text-amber-300">
          {price}
        </span>

        <div className='flex gap-2'>
          <button
            type="button"
            className="text-md px-2 py-1 rounded bg-minha-cor font-medium dark:text-zinc-50"
            onClick={onBuy}
          >
            {buyText}
          </button>
          <button
            type="button"
            className="text-md font-medium border px-2 py-1 rounded border-minha-cor text-zinc-700 dark:text-minha-cor"
            onClick={onAddToCart}
          >
            {addToCartText}
          </button>
        </div>
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';

Product.propTypes = {
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}
export function Product({ image, product, price }) {
  return (
    <div className="flex justify-between flex-col gap-2 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800">
      <img
        className=''
        src={image}
        alt={`${product}'s profile`}
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          {product}
        </span>
        <span className="text-sm leading-5 text-zinc-500 dark:text-zinc-400">
          Por apenas:
        </span>
        <span className="text-md leading-5 text-zinc-500 dark:text-amber-300">
          {price}
        </span>
      </div>
    </div>
  );
}

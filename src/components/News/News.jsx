import PropTypes from 'prop-types';

News.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export function News({ image, title, summary, date, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start border rounded-lg border-zinc-200 dark:border-zinc-800 mb-2 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
    >
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg object-cover mr-4"
      />
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-100">
            {title}
          </h3>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {date}
          </span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
          {summary}
        </p>
      </div>
    </a>
  );
}

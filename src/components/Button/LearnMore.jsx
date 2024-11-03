import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';

LearnMore.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export function LearnMore({ text = "Saiba mais", link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center mt-4 px-4 py-2 border border-zinc-700 rounded-lg bg-zinc-900 text-zinc-300 text-sm font-semibold transition-colors hover:bg-zinc-800 dark:bg-zinc-800 dark:border-zinc-600 dark:hover:bg-zinc-700"
    >
      {text}
      <ArrowRight className="ml-2 w-4 h-4 text-zinc-400" />
    </a>
  );
}

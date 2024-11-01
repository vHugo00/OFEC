import { ChevronDown } from 'lucide-react'
import PropTypes from 'prop-types';

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export function NavItem({ title, icon: Icon }) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 outline-none hover:bg-violet-50 focus-visible:ring-2 focus-visible:ring-violet-500 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 flex-shrink-0 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 dark:text-zinc-600" />
    </a>
  )
}

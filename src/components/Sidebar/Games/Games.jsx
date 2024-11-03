import PropTypes from 'prop-types';

Games.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  teamA: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  teamB: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export function Games({ date, time, teamA, teamB }) {
  return (
    <div className="border rounded-lg border-zinc-200 dark:border-zinc-800 mb-2 pt-4">
      <div className="flex justify-center">
        <p className="text-zinc-400">
          {date} - {time}
        </p>
      </div>
      <div className="flex gap-4 justify-center p-4">
        <div className="flex flex-col items-center">
          <img className="w-8 h-8" src={teamA.logo} alt={teamA.name} />
          <span className="p-2 block text-sm font-medium text-zinc-700 dark:text-zinc-100">
            {teamA.name}
          </span>
        </div>
        <span className="text-zinc-400">X</span>
        <div className="flex flex-col items-center">
          <img className="w-8 h-8" src={teamB.logo} alt={teamB.name} />
          <span className="p-2 block text-sm font-medium text-zinc-700 dark:text-zinc-100">
            {teamB.name}
          </span>
        </div>
      </div>
    </div>
  );
}

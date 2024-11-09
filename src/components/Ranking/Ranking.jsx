import PropTypes from 'prop-types';

const Ranking = ({ players }) => {
  return (
    <div className="w-full">
      <h2 className="text-md  font-bold mb-4">Ranking de Jogadores</h2>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {players.slice(0, 20).map((player, index) => {
          // Defina uma cor com base na posição
          let positionColor;
          if (index === 0) positionColor = 'text-yellow-400';    // Primeiro lugar - amarelo
          else if (index === 1) positionColor = 'text-gray-300';  // Segundo lugar - prata
          else if (index === 2) positionColor = 'text-yellow-600'; // Terceiro lugar - bronze
          else positionColor = 'text-gray-500';                   // Outros - cinza

          return (
            <div
              key={index}
              className="flex justify-between items-center bg-zinc-800 p-2 rounded border border-zinc-700"
            >
              <span className={`text-lg font-semibold ${positionColor}`}>{index + 1}º</span>
              <span className="text-lg font-medium">{player.name}</span>
              <span className="text-lg font-semibold text-green-400">{player.score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Defina Ranking.propTypes depois da declaração do componente
Ranking.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
};

export default Ranking;

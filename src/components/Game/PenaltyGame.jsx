import { useState } from 'react';
import golkeaper from '../../assets/images/Rafael-Santos.png.webp';
import background from '../../assets/images/bg.png';
import Ranking from '../Ranking/Ranking';

const PenaltyShootout = () => {
  const [goalkeeperPosition, setGoalkeeperPosition] = useState(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Clique no gol para chutar!');
  const [isGoalkeeperJumping, setIsGoalkeeperJumping] = useState(false);
  const [isBallMoving, setIsBallMoving] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [shootPosition, setShootPosition] = useState(null);

  const players = [
    { name: 'Jogador 1', score: 150 },
    { name: 'Jogador 2', score: 120 },
    { name: 'Jogador 3', score: 100 },
    { name: 'Jogador 4', score: 90 },
    { name: 'Jogador 5', score: 80 },
    { name: 'Jogador 6', score: 77 },
    { name: 'Jogador 7', score: 70 },
    { name: 'Jogador 8', score: 60 },
    { name: 'Jogador 9', score: 50 },
    { name: 'Jogador 10', score: 40 },
    { name: 'Jogador 11', score: 30 },
    { name: 'Jogador 12', score: 20 },
    { name: 'Jogador 13', score: 10 },
    { name: 'Jogador 14', score: 0 },
    { name: 'Jogador 15', score: 0 },
    { name: 'Jogador 16', score: 0 },
  ];

  const chooseGoalkeeperPosition = () => {
    const randomPosition = Math.floor(Math.random() * 3);
    setGoalkeeperPosition(randomPosition);
  };

  const handleShoot = (position) => {
    if (attemptsLeft <= 0) return;

    setShootPosition(position);
    chooseGoalkeeperPosition();
    setIsGoalkeeperJumping(true);
    setIsBallMoving(true);

    setTimeout(() => {
      if (position === goalkeeperPosition) {
        setMessage('Defesa do goleiro!');
        setAttemptsLeft(attemptsLeft - 1);
      } else {
        setScore(score + 1);
        setMessage('Gol!');
      }

      setIsGoalkeeperJumping(false);
      setIsBallMoving(false);

      if (attemptsLeft - 1 <= 0 && position === goalkeeperPosition) {
        setTimeout(() => setMessage('Game Over!'), 500);
      }
    }, 500);
  };

  const resetGame = () => {
    setScore(0);
    setAttemptsLeft(3);
    setMessage('Clique no gol para chutar!');
    setGoalkeeperPosition(null);
    setIsGoalkeeperJumping(false);
    setIsBallMoving(false);
  };

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 ">
      {/* Seção principal com o jogo de pênaltis e imagem de fundo */}
      <div
        className="col-span-3 flex flex-col items-center justify-center p-6 space-y-4 text-center"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="text-3xl font-bold text-white">Jogo de Pênaltis</h1>
        <p className="text-lg text-white">{message}</p>

        <div className="relative w-96 h-72 bg-green-500 border-4 border-green-800 rounded-md flex items-center justify-center perspective">
          <img
            src={golkeaper}
            alt="Goleiro"
            className={`absolute mb-20 w-16 transition-transform duration-300 transform ${isGoalkeeperJumping
              ? goalkeeperPosition === 0
                ? '-translate-x-20 -translate-y-6'
                : goalkeeperPosition === 1
                  ? '-translate-y-6'
                  : 'translate-x-20 -translate-y-6'
              : 'translate-y-0'
              }`}
          />
          <div
            className={`absolute bottom-8 transform transition-transform duration-500 ${isBallMoving
              ? 'translate-y-[-160px] ' +
              (shootPosition === 0 ? '-translate-x-16' : shootPosition === 2 ? 'translate-x-16' : '')
              : ''
              }`}
          >
            <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-800 flex items-center justify-center shadow-lg">
              ⚽
            </div>
          </div>

          <div className="absolute top-2 flex justify-between w-full px-6">
            <button
              onClick={() => handleShoot(0)}
              className="w-24 h-10 bg-red-500 opacity-70 hover:opacity-100 rounded-lg"
            ></button>
            <button
              onClick={() => handleShoot(1)}
              className="w-24 h-10 bg-red-500 opacity-70 hover:opacity-100 rounded-lg"
            ></button>
            <button
              onClick={() => handleShoot(2)}
              className="w-24 h-10 bg-red-500 opacity-70 hover:opacity-100 rounded-lg"
            ></button>
          </div>
        </div>

        <p className="text-xl text-white">Pontuação: {score}</p>
        <p className="text-xl text-white">Tentativas Restantes: {attemptsLeft}</p>

        <button
          onClick={resetGame}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white font-bold rounded"
        >
          Reiniciar Jogo
        </button>
      </div>

      {/* Seção lateral separada, sem fundo */}
      <div className="col-span-1 flex flex-col items-center  p-4 bg-zinc-900 border border-zinc-700 text-white">
        <Ranking players={players} />
      </div>
    </div>
  );
};

export default PenaltyShootout;

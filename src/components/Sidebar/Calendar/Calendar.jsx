export function Calendar() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const games = [
    { date: new Date(currentYear, currentMonth, 4), opponent: "Time A" },
    { date: new Date(currentYear, currentMonth, 9), opponent: "Time B" },
    { date: new Date(currentYear, currentMonth, 15), opponent: "Time C" },
    { date: new Date(currentYear, currentMonth, 24), opponent: "Time D" },
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const isGameDay = (day) => {
    return games.some(game => game.date.getDate() === day && game.date.getMonth() === currentMonth && game.date.getFullYear() === currentYear);
  };

  const renderDays = () => {
    const days = [];

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 w-full h-12"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isPast = day < currentDay;
      const gameDay = isGameDay(day);

      days.push(
        <div
          key={day}
          className={`p-2 w-full h-12 flex items-center justify-center rounded-md relative
            ${isPast ? 'bg-zinc-200 dark:bg-zinc-800 text-gray-500 cursor-not-allowed' : 'bg-zinc-100 dark:bg-zinc-900 text-black dark:text-zinc-100'}
            ${day === currentDay ? 'font-bold' : ''}`}
        >
          <span className={`${gameDay ? 'relative' : ''}`}>
            {day}
            {gameDay && (
              <span className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-1 h-4 bg-minha-cor"></span>
            )}
          </span>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-4 border bg-zinc-100 border-zinc-200 rounded-lg dark:border-zinc-800 dark:bg-zinc-900 w-full">
      <span className="flex justify-center text-md font-semibold text-zinc-700 dark:text-zinc-100">Novembro  -  {currentYear}</span>
      <div className="grid grid-cols-7 gap-2 mb-2 w-full relative">
        <div className="absolute  bottom-[-10px] left-0 w-[95%] h-[1px] bg-gray-300 dark:bg-zinc-800 mx-auto" style={{ right: 0 }}></div>
        {weekDays.map((day, index) => (
          <div
            key={index}
            className="text-center font-semibold text-gray-700 dark:text-gray-300 w-full"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 w-full mt-4">
        {renderDays()}
      </div>
    </div>
  );
}

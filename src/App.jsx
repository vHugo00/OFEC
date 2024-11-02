import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Calendar } from "./components/Sidebar/Calendar/Calendar";
import { Games } from "./components/Sidebar/Games/Games";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-app bg-zinc-50 dark:bg-zinc-900 lg:grid lg:grid-cols-app">
      <aside className="relative min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
        <Sidebar />
      </aside>

      <main className="w-full min-h-screen px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
        <Header />

        <div className="grid grid-cols-4 gap-4 w-full mt-12">
          <div className="col-span-3 w-full">1</div>

          <div className="col-span-1 w-full">
            <Games />
            <Calendar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-app dark:bg-zinc-900 lg:grid lg:grid-cols-app">

      <aside className="relative min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
        <Sidebar />
      </aside>
      <main className="max-w-screen px-4 pb-12 pt-24 lg:col-start-2 lg:w-auto lg:px-8 lg:pt-8">
        <Header />
      </main>

    </div>
  );
}

export default App;

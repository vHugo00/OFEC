import { Header } from "./components/Header";
import { Product } from "./components/Products/Product";
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
          <div className="col-span-3 w-full">
            <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-100 mb-4">Produtos</h2>
            <div className="grid grid-cols-3 gap-4">
              <Product
                image="../src/assets/images/camisa-oficial-do-operario-ferroviario-2024-listrado.png"
                product="Camisa oficial do Operário Ferroviario 2024 - Listrado"
                email="vv001226@gmail.com"
                price="R$ 89,90"
              />
              <Product
                image="../src/assets/images/camisa-oficial-do-operario-ferroviario-2024-branco.png"
                product="Camisa oficial do Operário Ferroviario 2024 - Branco"
                email="vv001226@gmail.com"
                price="R$ 89,90"
              />
              <Product
                image="../src/assets/images/camisa-comissao-tecnica-treino-operario-2024.png"
                product="Camisa Comissão Técnica Treino Operário 2024"
                email="vv001226@gmail.com"
                price="R$ 89,90"
              />

            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-100">Noticias</h2>
              <Product />
              <Product />
              <Product />

            </div>

          </div>

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

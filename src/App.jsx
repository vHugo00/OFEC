import { Header } from "./components/Header";
import { News } from "./components/News/News.JSX";
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
                purchaseLink="https://www.operarioferroviario.com.br/"
                image="../src/assets/images/M13PYF01A5.avif"
                product="Camisa Operário Ferroviário I 2024 Karilu - Masculina"
                email="vv001226@gmail.com"
                price="R$ 189,90"
                coins="250"
              />
              <Product
                purchaseLink="https://www.operarioferroviario.com.br/"
                image="../src/assets/images/M13PYF01A6.jpg"
                product="Camisa Operário Ferroviário I 2024 Karilu"
                email="vv001226@gmail.com"
                price="R$ 189,90"
                coins="200"
              />
              <Product
                purchaseLink="https://www.operarioferroviario.com.br/"
                image="../src/assets/images/M13PYF01.avif"
                product="Camisa Operário Ferroviário I 2024 Karilu - Infantil"
                email="vv001226@gmail.com"
                price="R$ 189,90"
                coins="150"
              />

            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-100">Noticias</h2>
              <News
                image="https://via.placeholder.com/150"
                title="Breaking News: New Tech Innovation"
                summary="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
                date="03 Nov 2024"
                link="https://example.com/news-article"
              />
              <News
                image="https://via.placeholder.com/150"
                title="Breaking News: New Tech Innovation"
                summary="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
                date="02 Nov 2024"
                link="https://example.com/news-article"
              />
              <News
                image="https://via.placeholder.com/150"
                title="Breaking News: New Tech Innovation"
                summary="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
                date="01 Nov 2024"
                link="https://example.com/news-article"
              />
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

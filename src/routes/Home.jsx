import { LearnMore } from "../components/Button/LearnMore";
import { News } from "../components/News/News.JSX";
import { Product } from "../components/Products/Product";
import { Calendar } from "../components/Sidebar/Calendar/Calendar";
import { Games } from "../components/Sidebar/Games/Games";
import NovorizontinoLogo from '../assets/images/novorizontino.png'
import OperarioLogo from '../assets/images/ofec.png'
import Noticia from "../assets/images/Nota-Oficial-1.jpg.webp"
import Feliciano from "../assets/images/IMG_2327.jpg.webp"
import Indio from "../assets/images/indio.webp"

function App() {
  return (

    <main className="w-full px-4 pb-12 md:col-start-2 md:px-6 lg:px-8 lg:pt-8">
      <div className="grid grid-cols-1 gap-4 w-full mt-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-3 w-full">
          <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-100 mb-4">Produtos</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Product
              purchaseLink="https://www.operarioferroviario.com.br/"
              image="../src/assets/images/M13PYF01A5.avif"
              product="Camisa Operário Ferroviário I 2024 Karilu - Masculina"
              email="vv001226@gmail.com"
              price="R$ 189,90"
              coins="250"
            />
            {/* <Product
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
            /> */}
          </div>
          <LearnMore href="/store" />

          <div className="mt-16 space-y-4">
            <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-100">Noticias</h2>
            <News
              image={Noticia}
              title="Nota Oficial"
              summary="O Operário Ferroviário comunica o desligamento, em comum acordo, dos atacantes Rafhael Lucas e Felipe Garcia."
              date="09 Nov 2024"
              link="https://example.com/news-article"
            />
            <News
              image={Indio}
              title="Renovação contratual do volante Índio, até o final de 2025"
              summary="Sua trajetória é marcada por conquistas e a cima de tudo, uma identificação inegável com a historia do clube."
              link="https://example.com/news-article"
            />
            <News
              image={Feliciano}
              title="Gabriel Feliciano é do Fantasma "
              summary="O lateral-esquerdo, Gabriel Feliciano, de 23 anos, é o novo reforço do Fantasma. O contrato do jovem jogador vai até o final de 2025. .
"
              date="07 Nov 2024"
              link="https://example.com/news-article"
            />


            <LearnMore link="https://example.com/news-article" />
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 lg:col-span-1 w-full">
          <Games
            date="Hoje às"
            time="17:00h"
            teamA={{ name: "Novorizontino", logo: NovorizontinoLogo }}
            teamB={{ name: "Operário", logo: OperarioLogo }}
          />
          <Calendar />
        </div>
      </div>
    </main>
  );
}

export default App;

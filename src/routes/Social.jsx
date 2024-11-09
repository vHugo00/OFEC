import Post from "../components/Post/Post";
import { News } from "../components/News/News.JSX";
import Noticia from "../assets/images/Nota-Oficial-1.jpg.webp"
import Feliciano from "../assets/images/IMG_2327.jpg.webp"
import Indio from "../assets/images/indio.webp"



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/GmLvorr4MqC4aRinQQ4Mdw_96x96.png',
      name: 'Operário Ferroviário Esporte Clube',
    },
    content: [
      { type: 'paragraph', content: 'Hoje, partimos rumo a Novo Horizonte com o objetivo de conquistar mais uma vitória diante do Novorizontino. A expectativa é alta e a equipe está focada em superar desafios, buscar o melhor desempenho e trazer os três pontos para casa. Vamos com tudo!' },
      { type: 'paragraph', content: '⚽️ Novorizontino x Operário ' },
      { type: 'paragraph', content: '🏆 Brasileirão Série B (36ª rodada) ' },
      { type: 'paragraph', content: '🏟 Estádio Doutor Jorge Ismael de Biasi "Jorjão"' },
      { type: 'paragraph', content: '📺 Premiere, no Canal Goat e na TV Brasil.' },
    ],
    publishedAt: new Date('2024-11-09 11:00:00'),
  },

]

export default function Social() {
  return (
    <main className="w-full px-4 pb-12 md:col-start-2 md:px-6 lg:px-8 lg:pt-8">
      <div className="grid grid-cols-1 gap-4 w-full mt-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-3 w-full">
          {posts.map(post => {
            return (

              <Post
                key={post.id}
                author={post.author}
                role={post.role}
                avatarUrl={post.avatarUrl}
                content={post.content}
                publishedAt={post.publishedAt}
                imageUrl={post.imageUrl}
              />

            )
          })}
        </div>
        <div>
          <News
            image={Noticia}
            title="Nota Oficial"
            summary="O Operário Ferroviário comunica..."
            link="https://example.com/news-article"
          />
          <News
            image={Feliciano}
            title="Gabriel Feliciano é do Fantasma "
            summary="é o novo reforço do Fantasma..."
            link="https://example.com/news-article"
          />
          <News
            image={Indio}
            title="Renovação contratual"
            summary="Sua trajetória é marcada por conquistas..."
            link="https://example.com/news-article"
          />
        </div>
      </div>
    </main>
  )
}
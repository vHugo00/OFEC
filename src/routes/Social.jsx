import Post from "../components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/vHugo00.png',
      name: 'Vitor Hugo',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'imageUrl', content: 'https://github.com/vHugo00.png' },
    ],
    publishedAt: new Date('2024-05-11 08:13:00'),
  },
]

export default function Social() {
  return (
    <main className="w-full px-4 pb-12 pt-24 md:col-start-2 md:px-6 lg:px-8 lg:pt-8">
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
    </main>
  )
}
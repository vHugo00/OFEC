import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Post1 from '../../assets/images/Screenshot_20241109_095056_Instagram.jpg'

import { Avatar } from './Avatar';

import styles from './Post.module.css';

export default function Post({ author, publishedAt, content, imageUrl }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCrateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <div className='w-full px-4 pb-12 md:col-start-2 md:px-6 lg:px-8 lg:pt-8'>
      <div className='bg-zinc-800 border  border-zinc-700 text-zinc-100 rounded '>
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
              <Avatar src={author.avatarUrl} />
              <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                  {publishedDateRelativeToNow}
                </time>
              </div>
            </div>


          </header>

          <div className={styles.content}>
            {content.map(line => {
              if (line.type === 'paragraph') {
                return <p key={line.content}>{line.content}</p>;
              } else if (line.type === 'link') {
                return <p key={line.content}><a href="#">{line.content}</a></p>
              }
            })}
          </div>

          <span className="">
            <img src={Post1} alt="Imagem de teste" />
          </span>


          <form onSubmit={handleCrateNewComment} className={styles.commentForm}>

            <textarea
              name="comment"
              value={newCommentText}
              onChange={handleNewCommentChange}
            />

            <footer>
              <button type="submit">Publicar</button>
            </footer>
          </form>
        </article>
      </div>
    </div>
  )
}

Post.propTypes = {
  author: PropTypes.object.isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageUrl: PropTypes.string.isRequired
};
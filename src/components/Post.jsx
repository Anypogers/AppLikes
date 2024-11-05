import { Comment } from "./Comment";
import styles from "./Post.module.css";

// author: {avatarUrl: "", nome: "", cargo: ""}
// dataPulicacao: Date
// Content: string

export function Post({author, content, dataPublicacao}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.nome}</strong>
            <span>{author.cargo}</span>
          </div>
        </div>
        <time title="10 de Setembro às 09:44h" dateTime={dataPublicacao}>
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Yoooo guys!!!</p>
        <p>Murder Drones Episode 8 is a banger!</p>
        <p>
          <a href="#">#murderdrones</a> <a href="#">#indieanimations</a>{" "}
          <a href="#">#glitchproductions</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback !</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

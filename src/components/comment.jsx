import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/Anypogers.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong className={styles.name}>Anypogers</strong>
              <time title="10 de Setembro às 09:44h" dateTime="2024/09/10 09:44:00">Há 1h atrás</time>
            </div>
            <button title='Excluir Comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bem Anypogers, Parabéns!!! (ps: vai toma no seu cu)</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
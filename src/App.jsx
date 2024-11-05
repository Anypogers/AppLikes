import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'
import './global.css';

// author: {avatarUrl: "", nome: "", cargo: ""}
// dataPulicacao: Date
// Content: string


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/furlanrogerio.png',
      nome: 'Rogério Furlan',
      cargo: 'Professor da Etec'
    },
    content: [
      {type: 'paragraph', content: "Fala Galera !!!"},
      {type: 'paragraph', content: "Amanhã teremos viagem a Bienal !!!"},
      {type: 'link', content: 'youtu.be'}
    ],
    dataPublicacao: new Date('2024/09/10 09:44:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Anypogers.png',
      nome: 'Anypogers',
      cargo: 'Aluno da Etec'
    },
    content: [
      {type: 'paragraph', content: "Fala Galera !!!"},
      {type: 'paragraph', content: "Eu não vou a viagem na Bienal"},
      {type: 'link', content: 'youtu.be'}
    ],
    dataPublicacao: new Date('2024/09/10 09:44:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/Shadd330.png',
      nome: 'Iza',
      cargo: 'Aluna da Etec'
    },
    content: [
      {type: 'paragraph', content: "Fala Galera !!!"},
      {type: 'paragraph', content: "Eu vou a viagem na Bienal"},
      {type: 'link', content: 'youtu.be'}
    ],
    dataPublicacao: new Date('2024/09/10 09:44:00')
  }
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author = {post.author}
                content = {post.content}
                dataPublicacao = {post.dataPublicacao}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

function CriarPost() {
  return ;
}
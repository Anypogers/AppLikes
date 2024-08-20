import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css';


export function App() {
  return (  
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Machado de assis"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
          <Post
            author="Castro Alves"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
          <Post
            author="Padre Antonio Vieira"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
        </main>
      </div>
    </div>
  )
}
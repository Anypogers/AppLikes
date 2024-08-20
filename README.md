
> CMD

npm create vite@latest
: "Nome"
: "React" (cetinha para baixo)
: "JavaScript"

npm install || npm i
- instala Node Modules

npm run dev
- abrir o site

h + [ENTER] = ajuda

EXTENCAO: CSS MODULES

VS Code --- File Structure
._(src)
|\(assets)
|\(components)
|
|
|>App.jsx
||
||^component code^
|
|>App.module.css
||
||^css code^

jsx:
import {Header} from "./components/Header" 

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
	<>
		^CONTEUDO^
	</>
  );
}


css:
:root{
	--NOME_VARIAVEL: #codigo_hex;
	--NOME_VARIAVEL: #codigo_hex;
	--NOME_VARIAVEL: #codigo_hex;
}

^Estilos CSS^
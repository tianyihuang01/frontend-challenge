import 'css-wipe';
import jsonData from './data/pokemon-gen1.json';
import type { Pokemon } from './types';

const data = jsonData as Pokemon[];

function App() {
	return <h1>It works!</h1>;
}

export default App;

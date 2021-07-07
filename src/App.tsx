import React from 'react';
import 'css-wipe';
import jsonData from './data/pokemon-gen1-gen2-gen3.json';
import type { Pokemon } from './types';
const data: Pokemon[] = jsonData as Pokemon[];

function App() {
  return (
		<>
			<h1>It works!</h1>
		</>
  );
}

export default App;

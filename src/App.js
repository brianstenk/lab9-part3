import { Counter } from './components/Counter';
import { useState } from 'react';
import './App.css';

function App() {  

  return (
    <>
      <Counter value={1} />
      <Counter value={3} />
      <Counter value={5} />
      <Counter value={8} />
    </>
  );
}

export default App;

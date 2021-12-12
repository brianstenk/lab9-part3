import { Counter } from './components/Counter';
import { useState } from 'react';
import './App.css';

function App() {  
  const [sum, setSum] = useState(0);

  function toAdd(initialSum, newValue){
		setSum(initialSum + newValue);
	}

	function toSubtract(initialSum, newValue){
		setSum(initialSum - newValue);
	}

  return (
    <>
      <h1>{sum}</h1>
      <div className='counters'>
        <Counter sum={sum} value={1} toAdd={() => toAdd(sum, 1)} toSubtract={() => toSubtract(sum, 1)}/>
        <Counter sum={sum} value={3} toAdd={() => toAdd(sum, 3)} toSubtract={() => toSubtract(sum, 3)}/>
      </div>
      <div className='counters'>
        <Counter sum={sum} value={5} toAdd={() => toAdd(sum, 5)} toSubtract={() => toSubtract(sum, 5)}/>
        <Counter sum={sum} value={8} toAdd={() => toAdd(sum, 8)} toSubtract={() => toSubtract(sum, 8)}/>
      </div>
    </>
  );
}

export default App;

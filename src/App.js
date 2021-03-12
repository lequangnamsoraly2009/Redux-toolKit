import './App.css';
import { Counter } from './features/counter/Counter';
import {RandomColor} from './features/RandomColor/randomColor';


function App() {
  return (
    <div className="App">
      <Counter/>
      <RandomColor/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const images = ["react.png", "angular.png", "spring.png"];
  const [idx, setIdx] = useState(0);
  return (
    <div className="App">
      <div id="carousel">
        <img src={require(`./assets/${images[idx]}`)} alt='some_image' height={400}/>
        <br/>
        <br/>
        <button id="prev" onClick={()=> {
          if(idx>0)
            setIdx(idx-1);
        }}>Prev</button>

        <button id="next" onClick={() => {
          if(idx!=images.length-1)
            setIdx(idx+1);
        }}>Next</button>
      </div>
    </div>
  );
}

export default App;

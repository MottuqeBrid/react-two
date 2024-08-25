import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from 'bootstrap';
function App() {
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}


function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleCLickAdd = () => setCount(count + 1)
  const handleCLickRemove = () => setCount(count - 1)
  return (
    <div>
      <h1>My Favorite Movies</h1>
      <button onClick={handleCLickAdd}>Add Movie</button>
      <button onClick={handleCLickRemove}>Remove Movie</button>
      <h3 className='bg-success'>Number of Movies: {count}</h3>
      <h1>Hi I am MOTTUQE</h1>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return (
    <h4>Movie I have acted: {props.movies}</h4>
  )
}

export default App;

import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <div>
      {
       <WordCard value={word}/>
      }
    </div>
  );
}

export default App;

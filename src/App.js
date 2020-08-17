import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";

function App() {
  var word = "";
  

  return (
    <body>
      <center><br></br><h1>Welcome To Words Puzzle!</h1><br></br></center>
      <h2>Show your skill</h2>
      <h3>This words is about viewing and greet other people.</h3>
      <div>
        <WordCard value={word}/>
      </div> 
      <h2>Click for change</h2>
      <button className="button button1" onClick={() => answer(word)}>Give up</button>
      <button className="button button2"><a href="http://localhost:3000/" >Next word</a></button>
      
      
    </body>
  );
}
export default App;

function answer(word){
  alert("The answer is "+word)
}
import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";

function App() {
  var word = "";
  var rand = Math.floor(Math.random()*10)+1;
  if(rand == 1) {
    word = "HelloWorld";
  }
  else if(rand == 2){
    word = "Handsome";   
  }
  else if(rand == 3){
    word = "Beautiful";
  }
  else if(rand == 4){
    word = "Smart";
  }
  else if(rand == 5){
    word = "CuteGirl";
  }
  else if(rand == 6){
    word = "Gentleman";
  }



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
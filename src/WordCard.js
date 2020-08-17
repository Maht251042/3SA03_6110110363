import React, { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

var text;
var win;

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        text = guess
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, guess: '', completed: true})
                win="Your skill is good!";
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                win="Let's try again";     
            }
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
            
        </div>
    )
}
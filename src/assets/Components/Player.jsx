import React, { useState } from 'react'
export default function Player({ playerName, symbol }) {
    const [isEdit, setEdit] = useState(false);
    const [name,setName] = useState(playerName)
    let text = <span className="player-name font-[1000] bg-sky-500/10">{name}</span>
    if (isEdit) {
        // text = <input id="playerName" className="playerName" type='text' required defaultValue={name} ></input>

        text = <input 
            id="playerName" 
            className="playerName" 
            type='text' 
            required 
            defaultValue={name} 
            autoFocus 
            onBlur={() => {changeName()}} 
        ></input>
    }
    function handleClick() {
        if(isEdit){
            changeName()
        }
        return setEdit(isEdit=>!isEdit);   
    }
    function changeName(){
        setName(document.getElementById('playerName').value);
        text = <span className="player-name font-[1000] bg-sky-500/10">{name}</span>
    }
    return (
        <li>
            {text}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>Edit</button>
        </li>
    )
}

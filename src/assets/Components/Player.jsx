import React, { useState } from 'react'
export default function Player({ playerName, symbol }) {
    const [isEdit, setEdit] = useState(false);
    const [name,setName] = useState(playerName)
    let text = <span className="player-name">{name}</span>
    if (isEdit) {
        text = <input id="playerName"  type='text' required defaultValue={name} ></input>
    }
    function handleClick() {
        if(isEdit){
            setName(document.getElementById('playerName').value);
        }
        return setEdit(isEdit=>!isEdit);   
    }

    return (
        <li>
            {text}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>Edit</button>
        </li>
    )
}

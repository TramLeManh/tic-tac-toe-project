import React, { useState } from "react";
export default function Player({ playerName, symbol, isActive }) {
    const [name, setName] = useState(playerName);
    const [isEdit, setEdit] = useState(false);
    const [gameTurn,setgameTurn] = useState([]);
    function handleChange(event) {
        setName(event.target.value);
    }
    return (
        <>
            {isEdit ? (
                <input
                    className="player-name font-[1000] bg-sky-500/10"
                    type="text"
                    required
                    defaultValue={name}
                    autoFocus
                    onChange={handleChange}
                />
            ) : (
                <li className={isActive ? "active" : undefined}>
                    <span className="player-name font-[500]">{name}</span>
                </li>
            )}
            <span className="player-symbol">{symbol}</span>
            <button onClick={() => setEdit((edit) => !edit)}>
                {isEdit ? "Save" : "Edit"}
            </button>
        </>
    );
}

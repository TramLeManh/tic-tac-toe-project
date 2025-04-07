import React, { useState } from "react";
export default function Player({ playerName, symbol }) {
    const [name, setName] = useState(playerName);
    const [isEdit, setEdit] = useState(false);
    function handleChange(event) {
        setName(event.target.value);
    }
    return (
        <li>
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
                <span className="player-name font-[1000]">{name}</span>
            )}
            <span className="player-symbol">{symbol}</span>
            <button onClick={() => setEdit(edit=>!edit)}>{isEdit? "Save": "Edit"}</button>
        </li>
    );
}

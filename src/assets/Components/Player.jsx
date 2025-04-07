import React, { useState } from "react";

export default function Player({ playerName, symbol }) {
    const [name, setName] = useState(playerName);
    const [isEdit, setEdit] = useState(false);
    function handleBlur(event) {
        setName(event.target.value);
        setEdit(false);
    }
    return (
        <li>
            {isEdit ? (
                <input
                    type="text"
                    required
                    defaultValue={name}
                    autoFocus
                    onBlur={handleBlur}
                />
            ) : (
                <span className="player-name font-[1000] bg-sky-500/10">{name}</span>
            )}
            <span className="player-symbol">{symbol}</span>
            <button onClick={() => setEdit(edit=>!edit)}>{isEdit? "Save": "Edit"}</button>
        </li>
    );
}

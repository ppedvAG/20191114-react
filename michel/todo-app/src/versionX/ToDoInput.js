import React, { useState } from 'react';

export default function ToDoInput(props) {

    const [inputTitle, setTitle] = useState("");
    const [inputRating, setRating] = useState(0);

    return (
        <div >
            <input placeholder="Neuer Eintrag" value={inputTitle} onChange={event => setTitle(event.target.value)} />
            <input type="number" value={inputRating} onChange={event => setRating(event.target.value)} />
            <input type="submit" value="Hinzufügen" onClick={() => props.onClick(inputTitle, inputRating)} disabled={inputTitle === null || inputTitle === ""} />
        </div>
    )
}
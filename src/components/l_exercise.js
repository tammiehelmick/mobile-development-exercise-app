import React from "react"
import { useState } from 'react'

export default function LapsExercise({itemId, itemName, itemQty, itemDescription}) {
    let [dateTime, setDateTime] = useState([]);
    let exerciseId = `exercise-item-${itemId}`

    const buttonClick = () => {
        setDateTime([...dateTime, new Date().toString()]);
    };
        return (
            <div className="exercise-item" id={exerciseId}>
                <h2>Laps</h2>
                <p>{itemName}</p>
                <p>{itemDescription}</p>
                <button onClick={buttonClick}>Log A Lap</button>
                <p>Laps:</p>
                <ol>
                {dateTime.map((item) => <li key={item.id}>{item}</li>)}
                </ol>
            </div>
        )
}


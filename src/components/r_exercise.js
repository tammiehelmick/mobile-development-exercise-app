import React from "react"
import { useState } from 'react'

export default function RepetitionExercise({itemId, itemName, itemQty, itemDescription}) {
    let [qty, setQty] = useState(10)
    let exerciseId = `exercise-item-${itemId}`
        return (
            <div className="exercise-item" id={exerciseId}>
                <h2>Repetition</h2>
                <p>{itemName}</p>
                <p>{itemDescription}</p>
                <p>Reps: {qty}</p>
                <button onClick={()=>setQty(qty+1)}>Increase</button><button onClick={()=>setQty(qty-1)}>Decrease</button>
            </div>
        )
}



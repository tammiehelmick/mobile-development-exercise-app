import { useCallback, useEffect, useState } from 'react'
//Timer is from the instructor video, used with Professor Murray's permission
let currentTimer = 0
export default function DurationExercise({itemId, itemName, itemQty, itemDescription}) {
    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let updateTimer = useCallback(() => { 
        if(running) {
            setTimer((timer) => timer+10)
        }
    }, [running])
    useEffect(() => {
        currentTimer = setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
        // console. Log(timer)
    }, [running])
    let startStop = useCallback(() => {
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])
    let reset = useCallback(() => {
        setTimer(0)
    })
    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60 )).toString().padStart(2, "0")
    let mills = (timer % 1000).toString().padStart(3, "0")

    let exerciseId = `exercise-item-${itemId}`
        return (<>
        <div className="exercise-item" id={exerciseId}>
            <h2>Duration</h2>
            <p>{itemName}</p>
            <p>{itemDescription}</p>
            <p style={{fontSize: "2em", margin:"auto", fontfamily: "monospace"}}>Timer: {mins}:{secs}.{mills}</p>
            <button onClick={startStop}> {running ? "Pause" : "Start"}</button>
            <button onClick={()=> {reset()}}>Reset</button>
        </div>
        </>
        )
}
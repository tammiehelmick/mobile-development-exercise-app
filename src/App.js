import './App.css'
import { useState } from 'react'
import RepetitionExercise from './components/r_exercise.js'
import DurationExercise from './components/d_exercise.js'

let curId = 0

function App() {
  let exerciseData = [
  {
    itemId: 1,
    itemName: "Push Ups",
    itemQty: 1,
    itemDescription: "Raise and lower your body using the arms"
  },
  {
    itemId: 2,
    itemName: "Running",
    itemQty: 1,
    itemDescription: "Running in humans is associated with improved health and life expectancy"
  },
  {
    itemId: 3,
    itemName: "Plank",
    itemQty: 1,
    itemDescription: "A bodyweight exercise involving holding the trunk part of your body in a straight line off the ground"
  },
  {
    itemId: 4,
    itemName: "Cycling",
    itemQty: 1,
    itemDescription: "Riding a bike for aerobic activity"
  }
]
  let menuItemInit = []
    for (let i = 0; i < exerciseData.length; i++) {
      menuItemInit.push({...exerciseData[i], itemId:i})
      curId=i
    }

  const LIST_STATE = 0
  const REPETITION = 1
  const DURATION = 2

  let [menuItems, setMenuItems] = useState(menuItemInit)
  let [curMenuItemId, setCurMenuItemId] = useState(0)
  let [curScreen, setCurScreen] = useState(LIST_STATE)
  let screen
  let curMenuItem = menuItems.find(item => item.itemId === curMenuItemId)
  if(curScreen === LIST_STATE) {
    screen = <>
    <h1>Exercises</h1>
      {menuItems.map( (menu)=><>
      <p>{menu.itemName}</p>
      <button onClick={()=>{
      setCurScreen(REPETITION)
      setCurMenuItemId(menu.itemId)}
      }>Repetition</button>
      <button onClick={()=>{
      setCurScreen(DURATION)
      setCurMenuItemId(menu.itemId)}
      }>Duration</button>
       </>
      )}
      </>

  }
  else if (curScreen === REPETITION) {
    screen = <>
    <button onClick={()=>setCurScreen(LIST_STATE)}>Back to Home</button>
    <RepetitionExercise key={curMenuItem.itemId} {...curMenuItem}/>
    </>
  }
  else if (curScreen === DURATION) {
    screen = <>
    <button onClick={()=>setCurScreen(LIST_STATE)}>Back to Home</button>
    <DurationExercise key={curMenuItem.itemId} {...curMenuItem}/>
    </>
  }
  return (
    <div className="App">
        {screen}
    </div>
  );
}

export default App;

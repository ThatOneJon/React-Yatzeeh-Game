import React from 'react'
import Landing from "./components/landing"
import Dice from "./components/Dice"
import ScoreCard from "./components/scoreCard"

function App() {
   const [gameInProgress, setGameInProgress] = React.useState(true)
   const [rollDice, setRollDice] = React.useState(newDice())
   const [diceValues, setDiceValues] = React.useState([{
      holding: false,
      value: 0,

   }])


   React.useEffect(() => {
      const newVal = rollDice.map((die) => ({holding: false, value: die}) )
      setDiceValues(newVal)

   },[rollDice])


   function newDice(){
      let i = 0
      let nums = []
      while( i < 5) {
         nums.push(Math.ceil(Math.random() * 6 ))
         i++

      }
      return nums
   }


   function toggleHold() {
      setDiceValues(prev => ({...prev, holding : !prev}))
      console.log("He")
   }


   return (
       !gameInProgress ? <Landing start ={ () => setGameInProgress() } />     
       : 
       <div className = "playScreen">
            <h1>Yatzeeh!</h1>
            <Dice nums ={diceValues} roll = {() => setRollDice(newDice()) } handleClick = {() => toggleHold ()}  />
            <ScoreCard />
      </div>
   )
}

export default App;

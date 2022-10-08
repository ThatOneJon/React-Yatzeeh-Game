import React from 'react'
import Landing from "./components/landing"
import Dice from "./components/Dice"

function App() {
   const [gameInProgress, setGameInProgress] = React.useState(true)
   const [rollDice, setRollDice] = React.useState(newDice())


   function newDice(){
      let i = 0
      let nums = []
      while( i < 5) {
         nums.push(Math.ceil(Math.random() * 6 ))
         i++

      }
      return nums
   }




   return (
       !gameInProgress ? <Landing start ={ () => setGameInProgress() } />     
       : 
       <div className = "playScreen">
         <Dice nums ={rollDice} roll = {() => setRollDice(newDice()) } />
      </div>
   )
}

export default App;

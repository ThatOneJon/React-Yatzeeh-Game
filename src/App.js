import React from 'react'
import Landing from "./components/landing"
import Dice from "./components/Dice"
import ScoreCard from "./components/scoreCard"

function App() {
   const [rounds, setRounds] = React.useState({round:0, data: {rollcounter: 0  }})
   const [gameInProgress, setGameInProgress] = React.useState(true)
   const [rollDice, setRollDice] = React.useState(newDice())
   const [diceValues, setDiceValues] = React.useState([{
      holding: false,
      value: 0,
      id: ""

   }])

   React.useEffect(() => {
      let ind = 0
      setDiceValues(rollDice.map((die) => (ind++, {id: ind, holding: false, value: die})))
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


   function toggleHold(event) {
      setDiceValues(prev => prev.map(one => one.id == event.target.id ? {...one, holding : !one.holding} : one))
   }


   function rollDiceHold(){
      setRounds(prev => ({round: prev.round , data:{rollcounter: prev.data.rollcounter + 1 }}))

      setDiceValues(previ => {
         return (previ.map(one => {
              return( one.holding ? one : {...one, value: Math.ceil(Math.random() * 6)} )
            }
         ))
      })
   }
   return (
       !gameInProgress ? <Landing start ={ () => setGameInProgress() } />     
       : 
       <div className = "playScreen">
            <h1>Yatzeeh!</h1>
            <Dice nums ={diceValues} roll = {() => rollDiceHold()} handleClick = {toggleHold}  />
            <ScoreCard dice = {diceValues} />
      </div>
   )
}

export default App;

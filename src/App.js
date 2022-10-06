import React from 'react'
import Landing from "./components/landing"

function App() {
   const [gameInProgress, setGameInProgress] = React.useState(false)



   return (
       !gameInProgress ? <Landing start ={ () => setGameInProgress() } /> : console.log("hello")
   )
}

export default App;

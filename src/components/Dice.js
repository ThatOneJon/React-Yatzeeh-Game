import React from "react"





export default function Dice(props) {
    let id = 0
    return(
    <div className ="allDice">
        <div className="containerDice">
        { props.nums.map((num) => {
                id++
            return (
                    <div key = {id} className="dice">
                        <h1>{num}</h1>
                    </div>
                )
            })}
        </div>
        <button onClick = {props.roll} className = "diceRoll">Roll!</button>
    </div>
    
    )
}
import React from "react"





export default function Dice(props) {
    let id = 0
    return(
    <div className ="allDice">
        <div className="containerDice">
        {props.nums.map((num) => {
                id++
            return (

              <div key = {id} className="dice" onClick = { event => props.handleClick(event) } id = {num.id} style = {num.holding ? {backgroundColor:"lightgreen"} : null} >
                        <h1>{num.value}</h1>
                    </div>
                )
            })}
        </div>
        <button onClick = {props.roll} className = "diceRoll">Roll!</button>
    </div>
    
    )
}
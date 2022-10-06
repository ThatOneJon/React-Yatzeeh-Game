import React from "react"


export default function Landing(props) {
    return(
        <div>
            <h1>Welcome to yatzeeh!</h1>
            <button onClick = {props.start}>Start Game!</button>
        </div>
    )
}
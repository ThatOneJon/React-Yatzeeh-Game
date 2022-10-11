import React from "react"




export default function ScoreCard(props){

    const ones = props.dice.filter(x => x.value ===1)
    const onesArray = []
        for( let i = 0; i < ones.length; i++){
            ones[i].holding && onesArray.push(<i className="bi bi-dice-1" key = {i+1}></i>)
        }
        

    const two = props.dice.filter(x => x.value === 2)
    const twoArray = []
        for( let i = 0; i < two.length; i++){
            two[i].holding && twoArray.push(<i className="bi bi-dice-2" key = {i+1}></i>)
        }

    const three = props.dice.filter(x => x.value === 3)
    const threeArray = []
        for( let i = 0; i < three.length; i++){
            three[i].holding && threeArray.push(<i className="bi bi-dice-3" key = {i+1}></i>)
        }

    const four = props.dice.filter(x => x.value === 4)
    const fourArray = []
        for( let i = 0; i < four.length; i++){
            four[i].holding && fourArray.push(<i className="bi bi-dice-4" key = {i+1}></i>)
        }

    const five = props.dice.filter(x => x.value === 5)
    const fiveArray = []
        for( let i = 0; i < five.length; i++){
            five[i].holding && fiveArray.push(<i className="bi bi-dice-5" key = {i+1}></i>)
        }

    const six = props.dice.filter(x => x.value === 6)
    const sixArray = []
        for( let i = 0; i < six.length; i++){
            six[i].holding && sixArray.push(<i className="bi bi-dice-6" key = {i+1}></i>)
        }


    return(
        <div className = "scoreCards">
            <div className = "scoreCard"> 
                <h2>1<br></br><i className="bi bi-dice-1"></i></h2> <div className="amountheld">{onesArray}   Points: {1 * onesArray.length} </div>
                <hr></hr>
                <h2>2<br></br><i className="bi bi-dice-2"></i></h2> <div className="amountheld">{twoArray}   Points:  {2 * twoArray.length} </div>
                <hr></hr>
                <h2>3<br></br><i className="bi bi-dice-3"></i></h2> <div className="amountheld">{threeArray}   Points: {3 * threeArray.length} </div>
                <hr></hr>
                <h2>4<br></br><i className="bi bi-dice-4"></i></h2> <div className="amountheld">{fourArray}   Points: {4 * fourArray.length} </div>
                <hr></hr>
                <h2>5<br></br><i className="bi bi-dice-5"></i></h2> <div className="amountheld">{fiveArray}   Points: {5 * fiveArray.length} </div>
                <hr></hr>
                <h2>6<br></br><i className="bi bi-dice-6"></i></h2> <div className="amountheld">{sixArray}   Points: {6 * sixArray.length} </div>
                <hr></hr>
            </div>
            <div className = "scoreCard"> 
            <h2>Three of a Kind: </h2> 
                <hr></hr>
                <h2>Four of a Kind: </h2> 
                <hr></hr>
                <h2>Full house: </h2> 
                <hr></hr>
                <h2>Small straight: </h2> 
                <hr></hr>
                <h2>Large straight: </h2> 
                <hr></hr>
                <h2>Yahtzee: </h2> 
                <hr></hr>
                <h2>Chance: </h2> 
            </div>
       </div>
    )
}
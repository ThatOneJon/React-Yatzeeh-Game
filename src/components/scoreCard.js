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
    let chancePoints = 0
    let chanceIcons = []
    let fullHouse = []
    let threeKindValue = 0
    let numberDice = ""
    let largeStraight = false
    let smallStraight = false

    const heldDice = props.dice.filter(x => x.holding === true)
        if(heldDice.length === 3){
                heldDice.every(x => x.value === heldDice[0].value ? true : false) ? threeKindValue = heldDice[0].value * 3 : threeKindValue = 0
                numberDice = `bi bi-dice-${String(heldDice[0].value)}`

            }else if(heldDice.length === 4){
                heldDice.every(x => x.value === heldDice[0].value ? true : false) ? threeKindValue = heldDice[0].value * 4 : threeKindValue = 0
                numberDice = `bi bi-dice-${String(heldDice[0].value)}`
                
                let values = heldDice.map(val => val.value)
                let vals = values.sort()
                for(let i = vals.length-1; i > 0; i--){
                     vals[i] === vals[i-1]+1  ? smallStraight = true : smallStraight = false
                }


            }else if (heldDice.length === 5){
                heldDice.every(x => x.value === heldDice[0].value ? true : false) ? threeKindValue = 50 : threeKindValue = 0

                let values = heldDice.map(val => val.value)
                const toFindDuplicates = values.filter((item, index) => values.indexOf(item) !== index)
                    if (toFindDuplicates.length === 3){
                        toFindDuplicates.sort()
                        
                        toFindDuplicates[0] === toFindDuplicates[1] ? fullHouse.push(toFindDuplicates[0], toFindDuplicates[0], toFindDuplicates[0], toFindDuplicates[2], toFindDuplicates[2])
                        : 
                        fullHouse.push(toFindDuplicates[2], toFindDuplicates[2], toFindDuplicates[2], toFindDuplicates[0], toFindDuplicates[0])
                    }

                for(let val of values){
                    chancePoints += val
                    chanceIcons.push(<i className={`bi bi-dice-${String(val)}`}> </i>)
                }

                   let vals = values.sort()
                   for(let i = vals.length-1; i > 0; i--){
                        vals[i] === vals[i-1]+1  ? largeStraight = true : largeStraight = false
                   }
            }
            
        const fullHouseIcons = fullHouse.map(die => {return (<i className = {`bi bi-dice-${String(die)}`}> </i> )}) 

    
        

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
            <h2>Three of a Kind : </h2> <h1> <i className= {heldDice.every(x => x.value === heldDice[0].value && heldDice.length === 3) ? numberDice : ""}></i> </h1> <div className="amountheld"> Points:  {heldDice.length === 3 && threeKindValue} </div>
                <hr></hr>
                <h2>Four of a Kind: </h2><h1> <i className= {heldDice.every(x => x.value === heldDice[0].value && heldDice.length === 4) ? numberDice : ""}></i> </h1> <div className="amountheld"> Points:  {heldDice.length === 4 && threeKindValue} </div>
                <hr></hr>
                <h2>Full house: </h2><h1>  {fullHouseIcons} </h1><div className="amountheld"> Points:  {fullHouse.length === 5 && "25"} </div>
                <hr></hr>
                <h2>Small straight: </h2><h1> {smallStraight && heldDice.map( y => <i className= {`bi bi-dice-${y.value}`}> </i> )} </h1> <div className="amountheld"> {smallStraight && "Points:  30"} </div>
                <hr></hr>
                <h2>Large straight: </h2><h1> { largeStraight && heldDice.map(oneD => <i className= {`bi bi-dice-${oneD.value}`}> </i>)}</h1> <div className="amountheld"> {largeStraight && "Points:  40" }</div>
                <hr></hr>
                <h2>Yahtzee: </h2><h1> { (heldDice.length === 5 && threeKindValue === 50) && <i className = {`bi bi-dice-${String(heldDice[0].value)}`}></i> } </h1> <div className="amountheld"> Points:  { heldDice.length === 5 && threeKindValue} </div>
                <hr></hr>
                <h2>Chance: </h2><h1> {chanceIcons} </h1> <div className="amountheld"> Points:  {chancePoints} </div>
            </div>
       </div>
    )
}
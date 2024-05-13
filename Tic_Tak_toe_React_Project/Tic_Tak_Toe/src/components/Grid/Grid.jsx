
import Card from "../Card/Card";
import {useState} from "react"

import "./Grid.css"
import isWinner from "../../Helpers/checkWinner";


function Grid({numberOfCard}) {

const [board , setBoard] = useState(Array(numberOfCard).fill(""));
const [turn , setTurn] = useState(true)  //  true => 0  , false => x.
const [winner , setWinner] = useState(null)


function Play(index){

  if(turn == true){
    board[index] = 'o'
  }

  else if(turn == false){
    board[index] = 'x'
  }

  // check winner
  const win = isWinner(board , turn ? 'o' : 'x')
  if(win){
     setWinner(win)
    
  }

  // one new array is created and unpack the board element. 
    setBoard([...board])
    setTurn(!turn)
}


    return(

      <div className="grid-Wapper">

        {
          winner && (
          <>  
            <h1 className="turn-highlight"> Winner is {winner}</h1>
            <button className="reset"> Reset Game</button>
          </>

          )
        }


        <h1 className="turn-highlight"> Current turn : {(turn ? 'o' : 'x')} </h1> {/* turn == true => 'o'  , turn == flase => 'x'*/}
      
      <div className="Grid">
        {board.map( (el , idx) => <Card key={idx}  onPlay={Play}      player={el}     index={idx}  gameEnd={winner ? true : false}    />)}
                                                {/*is a function*/}  {/*inside'o','x'  => index kiss pai click kiya hai*/}
      </div>

      </div>
    )
}

export default Grid
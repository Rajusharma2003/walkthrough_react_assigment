
//step 2.?
/** yaha pai ek variable bana hai joo ki icon hai or if condition sai hum check kar rahe hai 
 * ki icon kai ander kay hai 'o' yaa 'x' uss heshab sai hum icon ki value set kar rahe hai.
 */

import Icon from "../Icon/Icon";
import './Card.css';

function Card({ gameEnd , player  , onPlay , index}) {

    let icon = <Icon/>

    if( player == "o"){
        icon = <Icon name="circle"/>
    }
    else if(player == "x"){
        icon = <Icon name="cross"/>
    }

    return(

        <div className="Card" onClick={() => !gameEnd && player==""  && onPlay(index)}>
         {icon}               {/*game is not end*/} {/*player is equal to blank string , onPlay index kai saath call hoo rha hai*/}
        </div>

    )

}

export default Card


// import inside the grid.
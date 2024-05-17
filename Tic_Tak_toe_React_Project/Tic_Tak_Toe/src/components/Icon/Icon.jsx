
// step 1.

import{ FaPen, FaRegCircle, FaTimes } from "react-icons/fa"

function Icon({name}){   // props is destuctured (props.name)  

    if(name == "circle"){
        return <FaRegCircle/>
    }
   else if( name == "cross"){
        return <FaTimes/>
    }
    else {
        return <FaPen/>
    }

}


export default Icon

// import inside the card
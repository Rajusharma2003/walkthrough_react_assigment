// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './React_assignment'

// function App() {

//   return (
//     <>
      
//         <div>
//             <h1>hello</h1>
//         <Person name ="kumarVishwas"  age = "45"/>

//         </div>

//     </>
//   )
// }
// export default App;



// Ques no 2.

// import { useState } from 'react';
// import Button from './React_assignment';

// function App() {
//   const [displayText, setDisplayText] = useState('');

//   const handleClick = () => {
//     setDisplayText('Button clicked!');
//   };

//   return (
//     <>
//       <h1>hello</h1>
//       <Button text="click me !" onClick={handleClick} />
//       <p>{displayText}</p>
//     </>
//   );
// }

// export default App;



// Ques no 3.

// import Title from './React_assignment'

// function App(){

//   return(
//   <>
//   <Title title = "this is a title"/>
//   </>

//   ) 
// }

// export default App



// Ques no 4.

import List from './React_assignment'


function App(){

  return(
    <List item = {[ 'apple' , 'mango' , 'banana']}/>
  )

}


export default App
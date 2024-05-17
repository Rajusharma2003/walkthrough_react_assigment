
// Ques no 1.

// function Person(props) {
//     let title = 'this is a working'
//     return (

//     <>

//     <h1>{title}</h1>
//     <p> My Name is {props.name} and I am {props.age} year old</p>

//     </>

//     )
// }
// export default Person




// Ques no 2. 

// function Button(props) {
    

//      return(

//         // Create a button when it click show the text.and text is import from App.jsx.
//         <button onClick={props.onClick}>
//             {props.text}
//         </button>

//      )

     
// }

// export default Button




// Ques no 3.

// function Title(props) {
//     return  <h1>{props.title}</h1>
// }

// export default Title



// Ques no 4.

function List(props){

    const listItems = props.item.map((item) => 

    <li key={item}> {item}</li>

    ) 

    return <ul> {listItems}</ul>

}


export default List

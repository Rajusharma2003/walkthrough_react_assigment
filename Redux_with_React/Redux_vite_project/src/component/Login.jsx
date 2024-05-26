// import { useState , useContext } from "react"
// import UseContext from "../context/useContext";


// function Login () {


//     const [username ,setUserName] = useState('');
//     const [password ,setPassword] = useState('');

//     const {setUser} = useContext(UseContext);

//     const changeHandle = (e) => {
//          e.preventDefault()
//          setUser( { username , password})
//     }


//     return (

//         <div>
        
//         <h1> Login Page</h1>
//         <input
//          type="text"
//          value={username}
//          onChange={(e) => setUserName(e.target.value) }
//          placeholder=" Enter your username"
//          />

//         <input
//          type="text"
//          value={password}
//          onChange={(e) => setPassword(e.target.value) }
//          placeholder=" Enter your password"
//          />

//         <button onClick={changeHandle}>submit</button>
//         </div>

       
//     )

// }


// export default Login


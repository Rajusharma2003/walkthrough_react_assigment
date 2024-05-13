import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Avatar from './Avatar'

function App() {

  return (
    <>
  
  <Avatar 
  src="https://www.shutterstock.com/image-photo/happy-puppy-welsh-corgi-14-600nw-2270841247.jpg"
  width="200px"
  height="200px"
  />

<Avatar 
  src="https://thumbs.dreamstime.com/b/golden-retriever-dog-sitting-white-24750790.jpg"
  width="200px"
  height="200px"
  />

  
<Avatar
  src="https://www.shutterstock.com/image-photo/happy-puppy-welsh-corgi-14-600nw-2270841247.jpg"
  width="200px"
  height="200px"
  >
    <span>hello i am children</span>
    </Avatar>

    </>
  )
}

export default App

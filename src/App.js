import React,{useState,useEffect} from 'react'
import TextArea from './components/TextArea'
import Navbar from './components/Navbar'

const App = () => {

  const localNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes,setNotes]=useState(localNotes)


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  return (
    <div>
      <Navbar notes={notes}/>
      <TextArea notes={notes} setNotes={setNotes}/>
      
    </div>
  )
}

export default App

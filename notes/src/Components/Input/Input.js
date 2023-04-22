import { useState } from "react"
import './Input.css'
export default function Input() {
 const [showInput, setShowInput] = useState(false)
 const [notes, setNotes] = useState([])
 const [name, setName] = useState('')



 const obj = { name: name, id: Date.now() }


 const showInputHandler = () => {
  setShowInput(true)
 }


 const addNewNote = (name) => {
  setNotes((prevState) => [...prevState, obj])
  setName('')
  setShowInput(false)
 }

 return (
  <div>
   <label className='label' onClick={showInputHandler}>Add new note</label>
   {showInput && <div>
    <input className='input' type='text' onChange={(e) => setName(e.target.value)} value={name} />
    <button className='button' onClick={addNewNote}>Add</button>

   </div>}
   <div className='notes'>{notes.map((each) => { return <div key={each.id}>{each.name}</div> })}</div>
  </div>
 )
}

import { useState } from "react"
import './Notes.css'
export default function Notes() {
 const [showInput, setShowInput] = useState(false)
 const [notes, setNotes] = useState([])
 const [name, setName] = useState('')

 console.log(notes)


 const obj = { name: name, id: Date.now() }


 const showInputHandler = () => {
  setShowInput(true)
 }


 const addNewNote = () => {
  if (name.trim() === '') {
   return
  }
  setNotes((prevState) => [...prevState, obj])
  setName('')
  setShowInput(false)
 }



 return (
  <div>
   <label className='label' onClick={showInputHandler}>Add new note +</label>
   {showInput && <div>
    <input className='input' type='text' onChange={(e) => setName(e.target.value)} value={name} />
    <button className='button' onClick={addNewNote}>Add</button>
   </div>}
   <div className="wrapper-div" style={{
    display: notes.length === 0 ? 'none' : 'block'
   }}  >{notes.map((each) => { return <div className="notes" key={each.id}> {each.name}</div> })}</div>
  </div>
 )
}

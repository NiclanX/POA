import React, { useEffect, useState } from 'react'

export const Notes = () => {

    
const [notes, setNotes] = useState(null);

useEffect(()=> {
    fetch('http://localhost:8000/notes')
    .then(res => {
       return res.json()        
    })
    .then( (data)=> {
        setNotes(data)
        console.log(data)
    })
    
},[])

  return (
    <>
    <div className="headers">
        <h1 className='notes-head'>All Notes</h1>
        <button>Create Note!</button>
    </div>
    {notes && <div className="notes">
        
        {notes.map((note) => {
          return (  
            <div className="note-preview" key={note.id}>
                <h2>{note.title}</h2>
                <br />
                <p>{note.body}</p>
                <button onClick={()=>{handleDelete(note.id)}}>Delete Note</button>
            </div>)            
        })}
    </div>}    
    </>    
  )
}

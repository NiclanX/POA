import React, { useState } from 'react'

export const Notes = () => {

    
const [notes, setNotes] = useState([
    {title: 'The Dynamic Bomboclaat', body: 'Lorem fam', id: 1},
    {title: 'The highest level of Fuckery', body: 'Lorem fam', id: 2},
    {title: 'BLOUSE AND SKIRT', body: 'Lorem fam', id: 3},
    {title: 'I should be asleep', body: 'Lorem fam', id: 4},
    {title: 'Oh fucking really', body: 'Lorem fam', id: 5},
    {title: 'Jah Jah God lol', body: 'Lorem fam', id: 6}
    
]);

  return (
    <>
    <div className="headers">
        <h1 className='notes-head'>All Notes</h1>
        <button>Create Note!</button>
    </div>
    <div className="notes">
        
        {notes.map((note) => {
          return (  
            <div className="note-preview">
                <h2>{note.title}</h2>
                <br />
                <p>{note.body}</p>
            </div>)
            
        })}
    </div>

    
    </>
    
  )
}

import React, { useState } from 'react'

export const Notes = () => {

    
const [notes, setNotes] = useState([
    {title: 'something', body: 'Lorem fam', id: 1},
    {title: 'something1', body: 'Lorem fam', id: 2},
    {title: 'something2', body: 'Lorem fam', id: 3}
])

  return (
    <>
    <div className="headers">
        <h1 className='notes-head'>All Notes</h1>
        <button>Create Note!</button>
    </div>
    <div className="notes">
        {notes.map((note) => {
            console.log(note)
            
        })}
    </div>
    </>
    
  )
}

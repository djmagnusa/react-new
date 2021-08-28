import React from 'react';

const Note = ({ note, removeNote }) => {

    // useEffect(() => { //this only run once when the component is just mounted as we have prvided an empty list as second parameter
    //     console.log('Setting up effect!')

    //     return () => {               //this will run when this 'Note' is removed
    //         console.log('Cleaning up effect!')
    //     }

    // }, [])


    return (
      <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
      </div>
    )
}

export {Note as default}
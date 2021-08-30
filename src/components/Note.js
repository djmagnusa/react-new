import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';


const Note = ({ note }) => {

    const { dispatch } = useContext(NotesContext)
    const position = useMousePosition()

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
          <p>{position.x}, {position.y}</p>
          <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}>x</button>
      </div>
    )
}

export {Note as default}
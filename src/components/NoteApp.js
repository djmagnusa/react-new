import React, {useState, useEffect, useReducer } from 'react';
import notesReducer  from '../reducers/notes';
// import Note from './Note'
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () => {

    // const notesData = JSON.parse(localStorage.getItem('notes')) //t parse some json into javascript array
    //const [notes, setNotes] = useState([]) //notes is a variable name for state
    // const [notes, setNotes] = useState(notesData || [])
    const [notes, dispatch] = useReducer(notesReducer, []) //notes is the state and dispatch which is going to allow us to dispatch
                                                          // the second argument in useReducer is initial state
    //const [notes, setNotes] = useState([])
    // const [title, setTitle] = useState('') //title is a variable name for stat 
    // const [body, setBody] = useState('')

    // const addNote = (e) => {
    //     e.preventDefault()
    //     dispatch({
    //        type: 'ADD_NOTE',
    //        title,
    //        body
    //     })
    //     // setNotes([
    //     //   ...notes, //to merge previous notes
    //     //   { title, body } // adding the new note
    //     // ])
    //     setTitle('') //clearing the form after user submits the data
    //     setBody('')
    // }

    const removeNote = (title) => {
       // setNotes(notes.filter((note) => note.title !== title ))

       dispatch({
          type: 'REMOVE_NOTE',
          title
       })

    }

    useEffect(() => {  //this will be fired only once when the page is refreshed so that before refreshing it store the data into localStorage
        const notes = JSON.parse(localStorage.getItem('notes'))

        if (notes) {
           // setNotes(notesData)
            dispatch({ type: 'POPULATE_NOTES', notes: notes })
        }
    }, [])

    

    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
          <h1>Notes</h1>
                <NoteList notes={notes} removeNote={removeNote} />
                <AddNoteForm dispatch={dispatch}/>
        
        
        </div>
    )
}

export { NoteApp as default }
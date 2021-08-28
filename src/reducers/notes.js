const notesReducer = (state,action) => { //state is an array of notes and action contains information about the action
    switch(action.type) {

        case 'POPULATE_NOTES':

            return action.notes

        case 'ADD_NOTE':
            return [
              ...state, //copying all of the existing notes into the array
              { title: action.title, body: action.body}
            ]

        case 'REMOVE_NOTE':
            return  state.filter((note) => note.title !== action.title )

        default:
            return state


    }
}

export { notesReducer as default }

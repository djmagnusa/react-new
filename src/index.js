import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NoteApp from './components/NoteApp';

// import notesReducer from './reducers/notes';
// import Note from './components/Note'




// const App = (props) => {

//     const [state, setState] = useState({
//         count: props.count,
//         text: ''
//     })

//     return (
//       <div>
//           <p>The current {state.text || 'count'} is {state.count}</p> 
//           <button onClick={() => setState({ count: state.count-1 })}>-1</button>
//           <button onClick={() => setState({ count: props.count })}>reset</button>
//           <button onClick={() => setState({ count: state.count+1 })}>+1</button>
//           <input value={state.text} onChange={(e) => setState({ text: e.target.value })} />
//       </div>
//     )

// }


// const App = (props) => {

//     const [count, setCount] = useState(props.count) //with useState our piece of state can be anything like string or boolean
//                 //useState returns an array with current state value and a function we can call in order to update the state
//     const [text, setText] = useState('')

//     useEffect(() => {
//       console.log('This should only run once')
//     }, [])

//     useEffect(() => {
//         console.log('useEffect ran') //its going to run once right away and after changes to your component state or props
//         document.title = count//title of the web page
//     }, [count]) //we could list out specific things like only run this effect when count changes

//     // const increment = () => {
//     //   setCount(count + 1)
//     // }

//     //if no text use 'count'
//     return (
//         <div>
//             <p>The current {text || 'count'} is {count}</p> 
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <button onClick={() => setCount(props.count)}>reset</button>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <input value={text} onChange={(e) => setText(e.target.value)} />
//         </div>
//     ) 
// }

// App.defaultProps = {
//   count: 0
// }



ReactDOM.render(
  <React.StrictMode>
    {/* <App count={2}/> */}
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

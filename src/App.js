import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />

        <h2>{new Date().toLocaleDateString()} </h2>

      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e) => setTodo(e.target.value)} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])}></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {

          return (

            < div className="todo" >
              <div className="left">
                <input type="checkbox" onChange={((e) => {
                  setTodos(toDos.filter(obj => {
                    if (obj.id === value.id) {
                      obj.status = e.target.checked
                    }
                    return obj
                  }))

                })}
                  value={value.status} name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => {
                  let temp = []
                  toDos.map(obj => {
                    if (obj.id !== value.id) {
                      temp.push(obj)
                    } return null
                  })
                  setTodos([...temp])
                }}></i>
              </div>
            </div>
          )
        })
        }
        <div className='WorkDone'>
          <h1 className='WorkText'>WORK DONE</h1>
          <br />
          <h2 className='DoneDate'>{new Date().toLocaleDateString()}</h2>
          <br />
          <div className='DoneList'>
            {toDos.map((obj) => {
              if (obj.status) {
                return <h1 className='DoneText'>{obj.text}</h1>;
              }
              return null;
            })}
          </div>
        </div>

      </div>

    </div >
  );
}

export default App;
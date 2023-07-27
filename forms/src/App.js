
import { useState } from 'react';
import './App.css';

function App() {
  const [inputfields,setInputfields]=useState([{name :"",age: ""}])
  const handleFormChange=(index,event)=>{
    let data = [...inputfields]
     data[index][event.target.name] = event.target.value;
     setInputfields(data);
  }
  const addFields=()=>{
    let newfields={name:"",age:""}
    setInputfields([...inputfields,newfields])
    console.log(newfields)
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(inputfields)
}
const removeFields = (index) => {
  let data = [...inputfields];
  data.splice(index, 1)
  setInputfields(data)
}
  return (
    <div className="App">
      <h2>DynamicForms</h2>
      <form onSubmit={submit}>
        {
          inputfields.map((input,index)=>{
             return(
      <div key={index}>
               <input name='name'
                placeholder='name'
                 value={input.name}
                 onChange={event=>handleFormChange(index,event)}
                 
                 />
               <input name='age' 
               placeholder='age' 
               value={input.age}
               onChange={event=>handleFormChange(index,event)}
               />
               <button onClick={addFields}>Add More..</button>
               <button onClick={submit}>Submit</button> 
               <button onClick={()=>removeFields(index)}>Remove</button> 

              </div>
             )
          })
        }
         

        </form>
      </div>
  );
}

export default App;

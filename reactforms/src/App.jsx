import { useState } from 'react';
import './App.css';
import FormInPut from './Componenets/FormInPut2';
const App = () => {
  const [values, setValues] = useState({
    username : "",
    email : "",
    birthday : "",
    password : "",
    confirmPassword : "",
  });
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInPut name= "username" placeholder="Username"  />
        <button >Submit</button>
      </form>
    </div>
  );
}
export default App;

// console.log("re-rendered");
// const handleSubmit =(e) => {
//   e.preventDefault();
//   const data = new FormData(e.target)
//   console.log(Object.fromEntries(data.entries()));
// };
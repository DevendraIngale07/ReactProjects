import { useState, useRef } from 'react';
import './App.css';
import FormInPut from './Componenets/FormInPut';
function App() {
  // const [username, setUsername] = useState("")
  const usernameRef = useRef()

  console.log(usernameRef);

  console.log("re-rendered");
  return (
    <div className="App">
      <form>
        <FormInPut refer={usernameRef} placeholder="Username"  />
        <FormInPut placeholder="Email"/>
        <FormInPut placeholder="Full Name"/>
        <FormInPut placeholder="Sth else"/>
      </form>
    </div>
  );
}
export default App;

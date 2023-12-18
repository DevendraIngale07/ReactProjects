

import Card from "./Components/Card";
import "./App.css";

function App() {
  

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Test Props
      </h1>
      <Card username='DELL' btnText="visit me" />
      <Card username='Apple' btnText="click me" />
    </>
  );
}

export default App;

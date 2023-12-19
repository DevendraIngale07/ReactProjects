import { useState } from "react"
import "./ForminPut.css"

const FormInPut = (props) => {
  
  return (
    <div className='formInPut'>
      {/* <label>User Name</label> */}
      <input placeholder={props.placeholder}
      onClick={(e) => props.setUsername(e.target.value)}/>

    </div>
  )
}

export default FormInPut
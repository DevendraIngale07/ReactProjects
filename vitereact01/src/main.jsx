import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       traget: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit 
  Google</a>
)
const anotherUser = "react Elements"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
  reactElement  


)

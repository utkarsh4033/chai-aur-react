import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// }; 


const anotherUser = "chai or code"
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
    "click here to visit google", 

    anotherUser
  
)



createRoot(document.getElementById('root')).render(
  reactElement
)

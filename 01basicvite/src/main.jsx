import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


const reactelement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank',
    },
    child: 'Click me to visit google'
}

function MyApp(){
    return (
        <div>
            <h1>custom react app</h1>
        </div>
    )
}


const AnotherElement = (
    <a href='http://google.com' target='_blank'>Vist Google</a>
)

const aReactElement = React.createElement(
    'a',
    {href:'https://google.com',target:"_blank"},
    'click to visit google'
)

createRoot(document.getElementById('root')).render(
    <App />
//    <MyApp/>
)

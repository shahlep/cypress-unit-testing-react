import React,{useState} from 'react'


const Button= ()=> {

const [text,setText] = useState('')

//<button>Click Me</button>

return (
    <button onClick={() => setText('Loading....')}>{text || 'Click Me'}</button>
)

}
export default Button;
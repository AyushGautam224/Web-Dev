import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("ayush")
  const [form, setForm] = useState({email : "hurr", phone:"5198"})

  const handleClick = () => {
    alert("hey i m clicked")
  }
    const handleMouseOver = () => {
      alert("hey i m mouse over")
    }
    const handleChange = (e) => {
      // setname(e.target.value)
      setForm({...form,[e.target.name]:e.target.value})
    }

    return (
      <>
        <div className='button'>
          <button onClick={handleClick}>click me</button>

        </div>
        {/* <div className='red' onMouseOver={handleMouseOver}>
          i m red boy
        </div> */}
        <input type="text" name='email' value= {form.email?form.email:""} onChange={handleChange} />
        <input type="text" name='phone' value= {form.phone?form.phone:""} onChange={handleChange} />
      </>
    )
  }

  export default App

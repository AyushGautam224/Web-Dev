import React from 'react'
import Component1 from './Component1'
import {counterContext} from '../Context/Context'

const Button = () => {
  return (
    <div>
      
      <button onClick={()=> value.setcount((count)=> count + 1)}>
        <span><Component1/></span>
        i am a button</button>
    </div>
  )
}

export default Button

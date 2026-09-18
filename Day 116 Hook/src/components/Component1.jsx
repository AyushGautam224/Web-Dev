import React from 'react'
import { useContext } from 'react'

const Component1 = ({count}) => {
    const counter = useContext(counterContext)
  return (
    <div>
     {counter}
    </div>
  )
}

export default Component1

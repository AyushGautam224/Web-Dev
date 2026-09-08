import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

  // case 1 : Run on every render 
  useEffect(() => {
    alert("hey i will run on every render  ")
  })

  // case 2 : Run only on  first  render 
  useEffect(() => {
    alert("hey welcome to my page. this is the first render ")

  }, [])


  // case 3 : Run only when certain values changed
  useEffect(() => {
    alert("hey i m running becoz color changed ")

  }, [color])

  // examle of cleanup function 
  useEffect(() => {
    alert("hey welcome to my page . this is the first render of app.jsx ")
return () => {
  alert("component unmounted")
}
  }, [])

  return (
    <div>
      i am a navbar of {color} color
    </div>
  )
}

export default Navbar

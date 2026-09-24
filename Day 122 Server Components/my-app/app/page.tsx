// "use client"
// import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"

import fs from "fs/promises"

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("hey i am ok ")
  let a = fs.readFile(".gitignore")
  a.then(e => { console.log(e.toString) })
  return (
    <div>
      <Navbar/>
      {/* i am a component {count} */}
      {/* <button onClick={() => setcount(count + 1)}>   Click Me</button> */}
    </div>
  );
}

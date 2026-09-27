"use client"
import { submitAction } from "./actions/form"

import { useRef } from "react";
export default function Home() {
  let ref = useRef()


  return (
    <div className="w-2/3 mx-auto my-12 gap-5">
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-white mx-4 my-4" type="text" />
        </div>
        <div>
          <label htmlFor="name">Address</label>
          <input name="add" id="add" className="text-white mx-4 my-4" type="text" />
        </div>
        <div>

          <button className="bg-blue-500 rounded-2xl ">Submit</button>
        </div>
      </form>
    </div>
  );
}

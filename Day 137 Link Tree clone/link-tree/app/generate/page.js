"use client";

import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";


export default function GeneratePage() {
  // const [link, setlink] = useState("");
  // const [linktext, setlinktext] = useState("");

  const searchParams = useSearchParams()

  const [links, setlinks] = useState([
    { link: "", linktext: "" }
  ]);
  const [handle, sethandle] = useState(searchParams.get('handle'));
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
  setlinks((initialLinks) => {
    return initialLinks.map((item, i) => {
      if (i === index) {
        return { link, linktext };
      } else {
        return item;
      }
    });
  });
};
 const addLink = () => {
  setlinks([...links, { link: "", linktext: "" }]);
};


  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,

      "handle": handle,
      "pic": pic,
      "desc":desc
    });
    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()
    if (result.success){

      toast.success(result.message)
      sethandle("")
      setlinks([])
      setpic("")
    }
    else{
      toast.error(result.message)
    }


  }



  return (

    <main className="min-h-screen bg-purple-600 flex justify-center px-4 py-42">
      <div className="w-full max-w-3xl">

        <ToastContainer />

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Create your Bittree
        </h1>

        {/* Step 1 */}
        <section className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Step 1: Claim your Bittree
          </h2>

          <input value={handle || ""} onChange={e => { sethandle(e.target.value) }}
            type="text"
            placeholder="Choose a handle"
            className="w-full text-black px-5 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-purple-600"
          />
        </section>

        {/* Step 2 */}
        <section className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Step 2: Add links
          </h2>

          {links && links.map((item, index) => {
            return <div key={index} className="flex gap-3">

              <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }}
                type="text"
                placeholder="Enter link text"
                className="flex-1 px-5 my-2 py-3 text-black rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }}
                type="text"
                placeholder="Enter link"
                className="flex-1 px-5 my-2 py-3 text-black rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-purple-600"
              />

            </div>
          }
          )}

          <button onClick={() => addLink()} className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
           + Add Link
          </button>
        </section>

        {/* Step 3 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Step 3: Add picture and Description
          </h2>

          <input value={pic || ""} onChange={e => { setpic(e.target.value) }}
            type="text"
            placeholder="Enter link your picture"
            className="w-full px-5 py-3 text-black rounded-full border border-gray-500 outline-none focus:ring-2 focus:ring-purple-600 mb-5"
          />
          <input value={desc || ""} onChange={e => { setdesc(e.target.value) }}
            type="text"
            placeholder="Enter Description"
            className="w-full px-5 py-3 text-black rounded-full border border-gray-500 outline-none focus:ring-2 focus:ring-purple-600 mb-5"
          />

          <button disabled = {pic=="" || handle =="" ||links[0].linktext==""} onClick={submitLinks} className="bg-black disabled:bg-slate-200 text-white px-7 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            Create your BitLink
          </button>
        </section>

      </div>
    </main>
  );
}

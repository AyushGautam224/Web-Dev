"use client"
// import { Link } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
const Shortener = () => {
  const [url, seturl] = useState("")
  const [shorturl, setsshorturl] = useState("")
  const [generated, setGenerated] = useState()

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json()) // ✅ Converts it into a usable object
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setsshorturl("")
        console.log(result)
        alert(result.message) // Now it knows what "message" is!
      })
  }


  return (
    <main className="min-h-screen bg-gray-600 flex items-center justify-center px-6">

      <div className="bg-gray-400 shadow-2xl rounded-2xl p-10 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          URL Shortener
        </h1>

        {/* <input
          type="text"
          placeholder="Paste your long URL..."
          className="w-full text-black border rounded-lg p-4 mb-5 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          placeholder="Custom Short URL (optional)"
          className="w-full border text-black rounded-lg p-4 mb-6 outline-none focus:ring-2 focus:ring-indigo-500"
        /> */}
        <input
          type="text"
          value={url}
          onChange={(e) => seturl(e.target.value)}
          placeholder="Paste your long URL..."
          className="w-full text-black border rounded-lg p-4 mb-5 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          value={shorturl}
          onChange={(e) => setsshorturl(e.target.value)}
          placeholder="Custom Short URL (optional)"
          className="w-full border text-black rounded-lg p-4 mb-6 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button onClick={generate} className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700">
          Shorten URL
        </button>

        {/* {generated && <code>
          {generated}
        </code>} */}
        <div className="text-black">

          {generated && <>
            <span className="font-bold text-lg"> Your Link : </span>
            <code>
             <Link target="_blank" href={generated}>
             {generated}
             </Link> 
            </code></>}
        </div>

      </div>

    </main>
  );
}
export default Shortener;

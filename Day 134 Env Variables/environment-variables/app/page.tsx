"use client"
import Image from "next/image";

export default function Home() {
  // console.log("The id is ",process.env.ID)
  // console.log("The secret is ",process.env.SECRET)
  return (
   <div>
    hey this is a home , the id is {process.env.NEXT_PUBLIC_ID}
    hey this is a home , the id is {process.env.NAME}
   </div>
  );
}

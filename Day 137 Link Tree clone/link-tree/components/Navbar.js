"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";


const Navbar = () => {

  const pathname = usePathname()
  const showNavbar = ["/", "/generate"].includes(pathname)

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY || window.scrollY < 50);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return (

    <>

      {showNavbar && <nav className={`bg-white h-23 flex justify-between w-[89vw] fixed right-[5vw] rounded-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-10' : '-translate-y-[150px]'}`}>


        <div className="logo flex gap-5 items-center">
          <Link href={"/"}>
            <img className='h-8 mx-6 my-4 w-30 p-1' src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE3NiAyMzgiIHRpdGxlPSJMaW5rdHJlZSBMb2dvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDI1LjUzMjZIMzMuNzI1N1YyMDIuODAySDEyNy4yMDVWMjMzLjk4OEgwVjI1LjUzMjZaTTE2MC41NjQgMjUuNTMyNkMxNzIuMTExIDI1LjUzMjYgMTgxLjY0MiAzNC40NjkgMTgxLjY0MiA0NS45NTg2QzE4MS42NDIgNTcuNjMwNyAxNzIuMTExIDY2LjkzMTggMTYwLjU2NCA2Ni45MzE4QzE0OC44MzMgNjYuOTMxOCAxMzkuNDg1IDU3LjYzMDcgMTM5LjQ4NSA0NS45NTg2QzEzOS40ODUgMzQuNDY5IDE0OC44MzMgMjUuNTMyNiAxNjAuNTY0IDI1LjUzMjZaTTE0NC4wNjcgODMuNzEwM0gxNzYuNTFWMjMzLjk4OEgxNDQuMDY3VjgzLjcxMDNaTTE5NS41NzIgODMuNzEwM0gyMjguMDE1VjEwNC41MDFDMjM3LjU0NiA4OC42MzQ1IDI1NC4wNDIgNzkuNjk4MSAyNzUuODU0IDc5LjY5ODFDMzExLjA0NiA3OS42OTgxIDMzMy4wNDEgMTA3LjA1NCAzMzMuMDQxIDE1MC40NlYyMzMuOTg4SDMwMC41OThWMTUzLjM3OEMzMDAuNTk4IDEyNS4yOTIgMjg4LjMxOCAxMDkuNDI1IDI2NS45NTYgMTA5LjQyNUMyNDEuNTc5IDEwOS40MjUgMjI4LjAxNSAxMjYuMDIxIDIyOC4wMTUgMTU2LjExM1YyMzMuOTg4SDE5NS41NzJWODMuNzEwM1pNMzUwLjA4NyAyNS41MzI2SDM4Mi41M1YxNTcuMzlMNDQzLjAxNiA4My44OTI3SDQ4My43MDdMNDE5LjE4OCAxNTkuMDMxTDQ4My43MDcgMjMzLjk4OEg0NDMuMDE2TDM4Mi41MyAxNjAuNjczVjIzMy45ODhIMzUwLjA4N1YyNS41MzI2Wk00OTYuMzU0IDQ1LjQxMTRINTI5LjM0N1Y4My43MTAzSDU2Ny44MzhWMTEwLjUxOUg1MjkuMzQ3VjE4Ny44NDdDNTI5LjM0NyAxOTcuNjk1IDUzNS4zOTUgMjAzLjcxMyA1NDQuNzQzIDIwMy43MTNINTY2LjM3MlYyMzMuOTg4SDU0MC4zNDRDNTEyLjExNyAyMzMuOTg4IDQ5Ni4zNTQgMjE3LjM5MiA0OTYuMzU0IDE4Ny44NDdWNDUuNDExNFpNNTg0LjUgODMuNzEwM0g2MTQuNTc3VjEwMi4zMTNDNjIyLjY0MiA4OC4wODczIDYzNi4wMjIgNzkuNjk4MSA2NTIuNTE5IDc5LjY5ODFDNjU3LjQ2OCA3OS42OTgxIDY2MC4yMTcgNzkuODgwNSA2NjMuODgzIDgxLjE1NzFWMTExLjI0OUM2NjEuNjgzIDExMC43MDIgNjU4LjM4NCAxMTAuMTU1IDY1MS43ODYgMTEwLjE1NUM2MjcuOTU4IDExMC4xNTUgNjE0Ljc2MSAxMzAuMDM0IDYxNC43NjEgMTY0LjUwM1YyMzMuOTg4SDU4Mi4zMThWODMuNzEwM0g1ODQuNVpNNzM5LjU4MiA3OS42OTgxQzc3NS4zMjQgNzkuNjk4MSA4MTMuOTk5IDEwMS4yMTggODEzLjk5OSAxNjIuMzE0VjE2Ni42OTFINjk3Ljc5MkM3MDAuMzU4IDE5My41IDcxNS45MzggMjA4LjI3MyA3NDEuOTY1IDIwOC4yNzNDNzYwLjY2MSAyMDguMjczIDc3Ni42MDcgMTk4LjI0MiA3ODAuMDkgMTg0LjE5OUg4MTMuMDgyQzgwOS43ODMgMjE0LjI5MSA3NzguNDQgMjM4IDc0MS45NjUgMjM4QzY5NS4yMjYgMjM4IDY2NS44OTkgMjA3LjcyNiA2NjUuODk5IDE1OC42NjdDNjY1Ljg5OSAxMTUuMjYxIDY5NC4zMDkgNzkuNjk4MSA3MzkuNTgyIDc5LjY5ODFaTTc3OS41NCAxMzkuODgyQzc3NC45NTggMTIxLjI4IDc2MC4yOTQgMTA5LjYwOCA3MzkuNzY2IDEwOS42MDhDNzE5Ljk3IDEwOS42MDggNzA2LjA0IDEyMS42NDQgNzAwLjU0MSAxMzkuODgySDc3OS41NFpNOTAyLjE2MiA3OS42OTgxQzkzNy45MDQgNzkuNjk4MSA5NzYuNTc4IDEwMS4yMTggOTc2LjU3OCAxNjIuMzE0VjE2Ni42OTFIODYwLjM3MkM4NjIuOTM4IDE5My41IDg3OC41MTcgMjA4LjI3MyA5MDQuNTQ1IDIwOC4yNzNDOTIzLjI0MSAyMDguMjczIDkzOS4xODcgMTk4LjI0MiA5NDIuNjY5IDE4NC4xOTlIOTc1LjY2MkM5NzIuMzYzIDIxNC4yOTEgOTQxLjAyIDIzOCA5MDQuNTQ1IDIzOEM4NTcuODA1IDIzOCA4MjguNDc5IDIwNy43MjYgODI4LjQ3OSAxNTguNjY3QzgyOC40NzkgMTE1LjI2MSA4NTYuNzA2IDc5LjY5ODEgOTAyLjE2MiA3OS42OTgxWk05NDEuOTM2IDEzOS44ODJDOTM3LjM1NCAxMjEuMjggOTIyLjY5MSAxMDkuNjA4IDkwMS45NzkgMTA5LjYwOEM4ODIuMTgzIDEwOS42MDggODY4LjI1MyAxMjEuNjQ0IDg2Mi43NTQgMTM5Ljg4Mkg5NDEuOTM2Wk05ODQuNjQzIDc5LjE1MDlIMTA0Mi41NkwxMDAxLjMyIDQwLjEyMjZMMTAyNC4wNSAxNi45NjA5TDEwNjMuMjggNTcuMDgzNVYwSDEwOTcuMzdWNTcuMDgzNUwxMTM2LjU5IDE2Ljk2MDlMMTE1OS4zMiA0MC4xMjI2TDExMTguMDggNzkuMTUwOUgxMTc2VjExMS40MzFIMTExNy43MUwxMTU5LjE0IDE1MS41NTRMMTEzNi40MSAxNzQuMTY5TDEwODAuMTQgMTE3LjgxNUwxMDIzLjg3IDE3NC4xNjlMMTAwMS4xNCAxNTEuNTU0TDEwNDIuNTYgMTExLjQzMUg5ODQuMjc3Vjc5LjE1MDlIOTg0LjY0M1pNMTA2My40NiAxNTcuNTcySDEwOTcuNTVWMjM0LjE3SDEwNjMuNDZWMTU3LjU3MloiLz48L3N2Zz4=" alt="logo" />
          </Link>


          <ul className='text-black flex gap-8 '>
            <li>Products</li>

            <li>Templates</li>
            <li>Marketplace</li>
            <li>Learn</li>
            <li>Pricing</li>
          </ul>

        </div>
        <div className='items-center flex m-3'>
          <button className='bg-gray-300 text-black mx-2 h-13 rounded-lg w-23 '>Log in</button>
          <button className='bg-black rounded-full text-white h-13 w-40  '>Sign up free</button>
        </div>

      </nav>}

      <div className=''>

      </div>
      <div className=''>

      </div>

    </>



  )
}

export default Navbar

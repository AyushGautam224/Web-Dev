import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()

    const [form, setform] = useState({ site: "", username: "", password: "" })



    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        // let passwordArray;

        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
        // else {
        //     JSON.stringify
        // }
    }, [])



    const showpassword = () => {
        passwordRef.current.type = "text"
        // alert("show the password");
        if (ref.current.src.includes("/logo/eyecross.png")) {

            ref.current.src = "/logo/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "/logo/eyecross.png"
            passwordRef.current.type = "text"
        }

    }
    const savePassword = async () => {
        let passwordArray = JSON.parse(localStorage.getItem("passwords")) || []
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))

        console.log([...passwordArray, form])
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <><div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>

            <div className=" bg-slate-50 mycontainer">
                <h1 className='text-4xl text font-bold text-center'> <span className='text-green-700'>
                    &lt;
                </span>
                    Pass
                    <span className='text-green-500'>

                        OP/&gt;
                    </span></h1>
                <p className='text-green-900 text-center py-2 text-lg'>Your own password manager</p>
                <div className='text-white flex flex-col gap-3   container px-30 p-4'>
                    <input value={form.site} onChange={handleChange} className='rounded-full text-black py-1 px-4 border border-green-500' placeholder='Enter website URL' type="text" name="site" id="" />
                    <div className='flex justify-between gap-3'>
                        <input value={form.username} onChange={handleChange} className='rounded-full text-black py-1 px-4 w-full border border-green-500' placeholder='Enter Username' type="text" name="username" id="" />
                        <div className='relative'>

                            <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-full text-black py-1 px-4 border border-green-500  ' placeholder='Enter Password' type="password" name="password" id="" />
                            <span className='absolute text-black right-3 py-1 hover:text-blue-300' onClick={showpassword}>
                                <img ref={ref} className='h-6 w-5 cursor-pointer  ' src="/logo/eye.png" alt="" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className="bg-green-500 gap-2 flex justify-center items-center border-2 border-green-900 hover:bg-green-600 text-white px-4 py-2 rounded-full w-fit mx-auto">
                        <img src="/logo/add.svg" alt="Add" className="w-8 h-8 text-black" />
                        Add Password
                    </button>

                </div>
                <div className='passwords'>
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="w-full text-sm text-left rtl:text-right text-body table-auto rounded-md">





                        {/* <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default"> */}
                        <thead classnanme="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                            <tr>
                                <th classnanme="px-6 py-3 font-medium">Site</th>
                                <th classnanme="px-6 py-3 font-medium">Username</th>
                                <th classnanme="px-6 py-3 font-medium">Password</th>


                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {

                                return (
                                    <tr key={index}>
                                        <td className="px-6 py-4">{item.site}</td>
                                        <td className="px-6 py-4">{item.username}</td>
                                        <td className="px-6 py-4">{item.password}</td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                    }
                    {/* </div> */}


                </div>
            </div>
        </>
    )
}

export default Manager

import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
    console.log("Name")
    return (
        <div>
            i am a {adjective} Navbar
            <button onClick={() => {
                setAdjective()
            }}>change me</button>
        </div>
    )
}

export default memo(Navbar)

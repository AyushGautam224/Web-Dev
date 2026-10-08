"use client"
import React from 'react'

const About = () => {
    return (
        <div>

            <div className='container'>
                <h1>
                    this is about me
                </h1>
                <p>hey i am a good boy</p>
                <style jsx>
                    {`
        .container{
            background-color:black;
            color:green;
            }
            
            `}
                </style>
            </div>
            <div className='container'>
                hey i am a man
            </div>
        </div>
    )
}

export default About

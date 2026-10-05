"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'

const page = () => {
    const params = useParams()
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            
            router.push('/dashboard')
        }, 2333);
      
    }, [])
    

    return (
        <div>
            {params.slug}

            <button type="button" onClick={() => router.push('/dashboard')}>
                Dashboard
            </button>

        </div>
    )
}

export default page

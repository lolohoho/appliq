'use client'
import React from 'react'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AnimationContainer from "@/components/AnimationContainer";
import Contact from "@/components/Contact";
import StarsCanvas from "@/components/ui/stars";
import "@/app/index.css";




function page() {
    return (

        <div className='relative z-0'>

            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>

    )
}

export default page

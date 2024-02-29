import React, { useState } from 'react'

export const LandingPage = () => {

    return (
        <div className="m-8 flex flex-col align-center">
            <h2 className='mt-8 text-3xl font-bold place-self-center'>What is <span className="bg-gradient-to-r from-emerald-600 to-green-300 bg-clip-text text-transparent">ECOWatch?</span></h2>
            <p className='my-4 place-self-center flex-wrap w-9/12'>
            Join ECOWatch, where eco-communities unite, gamifying challenges for an impactful, fun journey to a greener world! Having fun and making connections all while helping the environment!
            </p>
        </div>
    )  
}

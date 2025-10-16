import React from 'react'

const GradientsLeftRight = () => {
    return (
        <>
            <div className="absolute top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-emerald-200 to-green-300 opacity-30 blur-3xl rounded-full animate-pulse"
                style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-purple-200 to-indigo-300 opacity-30 blur-3xl rounded-full animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </>
    )
}

export default GradientsLeftRight
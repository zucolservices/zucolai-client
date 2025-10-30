import React from 'react'
import { Chakra_Petch } from 'next/font/google'

const chakra = Chakra_Petch({ weight: ['600'], subsets: ['latin'] })


const HeadingPurple = ({ title = "" }) => {
    return (
        <p
            style={{
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '24px',
                color: '#BA8DFF',
            }}
            className={`${chakra.className} tracking-wide mb-2 md:mb-4`}
        >
            {title}
        </p>
    )
}

export default HeadingPurple
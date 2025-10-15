import React from 'react'


const HeadingPurple = ({ title = "" }) => {
    return (
        <p
            style={{
                fontFamily: 'ChakraPetch, sans-serif',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#BA8DFF',
            }}
            className="tracking-wide mb-2 md:mb-4"
        >
            {title}
        </p>
    )
}

export default HeadingPurple
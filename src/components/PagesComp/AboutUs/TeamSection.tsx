import HeadingPurple from '@/components/HeadingPurple'
import Image from 'next/image'
import React from 'react'

const TeamSection = () => {

    const teamMembersDetails = [
        {
            id: 1,
            name: "Name Here",
            position: "Founder & CEO",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 2,
            name: "Name Here",
            position: "UI Designer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 3,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 4,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 5,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 6,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 7,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
    ]

    return (
        <div className=" relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-16">
            <div>
                <HeadingPurple title="{ Our Team }" />
                <p className="max-w-2xl text-[#00000066]/40 text-[32px] leading-[40px]">
                    We don&apos;t just build AI tools we design them to solve real problems at scale. Zucol AI brings together deep tech and business understanding.
                </p>
            </div>
            <div className='mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4'>
                {teamMembersDetails?.map((member) => (
                    <div key={member.id} className='relative'>
                        <div className='w-full h-[345px]'>
                            <Image src={member.image} alt={member.name} fill className='object-cover rounded-[14px]' />
                        </div>
                        <div className='absolute top-0 left-0 right-0 p-6'>
                            <h2 className='text-[#FDFDFD] text-[24px] leading-[32px]'>{member.name}</h2>
                            <p className='text-[#FDFDFD] text-[14px] leading-[20px]'>{member.position}</p>
                        </div>
                    </div>
                ))}

            </div>
            
        </div>
    )
}

export default TeamSection
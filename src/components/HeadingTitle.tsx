import { usePathname } from 'next/navigation';
import React from 'react'

const HeadingTitle = ({ title, link }: { title: string, link: string }) => {

    const pathname = usePathname();
    const blackText = (pathname.includes("/use-cases") || pathname.startsWith("/blog/") || pathname.startsWith("/services/case-studies/"))

    const textColor = blackText ? "text-[#0B0B0B]" : "text-[#FDFDFD]"


    return (
        <a href={link} className={`text-[14px] leading-[24px] font-light ${textColor}`}>{title}</a>
    )
}

export default HeadingTitle
import { usePathname } from 'next/navigation';
import React from 'react'

const HeadingTitle = ({ title, link }: { title: string, link: string }) => {

    const pathname = usePathname();
    const blackText = (
        pathname.includes("/use-cases") ||
        pathname.startsWith("/blog/") ||
        pathname.startsWith("/case-studies/") ||
        pathname.startsWith("/cookie-policy") ||
        pathname.startsWith("/privacy-policy") ||
        pathname.startsWith("/terms-of-use")
    )

    // Mobile/Tablet: always white. Desktop: black when blackText is true, else white.
    const responsiveColor = `text-[#FDFDFD] ${blackText ? 'lg:text-[#0B0B0B]' : 'lg:text-[#FDFDFD]'}`;


    return (
        <a href={link} className={`text-[14px] leading-[24px] font-light ${responsiveColor}`}>{title}</a>
    )
}

export default HeadingTitle
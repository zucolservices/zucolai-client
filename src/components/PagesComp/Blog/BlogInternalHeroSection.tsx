import HeadingPurple from "@/components/HeadingPurple";
import Image from "next/image";
import BlogContent from "./BlogContent";
import Link from "next/link";

interface BlogCard {
    id: string;
    title: string;
    description: string;
}

export default function BlogInternalHeroSection() {
    const leftImage = "/images/Rectangle 34625129.png";

    const cardData = [
        {
            id: "1",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "2",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "3",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        }
    ]

    return (
        <section
            className="relative min-h-screen border border-[white]">
            <div className="absolute top-0 left-0 w-full h-full object-cover" style={{ backgroundColor: "#FFFFFF" }} />
            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-8 lg:pb-0 mt-40">
                <div className="space-y-6">
                    <div>
                        <HeadingPurple title="Case Study" />
                        <h2 className="w-full text-[#000000] text-[40px] leading-[48px] font-light">
                            Generative AI for Marketing: Scale Creativity Without Limits
                        </h2>
                        <p className="w-full text-[#000000]/70 text-[16px] leading-[24px] mt-2 font-light">Lorem ipsum dolor sit amet consectetur. Faucibus donec libero enim et viverra sed quam at tincidunt. Sit amet mi ornare blandit cursus. Turpis ultrices imperdiet in id. Diam dui purus blandit urna felis. Dis ultrices volutpat tellus vulputate eu eget tortor faucibus aliquet. Nulla diam ac et eget id enim. Dui malesuada condimentum mi congue feugiat tortor vestibulum tellus. Est accumsan fringilla at diam.</p>
                    </div>
                    <div>
                        <Image src={leftImage} alt="" width={1000} height={603} className="object-cover" />
                    </div>
                    <p className="w-full text-[#000000]/60 text-[16px] leading-[24px] mt-2 font-light">
                        Lorem ipsum dolor sit amet consectetur. Faucibus donec libero enim et viverra sed quam at tincidunt. Sit amet mi ornare blandit cursus. Turpis ultrices imperdiet in id. Diam dui purus blandit urna felis. Dis ultrices volutpat tellus vulputate eu eget tortor faucibus aliquet. Nulla diam ac et eget id enim. Dui malesuada condimentum mi congue feugiat tortor vestibulum tellus. Est accumsan fringilla at diam.
                        Consectetur senectus sed at volutpat suspendisse nulla varius lorem tristique. Ipsum tempus pellentesque quis vel. Massa lectus bibendum eget rhoncus viverra nulla adipiscing. Ac pharetra donec ligula in porttitor. Mattis tincidunt amet netus proin. Porta viverra ullamcorper tristique ante libero quis facilisis lorem sit. Suspendisse est eros ipsum non sit sem id ipsum. Facilisi in euismod egestas phasellus commodo vulputate enim aenean. Gravida faucibus nec diam dolor lacus vestibulum. Amet tincidunt adipiscing neque semper. Justo diam faucibus diam vestibulum integer dictumst. Ac gravida magna in leo cras vestibulum viverra luctus. Nec faucibus nec tellus sit dignissim. Aliquet condimentum fermentum vulputate sit sed auctor. Mauris amet pretium eget enim.
                        Mi posuere in diam vulputate ac orci pellentesque turpis. Gravida mattis risus in elit erat. A nullam semper et mauris viverra nibh rhoncus. Congue tellus eget eget natoque. Lacus mattis morbi blandit sed neque mauris. Lacus turpis proin aliquam integer sit cursus tristique enim nunc. Scelerisque tempus netus rhoncus cras ullamcorper dui nisl pulvinar id. In semper bibendum enim in congue pulvinar nam. Ac pulvinar porttitor placerat in vitae ipsum molestie justo id. Iaculis feugiat elit sit vitae id lectus interdum aenean lacus. Amet in ultricies enim quis pretium. Neque ut eu sapien facilisis pharetra.
                        Vestibulum viverra quam mattis arcu ullamcorper viverra at sed. Non vestibulum viverra et morbi. Aliquet sit posuere nibh amet. At ac mauris ac lectus ac sit sit aliquet mauris. Iaculis risus faucibus in scelerisque est. Elit mattis massa commodo cras cras ultrices. Et porttitor convallis mollis risus arcu aliquam velit felis ante. Ut eu magna eu non. Mauris at ut nisl pulvinar aliquam ullamcorper viverra. Volutpat ac in risus aliquam eu tellus. At aliquam eget volutpat facilisis vulputate etiam non et.
                        Blandit amet feugiat sed dignissim tristique sed egestas sit luctus. Consequat in ac sem et venenatis quam enim turpis arcu. Ac gravida lectus pharetra fermentum fames scelerisque. Proin pellentesque turpis lacus sollicitudin morbi mattis lacinia. Pellentesque bibendum sed mauris donec malesuada id elementum. Lectus justo et in id lectus netus bibendum quis. Pellentesque feugiat et urna at accumsan tellus sollicitudin gravida. Nunc proin turpis mauris habitant ac proin viverra. Semper pharetra sit et accumsan. Facilisis commodo dictumst diam accumsan nisl. Duis facilisis tincidunt porta non arcu. Nulla cursus ornare eget egestas fermentum. Sed ut nec quisque tincidunt placerat rutrum. Adipiscing duis vitae blandit ultrices diam nascetur. Lorem amet ornare porttitor pellentesque dis enim eu a.
                        Mattis commodo eros vel fermentum est pulvinar vulputate quam odio. Viverra orci pretium sem adipiscing praesent faucibus morbi sit. Eros feugiat mauris enim mi. Convallis faucibus eget cursus turpis adipiscing augue dui in. Condimentum sed quis pretium morbi justo. Quisque lacus diam diam eros sed nam molestie tortor massa. Senectus consectetur vulputate ut aliquam vivamus vel nunc hendrerit faucibus. Dui quam tincidunt sagittis blandit nunc lectus dui.
                        Congue tristique donec ipsum urna quisque accumsan faucibus. Nisl eu id facilisis est. Tristique nibh risus non aenean iaculis eleifend. Tincidunt in euismod quis ultricies nibh etiam aliquam. Egestas pulvinar consequat tristique tellus.
                        Feugiat penatibus urna condimentum vel eget fusce. Faucibus nec senectus molestie tempus. Aliquam blandit feugiat imperdiet sed. Blandit in pellentesque tempus sit dolor diam elementum tincidunt. Elit ornare nunc velit mauris fermentum aliquet aliquet metus commodo. Viverra id auctor neque eu magna. Urna in tortor vulputate nunc nascetur. Felis malesuada sapien adipiscing sit varius quis. Et quisque suspendisse rhoncus aliquam egestas non.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="w-full text-[#000000] text-[40px] leading-[48px] font-light text-center">Read More Blogs</h2>
                    <section className='max-w-[75rem] mx-auto mt-8 mb-[80px] px-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                cardData.map((item: BlogCard, index: number) => (
                                    <div key={index} className='rounded-[8px] bg-[#ffffff] overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                                        <div className='relative w-full h-[215px]'>
                                            <Image
                                                src={"/images/image 1001978423.png"}
                                                alt={item.title}
                                                fill
                                                className='object-cover'
                                            />
                                        </div>
                                        <Link href={`/blog/${item.id}`}>
                                            <div className='p-4'>
                                                <h2 className='text-[#000000] text-[24px] leading-[32px] font-light mb-2'>{item.title}</h2>
                                                <p className='text-[#050505]/70 text-[16px] leading-[24px] font-light'>{item.description}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
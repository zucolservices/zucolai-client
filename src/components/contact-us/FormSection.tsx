import HeadingPurple from "@/components/HeadingPurple";

export default function ContactFormSection() {
    return (
        <section className="min-h-[678px] relative lg:py-10  py-10 px-6 lg:px-0">
            <div className="bg-[#FDFDFD] rounded-[16px] min-h-[678px] max-w-6xl mx-auto border-[#0000001A] border-[1px] flex flex-col lg:flex-row overflow-hidden">

                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 lg:px-[96px] lg:py-[92px]">
                    <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-light leading-[36px] sm:leading-[40px] lg:leading-[44px] text-[#0A0A0A] mb-6 tracking-[-0.02em] font-['Inter Display']">Get in touch</h2>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                            <input type="email" placeholder="Email Address" className="h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        </div>
                        <input type="tel" placeholder="Phone Number" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <input type="text" placeholder="Company / Organization" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <input type="text" placeholder="Job Title" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <textarea placeholder="Message / Project Brief" rows={4} className="w-full rounded-[8px] border border-[#E0E0E0] px-4 py-3 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40 resize-none" />

                        <button type="submit" className="mt-2 inline-flex items-center gap-2 bg-black text-white px-5 h-10 rounded-[8px] hover:bg-black/90 transition">
                            Submit
                            <span className="inline-block translate-x-0 group-hover:translate-x-0">→</span>
                        </button>
                    </form>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <div className="bg-[url('/backgrounds/contact-form.png')] bg-no-repeat bg-cover bg-center h-full min-h-[360px] w-full">
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                            <div className="backdrop-blur-lg bg-white/50 rounded-[16px] border border-white/60 shadow-[0_8px_60px_rgba(186,141,255,0.25)] max-w-[520px] w-full p-6 sm:p-8">
                                <HeadingPurple title="[ Connect ]" />
                                <p className="mt-2 text-[22px] sm:text-[38px] leading-[32px] sm:leading-[48px] text-[#00000040] font-light">
                                    Every transformation starts with a conversation.
                                </p>
                                <p className="mt-2 text-[22px] sm:text-[38px] leading-[32px] sm:leading-[48px] text-[#050505B2] font-light">
                                    Let&apos;s shape the <span className="bg-gradient-to-r from-[#79E9FF] to-[#9D58FF] bg-clip-text text-transparent">future of AI</span> together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
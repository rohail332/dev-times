
const Timeline = () => {
    return (
        <>
            <div className="border-t m-10 mt-15 ">
                {/* Timeline Header */}
                <div className="flex justify-between mt-15 border-b pb-2 uppercase">
                    <h1 className="times text-2xl tracking-wide font-bold  ">Career Retrospective</h1>
                    <span className="font-semibold light tracking-wider text-[0.8rem] mt-4 mr-1 max-sm:mt-11">Timeline</span>
                </div>

                {/* Timeline Items */}
                <div className="main mt-8">
                    <div className="flex gap-10 max-sm:flex-col max-md:flex-col max-lg:flex-col max-sm:gap-1 max-md:gap-2 max-lg:gap-2 ">
                        <div className="light font-semibold tracking-wide uppercase text-[0.87rem]">July 2025 – Present</div>
                        <div className="times">
                            <h2 className="font-semibold text-[1.2rem] tracking-wide "> Founder and CEO</h2>
                            <h3 className=" light tracking-wider ">Print Syntax</h3>
                            <p className="mt-1 tracking-wide text-[1rem]">  I founded Print Syntax to build impactful technology solutions. I manage the company, lead development teams, work closely with clients, oversee products and actively develop SaaS applications and open source projects.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Timeline

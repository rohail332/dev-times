
const Projects = () => {

    const clickHandle = () => {
        alert("Coming Soon")
    }

    return (
        <>
            <div className="mt-20 ">
                <h1 className="times bg-black text-[#F1EDE5] text-2xl text-center m-10 p-3 uppercase tracking-wider ">Featured Projects</h1>

                {/* projects cards main div */}
                <div className="main flex justify-evenly max-sm:flex-col max-md:flex-col max-lg:flex-col items-center max-sm:gap-5 max-md:gap-5 max-lg:gap-10 ">
                    {/* Project 1 */}
                    <div className="border p-3 w-[26.5rem] max-sm:w-84 max-md:w-160 max-lg:w-184 rounded-xs">
                        <img className="w-100 max-md:h-70 max-lg:h-90 max-sm:w-84 max-md:w-160 max-lg:w-184 h-56 m-auto" src="/img/num1.png" alt="Project Image" />
                        <h3 className="times tracking-wider text-[1.3rem] uppercase font-semibold mt-3 max-md:text-2xl max-md:mb-1.5 max-lg:text-2xl max-lg:mb-1">Open Library</h3>
                        <p className="font-semibold light tracking-widest text-[0.8rem]">  2026-07-23 • Website • Live</p>
                        <div className=" text-[0.64rem] tracking-wider mt-1.5 font-semibold flex gap-2 light">
                            <span className="border border- px-2 py-[0.1rem]">REACTJS</span>
                            <span className="border border- px-2 py-[0.1rem]">TAILWIND CSS</span>
                            <span className="border border- px-2 py-[0.1rem]">GSAP</span>
                        </div>
                        <p className="times mt-3 max-sm:mt-3">A modern React digital library featuring trending books, articles, testimonials, FAQs, responsive design and smooth GSAP animations.</p>
                        <button onClick={() => {
                            window.open("https://github.com/rohail332/open-library", "_blank");
                        }} className=" times hover:bg-black font-semibold hover:text-[#F1EDE5] border mt-6 py-2 w-full cursor-pointer">
                            Case Study
                        </button>
                    </div>

                    {/* Project 2 */}
                    <div className="border p-3 w-[26.5rem]  max-sm:w-84 max-md:w-160 max-lg:w-184 rounded-xs">
                        <img className="w-100 h-56 max-md:h-70 max-lg:h-90 max-sm:w-84 max-md:w-160 max-lg:w-184 m-auto" src="/img/pi.jpg" alt="Project Image" />
                        <h3 className="times tracking-wider text-[1.3rem] uppercase font-semibold mt-3 max-md:text-2xl max-md:mb-1.5 max-lg:text-2xl max-lg:mb-1">   PharmDex</h3>
                        <p className="font-semibold light tracking-widest text-[0.8rem]">  2026-08-25 • Website • Coming Soon</p>
                        <div className=" text-[0.64rem] tracking-wider mt-1.5 font-semibold flex flex-wrap gap-2 light">
                            <span className="border border- px-2 py-[0.1rem]">REACTJS</span>
                            <span className="border border- px-2 py-[0.1rem]">SCSS</span>
                            <span className="border border- px-2 py-[0.1rem]">DRIVER.JS</span>
                            <span className="border border- px-2 py-[0.1rem]">REDUX</span>
                            <span className="border border- px-2 py-[0.1rem]">GSAP</span>
                        </div>
                        <p className="times mt-3 max-sm:mt-3">A modern learning platform for Pharm.D students with pill identification, drug information, interactive classes, and study resources.</p>
                        <button onClick={clickHandle} className=" times hover:bg-black font-semibold hover:text-[#F1EDE5] border mt-6 py-2 w-full text-center m-auto cursor-pointer">
                            Case Study
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects

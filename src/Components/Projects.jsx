
const Projects = () => {
    return (
        <>
            <div className="mt-20 ">
                <h1 className="times bg-black text-[#F1EDE5] text-2xl text-center m-10 p-3 uppercase tracking-wider ">Featured Projects</h1>

                {/* projects cards main div */}
                <div className="main flex justify-around max-sm:flex-col max-md:flex-col max-lg:flex-col items-center max-sm:gap-5 max-md:gap-5 max-lg:gap-10 ">
                    {/* Project 1 */}
                    <div className="border p-3 w-[26.5rem] max-sm:w-84 max-md:w-160 max-lg:w-184 rounded-xs">
                        <img className="w-100  max-sm:w-84 max-md:w-160 max-lg:w-184 h-56  m-auto" src="/img/newi.jpg" alt="Project Image" />
                        <h3 className="times tracking-wider text-[1.3rem] uppercase font-semibold mt-2">  Age of the Ottomans</h3>
                        <p className="font-semibold light tracking-widest text-[0.8rem]">  2025-06-25 • Website • Live</p>
                        <div className=" text-[0.64rem] tracking-wider mt-1.5 font-semibold flex gap-2 light">
                            <span className="border border- px-2 py-[0.1rem]">REACTJS</span>
                            <span className="border border- px-2 py-[0.1rem]">TAILWIND CSS</span>
                            <span className="border border- px-2 py-[0.1rem]">GSAP</span>
                        </div>
                        <p className="times mt-2">Age of the Ottomans — An interactive web experience exploring the history, culture, and legacy of the Ottoman Empire.</p>
                        <button onClick={() => {
                            window.open("https://www.github.com/rohail332", "_blank");
                        }} className=" times hover:bg-black font-semibold hover:text-[#F1EDE5] border mt-6 py-2 w-full">
                            Case Study
                        </button>
                    </div>

                    {/* Project 2 */}
                    <div className="border p-3 w-[26.5rem]  max-sm:w-84 max-md:w-160 max-lg:w-184 rounded-xs">
                        <img className="w-100 h-56  max-sm:w-84 max-md:w-160 max-lg:w-184 m-auto" src="/img/pi.jpg" alt="Project Image" />
                        <h3 className="times tracking-wider text-[1.3rem] uppercase font-semibold mt-2">   PharmDex</h3>
                        <p className="font-semibold light tracking-widest text-[0.8rem]">  2025-06-25 • Website • Live</p>
                        <div className=" text-[0.64rem] tracking-wider mt-1.5 font-semibold flex gap-2 light">
                            <span className="border border- px-2 py-[0.1rem]">REACTJS</span>
                            <span className="border border- px-2 py-[0.1rem]">SCSS</span>
                            <span className="border border- px-2 py-[0.1rem]">DRIVER.JS</span>
                            <span className="border border- px-2 py-[0.1rem]">GSAP</span>
                        </div>
                        <p className="times mt-2">A modern learning platform for Pharm.D students with pill identification, drug information, interactive classes, and study resources.</p>
                        <button onClick={() => {
                            window.open("https://www.github.com/rohail332", "_blank");
                        }} className=" times hover:bg-black font-semibold hover:text-[#F1EDE5] border mt-6 py-2 w-full text-center m-auto ">
                            Case Study
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects

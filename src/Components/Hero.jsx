
const name = () => {
  return (
    <>
      <div className="flex gap-7 ml-10 mt-12 max-sm:flex-col eee   max-lg:items-center max-md:flex-col max-lg:flex-col max-md:items-center w-240 max-sm:w-[20rem]  max-md:w-160 max-lg:w-180">
        {/* Image Container */}
        <div>
          <img className="border w-240 max-md:w-120 img max-lg:w-136 border-r-4 border-b-4 p-[0.23rem] rounded-xs" src="/img/img-dev.jpg" alt="rohail-img" />
          <p className="text-center light text-[0.8rem] mt-2 font-semibold">Fig 1. Senior Software Engineer</p>
        </div>

        {/* Text Container */}
        <div >
          <h1 className="times font-semibold text-4xl tracking-wide">Senior Software Engineer</h1>
          <h4 className="mt-2 text-[15px] font-semibold uppercase light tracking-wider"> By Muhammad Rohail • Lahore</h4>
          <p className="times first-letter:text-[3rem] "> A Software Engineer skilled in JavaScript, Python, C and PHP. I build clean,
            responsive and modern web applications using technologies like React.js,
            Next.js, Tailwind CSS, Node.js and Laravel. I also work with databases,
            APIs, cloud tools and modern development workflows. Currently, I’m focused
            on building innovative projects and growing as a developer. Let’s connect
            and create something amazing together!</p>
        </div>
      </div>
    </>
  )
}

export default name

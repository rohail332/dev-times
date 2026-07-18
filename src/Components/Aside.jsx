
const Name = () => {
  return (
    <>
      <div className="border-l h-[98%]  px-8 mt-12 pb-1 max-sm:border-l-0 max-md:border-l-0 max-lg:border-l-0 flex flex-col justify-between  items-center ">

        {/* skills */}
        <div className="bg-[#E5E0D5] border p-3 w-[18rem] max-sm:w-[21.6rem]  max-md:w-[42.2rem] items-center max-lg:w-188" >
          <h1 className="border-b uppercase font-black tracking-wide pb-1">Skills Index</h1>
          <div className=" uppercase text-[0.9rem] font-semibold tracking-wider light items-center">
            <div className="flex justify-between border-b  pb-1 mt-3 border-dotted">
              <h4>JavaScript</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >Reactjs</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >git</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >nextjs</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >photoshop</h4>
              <div>▲</div>
            </div>

            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >php</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >nodejs</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >gsap</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >c language</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >typescript</h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >DRIVER.JS </h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >kali linux </h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between border-b pb-1 mt-2 border-dotted">
              <h4 >Python </h4>
              <div>▲</div>
            </div>
            <div className="flex justify-between pb-1 mt-2 text-black">
              <h4> <a href="https://www.github.com/rohail332" target="_blank">More</a> </h4>
              <div>▲</div>
            </div>
          </div>
        </div>


        {/* Connect */}

        <div className="bg-white border mt-10 p-6 text-center w-[18rem] max-sm:w-[21.6rem]  max-md:w-[42.2rem] items-center max-lg:w-188">
          <div className=" text-[1.5rem] font-[1000] tracking-wide uppercase ">Connect Now</div>
          <p className="times mt-2"> "Operators are standing by to take your call."</p>
          <div className="mt-4 flex flex-col">
            <button onClick={() => {
              window.location.href = "mailto:rohailtahir332@gmail.com";
            }} className="border uppercase tracking-wider py-1 mb-2 w-full times cursor-pointer hover:bg-black hover:text-[#F1EDE5]">Email Inquiry</button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/muhammad-rohail-3457432b4/", "_blank");
            }} className="border   uppercase tracking-wider py-1 mb-2 w-full times cursor-pointer hover:bg-black hover:text-[#F1EDE5]">Linkedin</button>
            <button onClick={() => {
              window.open("https://www.github.com/rohail332", "_blank");
            }} className="border uppercase tracking-wider py-1 mb-2 w-full times cursor-pointer hover:bg-black hover:text-[#F1EDE5]">GITHUB</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Name

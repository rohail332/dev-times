const Projects = () => {
  const Projects = [
    {
      id: 1,
      name: "Har Zaika - Recipe Website",
      desc: "A modern recipe website featuring a diverse collection of dishes across Asian, Chinese, Vegetarian, Desserts, Fast Food and Drinks categories with an easy to use and responsive interface.",
      img: "/img/num3.jpg",
      date: "2026-08-05 • Website • Live",
      Skills: ["JavaScript", "SweetAlert2", "scss", "I18N", "DRIVER.JS", "swiperjs", "fuse js", "GSAP", "Html", "lucide"],
      link: "https://rohail332.github.io/har-zaika/",
    },
    {
      id: 2,
      name: "Learn Periodic Table",
      desc: "An interactive periodic table website featuring all 118 elements with detailed information, multilingual support, quizzes and educational tools in a responsive interface.",
      img: "/img/periodic-table.png",
      date: "2026-08-05 • Website • Live",
      link: "https://learnperiodictable.vercel.app/",
      Skills: ["REACTJS", "SCSS", "I18N", "fuse js", "DRIVER.JS", "GSAP", "lucide", "JSON", "MORE"],
    },
  ];

  return (
    <>

      {/* main div */}
      <div className="main-div">
        <h1 className="times bg-black text-[#F1EDE5] text-2xl text-center my-10 p-3 uppercase tracking-wider ">
          Featured Projects
        </h1>

        {/* projects container */}
        <div className="main flex justify-evenly max-sm:flex-col max-sm:items-center max-sm:gap-10 max-md:flex-col max-md:items-center max-md:gap-10 max-lg:flex-col max-lg:items-center max-lg:gap-12">
          {Projects.map((items) => {
            return <div key={items.id} className="border p-3 w-110 max-sm:w-84 max-md:w-160 max-lg:w-184 rounded-xs">
              <img className="w-105 max-md:h-60 max-lg:h-90 max-sm:w-84 max-md:w-160 max-lg:w-184 h-56 m-auto rounded-sm" src={items.img} alt="project-img" />
              <h3 className="times tracking-wider text-[1.3rem] uppercase font-semibold mt-3 max-md:text-2xl max-md:mb-1.5 max-lg:text-2xl max-lg:mb-1">{items.name}</h3>
              <p className="font-semibold light tracking-widest text-[0.8rem]">{items.date}</p>
              <div className="text-[0.64rem] tracking-wider mt-1.5 font-semibold flex flex-wrap gap-2 light uppercase">
                {items.Skills.map((skill) => {
                  return <span className="border border- px-2 py-[0.1rem]">{skill}</span>
                })}
              </div>
              <p className="times mt-3 max-sm:mt-3 ">{items.desc}</p>
              <button onClick={() => { window.open(items.link, "_blank") }} className=" times hover:bg-black hover:text-[#F1EDE5] text-black bg-[#F1EDE5] font-semibold border mt-6 py-2 w-full cursor-pointer">Case Study</button>
            </div>
          })}

        </div>
      </div>
    </>
  );
};

export default Projects;

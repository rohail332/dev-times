import Navbar from "./Components/Navbar";
import Aside from "./Components/Aside";
import Hero from "./Components/Hero";
import Timeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";


function App() {
  const dateShow = () => {
    return new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };


  return (
    <>
      <div>
        <Navbar date={dateShow()} />

        {/* mein title div with name and role */}
        <div>
          <h1 className='times font-semibold text-center text-7xl tracking-wide mt-6 max-sm:text-3xl max-md:text-5xl max-lg:text-[3.3rem]'>MUHAMMAD ROHAIL</h1>
          <div className="flex justify-center items-center gap-3 max-sm:gap-1 border-b pb-5 mt-2  tracking-wider">
            <hr className="w-56  mr-2 max-sm:mr-1 max-md:mr-[0.01rem] max-lg:mr-[0.01rem] max-sm:w-14 max-md:w-26 max-lg:w-32" />
            <span className='times font-semibold text-2xl light uppercase tracking-wider  max-sm:text-[1rem] max-md:text-2xl max-lg:text-2xl'> Software Engineer</span>
            <hr className="w-56 ml-2 max-sm:ml-1 max-md:ml-[0.01rem] max-lg:ml-[0.01rem] max-sm:w-14 max-md:w-26 max-lg:w-32" />
          </div>
        </div>

        {/* div for components hero timeline projects and aside */}
        <div className="flex max-sm:flex-col max-md:flex-col max-lg:flex-col ">
          <div>
            <Hero />
            <Timeline />
            <Projects />
          </div>
          <div>
            <Aside />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

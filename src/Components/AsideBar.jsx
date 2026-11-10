import Skills from "./Skills"
import ContactInformation from "./ContactInformation"
const AsideBar = () => {
    return (
        <>
            <div className="main-div fle border-l h-[98%]  px-8 mt-12 pb-1 max-sm:border-l-0 max-md:border-l-0 max-lg:border-l-0 flex flex-col justify-between  items-center">

                {/* skills */}
                <Skills />

                {/* Connect */}
                <ContactInformation/>


            </div>

        </>
    )
}

export default AsideBar
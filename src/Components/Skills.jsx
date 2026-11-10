
const Skills = () => {

    const skills = [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'Reactjs' },
        { id: 3, name: 'Tailwind CSS' },
        { id: 4, name: 'Node js' },
        { id: 5, name: 'Laravel' },
        { id: 6, name: 'Mongo DB' },
        { id: 7, name: 'Nextjs' },
        { id: 8, name: 'MySQL' },
        { id: 9, name: 'I18N' },
        { id: 10, name: 'Python' },
        { id: 11, name: 'C Programming' },
        { id: 12, name: 'PHP' },
        { id: 13, name: 'Git' },
        { id: 14, name: 'gsap' },
        { id: 15, name: 'typescript' },
        { id: 16, name: 'DRIVER.JS' },
        { id: 17, name: 'REDUX' },
        { id: 18, name: 'Express' },
        { id: 19, name: 'photoshop' },
        { id: 20, name: 'kali linux' },
        { id: 21, name: 'More' }
    ]

    return (
        <>

            <div className="skills bg-[#E5E0D5] border p-3 w-[18rem] max-sm:w-[21.6rem]  max-md:w-[42.2rem] items-center max-lg:w-188 fl-w">
                <h1 className="border-b uppercase font-black tracking-wide pb-1">Skills Index</h1>

                <div className="skills-list uppercase text-[0.9rem] font-semibold tracking-wider light items-center">
                    {skills.map((skill) => {
                        return <div className="flex justify-between border-b pb-1 mt-2 border-dotted" key={skills.id}>
                            <h4>{skill.name}</h4>
                            <div>▲</div>
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}

export default Skills

const Skills = () => {

    const skills = [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'Reactjs' },
        { id: 3, name: 'Tailwind CSS' },
        { id: 4, name: 'Node js' },
        { id: 5, name: 'Nextjs' },
        { id: 6, name: 'MySQL' },
        { id: 7, name: 'I18N' },
        { id: 8, name: 'Python' },
        { id: 9, name: 'C Programming' },
        { id: 10, name: 'PHP' },
        { id: 11, name: 'gsap' },
        { id: 12, name: 'typescript' },
        { id: 13, name: 'DRIVER.JS' },
        { id: 14, name: 'REDUX' },
        { id: 15, name: 'photoshop' },
        { id: 16, name: 'kali linux' },
        { id: 17, name: 'More' }
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
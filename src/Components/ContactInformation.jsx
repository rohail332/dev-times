
const ContactInformation = () => {

    const info = [
        { id: 1, name: 'Email Inquiry', value: 'mailto:rohailtahir332@gmail.com' },
        { id: 2, name: 'Linkedin', value: 'https://www.linkedin.com/in/muhammad-rohail-3457432b4/' },
        { id: 3, name: 'GITHUB', value: 'https://www.github.com/rohail332' },
        { id: 4, name: 'youtube', value: 'https://www.youtube.com/@OctoKnowz' },
        { id: 5, name: 'Instagram', value: 'https://www.instagram.com/rohailtahir31' },
        { id: 6, name: 'Medium', value: 'https://medium.com/@rohailtahir332' },
    ]

    return (
        <>
            <div className="bg-white border mt-10 p-6 text-center w-[18rem] max-sm:w-[21.6rem] fl-w max-md:w-[42.2rem] items-center max-lg:w-188">
                <div className=" text-[1.5rem] font-[1000] tracking-wide uppercase ">Connect Now</div>
                <p className="times mt-2"> "Operators are standing by to take your call."</p>
                <div className="mt-4 flex flex-col">
                    {info.map((data) => {
                        return <div key={data.id}>
                            <button onClick={() => { window.open(data.value, "_blank") }} className="border uppercase tracking-wider py-1 mb-2 w-full times cursor-pointer hover:bg-black hover:text-[#F1EDE5]">{data.name}</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default ContactInformation
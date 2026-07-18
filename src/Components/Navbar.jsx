
const Navbar = (props) => {
  return (
    <>
    <header>
        <nav className="border-b pb-3">
            <ul className="flex text-[0.9rem] tracking-wide justify-around pt-5 items-center text-center max-sm:flex-col max-sm:gap-2">
                <li className="font-semibold" >VOL. 2026 • DEV TIMES</li>
                <li  className="uppercase font-semibold">{props.date}</li>
                <li className="bg-[#2c2c2c] text-[#F1EDE5] py-[0.2rem] rounded-xs px-3">AVAILABLE FOR WORK</li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar

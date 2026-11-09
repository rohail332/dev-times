import Navbar from "./Components/Navbar";

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
     <Navbar date={dateShow()} />
    </>
  )
}

export default App

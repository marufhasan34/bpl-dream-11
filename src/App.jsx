import { Suspense, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
const fetchPlayer = async () => {
  const res = await fetch("data.json");
  return res.json();
};
function App() {
  const PlayersPromise = fetchPlayer();
  const [coin,setCoin] = useState(500000)
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players setCoin={setCoin} coin={coin} PlayersPromise={PlayersPromise}></Players>
      </Suspense>

      <Footer></Footer>



       <ToastContainer />
    </>
  );
}

export default App;

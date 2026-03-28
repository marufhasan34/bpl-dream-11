import { Suspense } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
const fetchPlayer = async () => {
  const res = await fetch("data.json");
  return res.json();
};
function App() {
  const PlayersPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players PlayersPromise={PlayersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;

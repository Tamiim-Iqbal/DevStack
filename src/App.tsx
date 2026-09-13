import { Suspense } from "react"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/NavBar/Navbar"
import Technologies from "./Components/Technologies/Technologies"
import type { ITechnology } from "./Components/types/technologyType"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const technologiesFetch = async(): Promise<ITechnology[]> => {
  const response = await fetch('/data.json')

  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data = await response.json()
  return data;
}

const technologiesPromise = technologiesFetch();

function App() {
  
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense fallback={<div className="text-center mb-10">Loading.....</div>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      
      <Footer></Footer>
      <ToastContainer position="bottom-right" autoClose={2000} />
      
    </>
  )
}

export default App

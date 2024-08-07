import SideBar from "./components/SideBar.jsx"
import Footer from "./components/Footer.jsx"
import Side1 from "./pages/Side1.jsx"
import Footer1 from "./pages/Footer1.jsx"
import { Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
    <div className="grid-display">
      <SideBar></SideBar>
      <main>
        <h1>que onda paa</h1>
        <Routes>
          <Route path="/side1" element={<Side1 />}></Route>
          <Route path="/footer1" element={<Footer1 />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App

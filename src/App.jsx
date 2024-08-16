import SideBar from "./components/SideBar.jsx"
import Footer from "./components/Footer.jsx"
import Footer1 from "./pages/Footer1.jsx"
import TasksPage from "./pages/TasksPage.jsx"
import Home from "./pages/Home.jsx"
import HelloUser from "./pages/HelloUser.jsx"
import { Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
    <div className="grid-display">
      <SideBar></SideBar>
      <main>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/task page" element={<TasksPage />}></Route>
					<Route path="/hello user" element={<HelloUser />}></Route>
          <Route path="/footer1" element={<Footer1 />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App

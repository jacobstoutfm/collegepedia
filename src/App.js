import Navbar from "./Navbar"
import Home from "./pages/Home"
import Schools from "./pages/Schools"
import Majors from "./pages/Majors"
import Students from "./pages/Students"
import Professors from "./pages/Professors"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/majors" element={<Majors />} />
          <Route path="/students" element={<Students />} />
          <Route path="/professors" element={<Professors />} />
        </Routes>
        <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
        </footer>
      </div>
    </>
  )
}

export default App
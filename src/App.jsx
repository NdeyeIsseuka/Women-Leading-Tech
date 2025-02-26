import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Events from "./pages/Events"
import Login from "./pages/Login"
import Participate from "./pages/Participate"
import Accueil from "./pages/Accueil"
import Share from "./pages/Share"



function App() {

  return (
    <>
    <div className="mx-0 px-0">

    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path="/participate" element={<Participate />} />
            <Route path="/share" element={<Share />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
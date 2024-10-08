import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <div className="w-full h-screen overflow-hidden overflow-y-auto no-scrollbar">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout

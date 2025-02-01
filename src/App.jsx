//package imports
import React from "react"
import { Routes, Route } from "react-router-dom"

//file imports
import OverviewPage from "./pages/overviewPage"
import ProductsPage from "./pages/productsPage"
import SideBar from "./components/sideBar.jsx"
import UsersPage from "./pages/usersPage.jsx"
import SalesPage from "./pages/salesPage.jsx"


export default function App() {
  return (
    <div className=" flex bg-gray-900 h-screen text-gray-100 overflow-hidden">

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80 " />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>


      <SideBar />


      {/* Routes */}
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
      </Routes>
    </div>
  )
}
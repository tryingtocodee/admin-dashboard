//package imports
import React from "react"
import { useState } from "react"

//framer motion import 
import { AnimatePresence, motion } from "framer-motion"

//icon imports
import { BarChart2, ShoppingBag, Settings, ShoppingCart, TrendingUp, Users, Menu, DollarSign } from "lucide-react"
import { Link } from "react-router-dom"


//components hard coded 
const SIDEBAR_ITEMS = [
    { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
    { name: "Products", icon: ShoppingBag, color: "#8B5cf6", href: "/products" },
    { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
    { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" }
]

export default function SideBar() {
    const [sideBarOpen, setSideBarOpen] = useState(true)
    return (
        <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${sideBarOpen ? "w-64" : "w-20"}`} animate={{ width: sideBarOpen ? 256 : 80 }}>
            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 ">

                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSideBarOpen(!sideBarOpen)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit">
                    <Menu size={24} />
                </motion.button>

                <nav className="mt-8  flex-grow">
                    {SIDEBAR_ITEMS.map((item, index) => (
                        <Link key={item.href} to={item.href}>
                            <motion.div className="flex p-4 items-center text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2  ">
                                {/* here minwidth : 20px makes sure icons size is not less 20px even if side bar closes*/}
                                <item.icon  size={20} style={{color:item.color , minWidth:"20px"}}/>

                                {/* animated close and open of side bar  */}
                                <AnimatePresence>
                                    {sideBarOpen && (
                                        <motion.span className="ml-4 whitespace-nowrap" initial={{ opacity:0 , width:0}} animate={{ opacity:1 ,width:"auto"}} exit={{ opacity:0 , width:0}} transition={{duration:0.2 , delay:0.4}}>
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div>
    )
}
//package imports
import React from "react"
import {motion} from "framer-motion"
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"

//file imports
import Header from "../components/common/header.jsx"
import StatCard from "../components/common/statCard.jsx"
import SalesOverviewChart from "../components/overviewPage/SalesOverviewChart.jsx"
import CategoryDistributionChart from "../components/overviewPage/CategoryDistributionChart.jsx"
import SalesChannelChart from "../components/overviewPage/SalesChannelChart.jsx"



export default function OverviewPage (){
    return (
        <div className="flex-1 overflow-auto z-10 relative">
            <Header title="Overview"/>
            
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">

                {/* STATS  y in the intial means y-axis*/}
                <motion.div className="grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8" initial={{opacity:0 , y:20}} animate={{opacity:1 , y:0}} transition={{duration:1}}>
                  <StatCard name="Total Revenue" icon={Zap} value='$1,200' color="#6366F1"/>
                  <StatCard name="New Users" icon={Users} value='500' color="#6366F1"/>
                  <StatCard name="Total Products" icon={ShoppingBag} value='200' color="#6366F1"/>
                  <StatCard name="Conversion Rate" icon={BarChart2} value='10%' color="#6366F1"/>
                </motion.div>


                {/* CHARTS */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <SalesOverviewChart />
                    <CategoryDistributionChart />
                    <SalesChannelChart />
                </div>
            </main>
        </div>
    )
}
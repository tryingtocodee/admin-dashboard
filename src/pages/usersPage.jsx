//package imports
import React from "react"
import { motion } from "framer-motion"


//file imports 
import Header from "../components/common/header.jsx"
import StatCard from "../components/common/statCard.jsx";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UsersTable from "../components/usersPage/usersTable.jsx";
import UserDemographicChart from "../components/usersPage/userDemographicChart.jsx";
import UserGrowthChart from "../components/usersPage/userGrowthChart.jsx";


//user stats
const userStats = {
    totalUsers: 152845,
    newUsersToday: 243,
    activeUsers: 98520,
    churnRate: "2.4%",
};

export default function UsersPage() {
    return (
        <div className="flex-1 overflow-auto z-10 relative">
            <Header title="Users" />
            <main className="max-w-7xl mx-auto px-4 py-6 lg:px-8 xl:px-20">
                <motion.div className="grid grid-cols-1 gap-5 lg:grid-cols-4 mb-8 sm:grid-cols-2 ">
                    <StatCard name="Total Users" icon={UsersIcon} value={userStats.totalUsers} color="#10B981" />
                    <StatCard name="Active Users" icon={UserCheck} value={userStats.activeUsers.toLocaleString()} color="#F59E0B" />
                    <StatCard name="New Users Today" icon={UserPlus} value={userStats.newUsersToday} color="#10B981" />
                    <StatCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
                </motion.div>

                {/*User tables and charts*/}
                <UsersTable />
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <UserDemographicChart />
                    <UserGrowthChart />
                </div>
            </main>
        </div>
    )
}
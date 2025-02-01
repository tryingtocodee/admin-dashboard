//package imports
import {motion} from "framer-motion"

import { ResponsiveContainer , LineChart , CartesianGrid, XAxis , YAxis , Tooltip ,Line } from "recharts"

const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];


export default function UserGrowthChart (){
    return(
        <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 " initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h2 className="text-lg font-medium mb-4 text-gray-100">User Growth</h2>
        <div className='h-80'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={userGrowthData} >
                    <CartesianGrid strokeDasharray='3 3' stroke="#4B5563" />
                    <XAxis dataKey={"month"} stroke='#9ca3af' />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: "rgba(31 , 41 , 55 , 0.8)", borderColor: "#4B5563" }} itemStyle={{ color: "#E5E7EB" }} />
                    <Line type='monotone' dataKey='users' stroke="#6366F1" strokeWidth={3} dot={{ fill: "#63C6F1", strokeWidth: 2, r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
    )
}
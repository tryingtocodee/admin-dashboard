import {motion} from "framer-motion"
import { ResponsiveContainer , Bar , XAxis , YAxis , CartesianGrid , Tooltip , Legend , Cell , BarChart } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];


const SalesChannelChart = () =>{
    return (
        <motion.div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 backdrop-blur-md lg:col-span-2 border border-gray-700">
            <h2 className="text-xl font-medium mb-4 text-gray-100">Slaes Channel Chart</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <BarChart data={SALES_CHANNEL_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563"/>
                        <XAxis dataKey="name" stroke="#9CA3AF"/>
                        <YAxis stroke="#9CA3AF"/>
                        <Tooltip contentStyle={{backgroundColor:"rgba(31 , 41, 55, 0.8)" , borderColor:"#4B5563"}} itemStyle={{color: "#E5E7EB"}}/>
                        <Legend />
                        <Bar dataKey={"value"} fill="#8884D8">
                            {/*this will show different colored bars */}
                            {SALES_CHANNEL_DATA.map((enty, index)=>(
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </motion.div>
    )
}

export default SalesChannelChart
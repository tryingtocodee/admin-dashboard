//package imports
import { motion } from "framer-motion"
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid , Line , Tooltip} from "recharts"

const salesData = [
    { name: "Jul", sales: 4200 },
    { name: "Aug", sales: 3800 },
    { name: "Sep", sales: 5100 },
    { name: "Oct", sales: 4600 },
    { name: "Nov", sales: 5400 },
    { name: "Dec", sales: 7200 },
    { name: "Jan", sales: 6100 },
    { name: "Feb", sales: 5900 },
    { name: "Mar", sales: 6800 },
    { name: "Apr", sales: 6300 },
    //{ name: "May", sales: 7100 },
    { name: "Jun", sales: 7500 },
]


const SalesTrendChart = () => {
    return (
        <motion.div className="bg-gray-800 bg-opacity-50 shadow-lg rounded-xl p-6 border border-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-gray-100 font-medium text-lg mb-4 "> Sales Trend Chart </h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={salesData}>
                        <XAxis dataKey={"name"} stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip contentStyle={{ backgroundColor: "rgba(31 , 41 , 55 , 0.8)", borderColor: "#4B5563" }} itemStyle={{ color: "#E5E7EB" }}/>
                       <Line type="monotone" dataKey="sales"  strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>

            </div>


        </motion.div>
    )
}
export default SalesTrendChart
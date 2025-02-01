import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const userDemographicsData = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];


export default function UserDemographicChart(){
    return (
         <motion.div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg backdrop:-blur-md bg-opacity-50 mr-5" initial={{opacity:0 , y: 20}} animate={{opacity : 1 , y:0}} transition={{delay:0.3}}>
                    <h2 className="text-lg font-medium text-gray-100">
                        Category Distribution 
                    </h2>
                    <div className="h-80">
                        <ResponsiveContainer height={"100%"} width={"100%"}>
                            <PieChart>
                                <Pie data={userDemographicsData} cx={"50%"} cy={"50%"} labelLine={false} outerRadius={80} fill="#8884d8" dataKey='value' 
                                    /* label shows the percent beside the name */
                                label={({name , percent})=> `${name} ${(percent * 100).toFixed(0)}%`}>
                                {userDemographicsData.map((entry , index)=>(
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                    ))}
                                </Pie>
                                    <Tooltip contentStyle={{backgroundColor : "rgba(31 , 41 , 55 , 0.8)" , borderColor:"#4B5563"}} itemStyle={{color: "#E5E7EB"}} />
                                    <Legend/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
    )
}
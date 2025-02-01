import {motion} from "framer-motion"
//this is how you change the props to react elements
export default function StatCard({name , icon:Icon , value , color }){
    return (
        <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
        whileHover={{y:-5 , boxShadow:"0 25px 50px -12px rgba(0 , 0 , 0 , 0.5)"}}>
            <div className="px-4 py-5 sm:p-6">
                <span className="flex items-center text-sm font-medium text-gray-400">
                <Icon size={20} className="mr-2" style={{color}}/>
                {name}
                </span>
                <p className="text-3xl mt-1  font-semibold text-gray-100 ">
                    {value}
                </p>
            </div>
        </motion.div>
    )
}
//package imports
import React , { useState} from "react"
import {motion} from "framer-motion"
import { Edit, Search, Trash2 } from "lucide-react";

//file imports


const userData = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

export default function UsersTable(){
	const [searchTerm , setSearchTerm] = useState("")
	const [filteredUsers , setFilteredUsers] = useState(userData)

	const handleFilter = (e) =>{
		e.prevent.defautl()
		const term = e.target.value.toLowerCase()

		const filter = userData.map(data => data.name.toLowerCase().includes(term) || data.email.toLowerCase().includes(term))
		setFilteredUsers(term)
	}


    return (
        <motion.div className="bg-gray-800 bg-opacity-80 p-6 shadow-lg border border-gray-700 rounded-xl mb-8" initial={{opacity:0 , y:20}} animate={{opacity:1 , y: 0}} transition={{dealy:0.3}}>
			<div className="flex items-center justify-between mb-6">
			<h2 className="text-xl text-gray-100 font-medium mb-4">Users</h2>
			<div className="relative">
				<input type="text" placeholder="Search Users ..." className="bg-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 pl-10  focus:outline-none pr-4 py-2 focus:ring-blue-500" value={searchTerm} onChange={handleFilter} />
				<Search className="absolute left-3 top-2.5 text-gray-400" size={20}/>
			</div>
			</div>
			{/*tables div*/}
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-700">
					<thead>
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
								Name
							</th>
							<th className="text-xs font-medium text-left text-gray-400 px-6 py-3 uppercase tracking-wide">
								email
							</th>
							<th className="text-xs font-medium text-left text-gray-400 px-6 py-3 uppercase tracking-wide">
								role
							</th>
							<th className="text-xs font-medium text-left text-gray-400 px-6 py-3 uppercase tracking-wide">
								status
							</th>
							<th className="text-gray-400 uppercase text-left px-6 py-3 text-xs font-medium">
								action
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredUsers.map(users => (
							<motion.tr key={users.id} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
								<td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-3 items-center">
									<img src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww" alt="" className="size-10 rounded-full"/>
									{users.name}
								</td>
								<td className="text-sm text-gray-400 px-6 py-3 whitespace-nowrap">
									{users.email}
								</td>
								<td className="text-sm text-gray-400 px-6 py-3 whitespace-nowrap">
								<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
										{users.role}
									</span>
								</td>
								<td className="text-sm text-gray-400 px-6 py-3 whitespace-nowrap">
								<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											users.status === "Active"
												? "bg-green-800 text-green-100"
												: "bg-red-800 text-red-100"
										}`}
									>
									{users.status}
									</span>
								</td>
								<td>
									<button className="text-indigo-400 hover:text-indigo-300">
										<Edit size={20}/>
									</button>
									<button className="pl-3 text-red-700 hover:text-red-500">
										<Trash2  size={20}/>
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>

        </motion.div>
    )
}
//package imports 
import {motion} from "framer-motion"
import { Edit , Trash2 , Search  , Edit2, Edit2Icon} from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const ProductsTable = () =>{
    const [seachTerm , setSearchTerm] = useState("")
    const [filterProducts , setFilterProducts] = useState(PRODUCT_DATA)

    const handleFilter = (e)=>{
        const term = e.target.value.toLowerCase()
        setSearchTerm(term)

        const filter = PRODUCT_DATA.filter(products => products.name.toLowerCase().includes(term) || products.category.toLowerCase().includes(term))
        setFilterProducts(filter)
    }
    return (
        <motion.div className="bg-gray-800 bg-opacity-80 p-6 shadow-lg border border-gray-700 rounded-xl mb-8" initial={{opacity:0 , y:20}} animate={{opacity:1 , y: 0}} transition={{dealy:0.3}}>

            <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-100 font-medium text-xl mb-4">Products List</h2>
            <div className="relative">
                <input type="text" placeholder="Search Products..." className="bg-gray-700 text-white placeholder-gray-400 rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value ={seachTerm} onChange={handleFilter}/>
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            </div>
            {/*tr mean table row th mean table head*/}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    {/* thead means table head*/}
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                Category
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                stocks
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                sales
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                actions
                            </th>
                        </tr>
                    </thead>
                    {/* tbody means table body*/}
                    <tbody>
                        {filterProducts.map(product =>(
                            <motion.tr key={product.id} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                                    <img src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww" alt="" className="size-10 rounded-full" />
                                    {product.name}
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-300">
                                    {product.category}
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-300">
                                    {product.price.toFixed(2)}
                                </td>
                                <td className="px-6 py-3 text-sm text-gray-300 whitespace-nowrap">
                                    {product.stock}
                                </td>
                                <td className="px-6 py-3 text-sm text-gray-300 whitespace-nowrap">
                                    {product.sales}
                                </td>
                                <td className="px-6 py-3 text-sm text-gray-300 whitespace-nowrap">
                                    <button className="text-indigo-400 hover:text-indigo-300">
                                        <Edit size={20}/>
                                    </button>
                                    <button className="text-red-600 hover:text-red-400 pl-3">
                                        <Trash2 size={20}/>
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

export default ProductsTable
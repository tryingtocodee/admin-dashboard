import React from "react"

export default function Header({title}){
    return (
      <div className="bg-gray-800 drop-shadow-sm  items-center text-3xl">
        <div className=" py-6 px-4 mx-auto sm:px-6 lg:px-8">
            {title}
        </div>
      </div>
    )
}
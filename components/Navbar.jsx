import React from 'react'


const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
            <div className="flex items-center">
                <h1>LOGO</h1>
            </div>
            <div className="flex items-center">
                <img src="/vite.svg" alt="menu" srcset="menu" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
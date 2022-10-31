import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import log from "../public/logo.svg"

function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-100 w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md navc`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">



            </div>
            <div className=" flex flex-col z-100 ml-4 ">
                <Link className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <div className='mob'>Our Readers</div>
                </Link>
                <Link className="text-xl font-medium my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <div className='mob'>About Us</div>
                </Link>
                <Link className="text-xl font-medium my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <div className='mob'>Team</div>
                </Link>
                <Link className="text-xl font-medium my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <div className='mob'>Contact us</div>
                </Link>
                <Link className="text-xl font-medium my-4" href="/login" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <div className='mob mlog'><div className="log "><button >Login</button></div></div>
                </Link>
                <Link className="text-xl font-medium my-4" href="/signup" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <div className='mob mlog'><div className="sin "><button >Signup</button></div></div>

                </Link>
            </div>
        </div>
    )

}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link href="/" className="text-2xl font-semibold cursor-pointer" ><Image src={log} /></Link>

            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className=" flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
                    setOpen(!open)
                }}>

                    <span className={`h-1 w-full bg-green-600 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-green-600 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-green-600 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden lg:flex">
                    <NavLink to="/contact">
                        Our Readers
                    </NavLink>
                    <NavLink to="/about">
                        About Us
                    </NavLink>
                    <NavLink to="/about">
                        Team
                    </NavLink>
                    <NavLink to="/contact">
                        Contact us
                    </NavLink>
                    <NavLink to="/login" >
                        <div className="log"><button >Login</button></div>

                    </NavLink>
                    <NavLink to="/signup" >
                        <div className="sin"><button >Signup</button></div>

                    </NavLink>

                </div>
            </div>
        </nav >
    )
    /*
    return (
        <nav class="flex items-center justify-between flex-wrap bg-white-800 p-6 filter drop-shadow-md bg-white  ">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/" className=" font-semibold" ><Image src={log} /></Link>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2  rounded text-green-700  hover:text-green-700 ">
                    <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-xl lg:flex-grow mt-4">
                    <a href="#responsive-header" class="text-xl block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-700 mr-8">
                    Our Readers
                    </a>
                    <a href="#responsive-header" class="text-xl block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-700 mr-8">
                    About Us
                    </a>
                    <a href="#responsive-header" class="text-xl block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-700 mr-8">
                    Team
                    </a>
                    <a href="#responsive-header" class="text-xl block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-700 mr-8">
                    Contact us
                    </a>
                    
                </div>
                <div className='mt-4'>
                    <a href="#" class="inline-block text-xl px-7 py-2 leading-none border rounded text-green-700 border-green-700 bg-white-700 hover:border-green hover:text-white hover:bg-green-700 mt-4 lg:mt-0 mr-4">Login</a>
                   

                </div>
                <div className='mt-4'>
                    
                    <a href="#" class="inline-block text-xl px-7 py-2 leading-none border rounded text-white border-green bg-green-700 hover:border-green-700 hover:text-green-700 hover:bg-white mt-4 lg:mt-0">Signup</a>

                </div>
            </div>
        </nav>
    )
    */
}
import React, { useState } from 'react'
import logo from "../../assets/Logo.png"
import { CiMenuFries } from "react-icons/ci";

import Container from '../Container/Container'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const drop = () =>{
        console.log("szdv");
        setDropdown(!dropdown);
    }
    return (
        <div className='bg-[#F40404]'>
            <Container>
                <div className='container'>
                    <div className="md:flex items-center">
                        <div className="flex justify-between logo md:w-1/2">
                            <img src={logo} alt="logo" />
                            <CiMenuFries onClick={drop} className='text-white text-[30px] md:hidden block cursor-pointer'/>
                        </div>
                        <div className='md:w-1/2'>
                            
                            <ul className={`${dropdown ? "bg-transparent mt-5" : "md:flex hidden justify-end gap-x-[47px] text-white items-center "}`} >
                                <li className='hover:border-b-2  text-white'><a href="#">Home</a></li>
                                <li className='hover:border-b-2 text-white'><a href="#">About</a></li>
                                <li className='hover:border-b-2 text-white'><a href="#">Services</a></li>
                                <li className='hover:border-b-2 text-white'><a href="#">Gallery</a></li>
                                <li className='hover:border-b-2 text-white'><a href="#">Blog</a></li>
                                <li className='text-white border-[2px] text-center  py-[6px] px-[10px] md:py-[13px] md:px-[40px] hover:bg-white md:mt-0 mt-6 hover:text-black duration-700'><a href="#">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
//  ''
export default Navbar
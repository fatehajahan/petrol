import React from 'react'
import logo from "../../assets/Logo.png"
import Container from '../Container/Container'

const Navbar = () => {
    return (
        <div className='bg-[#F40404]'>
            <Container>
                <div className="flex items-center">
                    <div className="logo w-1/2">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="w-1/2 ">
                        <ul className='flex justify-end gap-x-[47px] text-white items-center '>
                            <li className='hover:border-b-2 '><a href="#">Home</a></li>
                            <li className='hover:border-b-2'><a href="#">About</a></li>
                            <li className='hover:border-b-2'><a href="#">Services</a></li>
                            <li className='hover:border-b-2'><a href="#">Gallery</a></li>
                            <li className='hover:border-b-2'><a href="#">Blog</a></li>
                            <li className='border-[2px] py-[13px] px-[31px] hover:bg-white hover:text-black duration-700'><a href="#">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
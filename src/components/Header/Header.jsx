import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Container from '../Container/Container';



const Header = () => {
    return (
        <div className='bg-[#282828] text-white border-b-[5px] border-b-[#FFB800] '>
            <Container>
                <div className='flex'>
                    <div className='flex w-1/2 gap-x-[54px]'>
                        <div className='relative flex items-center gap-x-[5px] after:absolute after:content-[""] after:w-[1px] after:h-[16px] after:bg-[#5C6A92] after:top-[20%] after:right-[-27px]'>
                            <IoMailUnreadOutline className='text-[20px]' />
                            <p className='text-[12px]'>mail@yourcompany.com</p>
                        </div>
                        <div className='flex items-center gap-x-[5px]'>
                            <FaPhoneVolume className='text-[20px]' />
                            <p className='text-[12px]'>+896 120 5889 (Toll free)</p>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-end gap-x-[19px]'>
                        <FaFacebookF className='text-[16px]' />
                        <FaTwitter className='text-[16px]' />
                        <FaLinkedinIn className='text-[16px]' />
                        <FaInstagram className='text-[16px]' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
import React from 'react'
import logo from "../../assets/logoFooter.png"
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFacebookSquare , FaTwitterSquare , FaLinkedin , FaInstagramSquare } from "react-icons/fa";

import Container from '../Container/Container'

const Footer = () => {
  return (
    <div className='bg-[#1F1F1F] pt-[140px] pb-[260px]'>
      <div className="footerup">
        <Container>
          <div className="left-side">
            <img src={logo} alt="" />
            <div className="mail pt-[33px]">
              <p className='relative flex text-white gap-x-[9px] text-[14px]'>< IoMailUnreadOutline className='text-[20px]' /> mail@yourcompany.com</p>
            </div>

            <div className="phone pt-[19px]">
              <p className='relative flex text-white gap-x-[9px] text-[14px]'>< MdOutlinePhoneInTalk className='text-[20px]' />+896 120 5889 (Toll free)</p>
            </div>

            <div className="location pt-[19px]">
              <p className='relative flex text-white gap-x-[9px] text-[14px]'>< TfiLocationPin className='text-[20px]' />101 Baker Street, New York, USA, 12345</p>
            </div>

            <div className="socialIcons flex gap-x-[10px] text-[30px] mt-[34px]">
              <FaFacebookSquare className='text-[#F40404] text-[30px] rounded-full'/>
              <FaTwitterSquare className='text-[#F40404] rounded-full'/>
              <FaLinkedin className='text-[#F40404] '/>
              <FaInstagramSquare className='text-[#F40404] '/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import logo from "../../assets/logoFooter.png"
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import cert1 from "../../assets/Cert1.png"
import cert2 from "../../assets/Cert2.png"

import Container from '../Container/Container'

const Footer = () => {
  return (
    <div>
      <div className="footerup bg-[#1F1F1F] pt-[140px] pb-[260px]">
        <Container>
          <div className="flex items-center">
            <div className="left-side pr-[145px] ">
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
                <FaFacebookSquare className='text-[#F40404] text-[30px] rounded-full' />
                <FaTwitterSquare className='text-[#F40404] rounded-full' />
                <FaLinkedin className='text-[#F40404] ' />
                <FaInstagramSquare className='text-[#F40404] ' />
              </div>
            </div>

            <div className="right-side flex">
              <div className="company pr-[133px]">
                <ul className='text-white'>
                  <li className='font-bold text-[16px]'>Company</li>
                  <li className='pt-[21px]'>Home</li>
                  <li className='pt-[15px]'>About</li>
                  <li className='pt-[15px]'>Services</li>
                  <li className='pt-[15px]'>Gallery</li>
                </ul>
              </div>

              <div className="company pr-[60px]">
                <ul className='text-white'>
                  <li className='font-bold text-[16px]'>Others</li>
                  <li className='pt-[21px]'>Blog</li>
                  <li className='pt-[15px]'>Contact</li>
                  <li className='pt-[15px]'>Terms & Conditions</li>
                  <li className='pt-[15px]'>Privacy Policy</li>
                </ul>
              </div>

              <div className="Certificate ml-[10px]">
                <h2 className='text-[16px] font-bold text-white pb-[21px]'>Certificate</h2>
                <ul className='flex gap-x-5'>
                  <img src={cert1} alt="" />
                  <img src={cert2} alt="" />
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="footerbottom bg-[#282828]">
        <Container>
          <h2 className='text-[#6C6C6C] text-[16px] font-medium py-[35px]'>© Copyright 2022 by AltDesain Studio – All right reserved.</h2>
        </Container>
      </div>
    </div>
  )
}

export default Footer
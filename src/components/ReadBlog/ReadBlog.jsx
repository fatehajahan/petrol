import React from 'react'
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"
import { IoIosArrowForward } from "react-icons/io";
import Container from '../Container/Container'

import ReadBlogOther from '../ReadBlogOther/ReadBlogOther'

const ReadBlog = () => {
    return (
        <div className='bg-[#F0F0F0] pt-[110px] pb-[162px]'>
            <Container>
                <div className="flex justify-between ">
                    <ReadBlogOther>
                        <img src={blog1} alt="" />
                        <p className='absolute top-0 left-0 text-[24px] font-bold text-white w-[249px] pt-[75px] pl-[46px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    </ReadBlogOther>

                    <ReadBlogOther>
                        <img src={blog2} alt="" />
                        <p className='absolute top-0 left-0 text-[24px] font-bold text-white w-[249px] pt-[75px] pl-[46px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    </ReadBlogOther>

                    <ReadBlogOther>
                        <img src={blog3} alt="" />
                        <p className='absolute top-0 left-0 text-[24px] font-bold text-white w-[249px] pt-[75px] pl-[46px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    </ReadBlogOther>
                </div>

                <div className="blogBtn flex justify-end pt-[29px] text-[16px] font-bold">
                    <a href="#" className='flex hover:text-[#F40404] duration-700'>MORE FROM THE BLOG<IoIosArrowForward className='text-[25px] font-bold ml-[3px] '></IoIosArrowForward></a>
                </div>
            </Container>
        </div>
    )
}

export default ReadBlog
import React from 'react'
import Container from '../Container/Container'
import learn from "../../assets/learn.png"

const Learn = () => {
    return (
        <div className='bg-[#F0F0F0] py-[136px]'>
            <Container>
                <div className="flex">
                    <div className="w-[37%] bg-[#F40404]">
                        <h2 className='w-[285px] pt-[100px] pl-[74px] pb-[99px] text-white text-[36px] font-bold'>Learn more about our company</h2>
                    </div>
                    <div className="image relative">
                        <img src={learn} alt="" className='h-[390px]'/>
                        <a href="#" className='bg-white text-[#F40404] font-semibold py-[13px] px-[30px] absolute top-0 left-0 mt-[190px] mb-[142px] mx-[282px] hover:bg-[#F40404] hover:text-white duration-700'>Learn More</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Learn
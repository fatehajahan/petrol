import React from 'react'
import Container from '../Container/Container'
import service1 from "../../assets/services1.png"
import ServiceOther from '../ServiceOther/ServiceOther'

const Services = () => {
    return (
        <div className='px-5 md:px-0'>
            <div className='md:pt-[28px] pt-[20px] md:flex items-center'>
            <div className="md:w-1/2">
                <div className='md:ml-[380px] md:text-left md:pl-0 pb-[20px] md:pb-0'>
                    <h3 className='md:text-[64px] text-[40px] font-bold'>Our Services</h3>
                    <p className='md:w-[405px] w-full text-justify font-medium md:text-[16px] text-[18px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>

            <div className="md:w-1/2">
                <div className='bg-service1 bg-cover bg-no-repeat bg-center'>
                    <ServiceOther>
                        <h2 className='md:text-[36px] text-[20px] font-bold md:pl-[116px] text-center'>Modern natural oil and gas refineries.</h2>
                        <div className="mt-[19px] md:ml-[116px] text-center">
                            <a href="#" className='md:text-base text-[12px] text-white font-semibold md:py-[13px] py-[6px] px-[10px] md:px-[40px] bg-[#F40404] hover:bg-white hover:text-black duration-700'>LEARN MORE</a>
                        </div>
                    </ServiceOther>
                </div>
            </div>
            </div>

            
            <div className="md:flex">
            <div className="md:w-1/2">
                <div className='bg-service2 bg-cover bg-no-repeat bg-center'>
                    <ServiceOther>
                        <h2 className='md:text-[36px] text-[20px] font-bold md:pl-[116px] text-center'>National fuel distribution and supply.</h2>
                        <div className="mt-[19px] md:ml-[116px] text-center">
                            <a href="#" className='md:text-base text-[12px] text-white font-semibold md:py-[13px] py-[6px] px-[10px] md:px-[40px] bg-[#F40404] hover:bg-white hover:text-black duration-700'>LEARN MORE</a>
                        </div>
                    </ServiceOther>
                </div>
            </div>

            <div className="md:w-1/2">
                <div className='bg-service3 bg-cover bg-no-repeat bg-center'>
                    <ServiceOther>
                        <h2 className='md:text-[36px] text-[20px] font-bold md:pl-[116px] text-center'>Modern natural oil and gas refineries.</h2>
                        <div className="mt-[19px] md:ml-[116px] text-center">
                            <a href="#" className='md:text-base text-[12px] text-white font-semibold md:py-[13px] py-[6px] px-[10px] md:px-[40px] bg-[#F40404] hover:bg-white hover:text-black duration-700'>LEARN MORE</a>
                        </div>
                    </ServiceOther>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services
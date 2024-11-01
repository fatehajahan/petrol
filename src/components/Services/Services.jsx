import React from 'react'
import Container from '../Container/Container'
import service1 from "../../assets/services1.png"
import ServiceOther from '../ServiceOther/ServiceOther'

const Services = () => {
    return (
        <div>
            <div className='pt-[28px] flex items-center'>
            <div className="w-1/2">
                <div className=' ml-[380px]'>
                    <h3 className='text-[64px] font-bold'>Our Services</h3>
                    <p className='w-[405px] font-medium text-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>

            <div className="w-1/2">
                <div className='bg-service1 bg-cover bg-no-repeat bg-center'>
                    <ServiceOther>
                        <h2 className='text-[36px] font-bold pl-[116px]'>Modern natural oil and gas refineries.</h2>
                        <div className="mt-[19px] ml-[116px]">
                            <a href="#" className=' text-white font-semibold py-[13px] px-[40px] bg-[#F40404] hover:bg-white hover:text-black duration-700'>LEARN MORE</a>
                        </div>
                    </ServiceOther>
                </div>
            </div>
            </div>

            
            <div className="flex">
            <div className="w-1/2">
                <div className='bg-service2 bg-cover bg-no-repeat bg-center'>
                    <ServiceOther>
                        <h2 className='text-[36px] font-bold pl-[116px]'>National fuel distribution and supply.</h2>
                        <div className=" mt-[19px] ml-[116px]">
                            <a href="#" className='hover:bg-white hover:text-black duration-700 text-white font-semibold py-[13px] px-[40px] bg-[#F40404] '>LEARN MORE</a>
                        </div>
                    </ServiceOther>
                </div>
            </div>

            <div className="w-1/2">
                <div className='bg-service3 bg-cover bg-no-repeat bg-center'>
                    <ServiceOther>
                        <h2 className='text-[36px] font-bold pl-[116px]'>Modern natural oil and gas refineries.</h2>
                        <div className=" mt-[19px] ml-[116px]">
                            <a href="#" className=' text-white font-semibold py-[13px] px-[40px] bg-[#F40404] hover:bg-white hover:text-black duration-700'>LEARN MORE</a>
                        </div>
                    </ServiceOther>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services
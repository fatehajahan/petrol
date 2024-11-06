import React from 'react'
import Container from '../Container/Container'

const Supplier = () => {
    return (
        <div>
            <Container>
                <div className="md:flex items-center pt-[78px] text-center">
                    <div className="md:w-1/2 font-bold md:text-[48px] text-[35px]">
                        <h2 className='md:w-[330px] w-[315px]'>The biggest supplier on the country</h2>
                    </div>
                    <div className="md:w-1/2 ">
                        <p className='md:w-[610px] w-[320px] md:text-left text-justify md:pt-0 pt-[10px]' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Supplier
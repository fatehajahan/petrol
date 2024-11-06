import React from 'react'
import logoOne from "../../assets/Logo1.png"
import logoTwo from "../../assets/Logo2.png"
import logoThree from "../../assets/Logo3.png"
import logoFour from "../../assets/Logo4.png"
import Container from "../Container/Container"

const Logos = () => {
    return (
        <div>
            <Container>
                <div className="md:flex md:py-[117px] justify-between ">
                    <img src={logoOne} alt="" className='px-[50px] md:px-0'/>
                    <img src={logoTwo} alt="" className='px-[50px] md:px-0'/>
                    <img src={logoThree} alt="" className='px-[50px] md:px-0'/>
                    <img src={logoFour} alt="" className='px-[50px] md:px-0'/>
                </div>
            </Container>
        </div>
    )
}

export default Logos
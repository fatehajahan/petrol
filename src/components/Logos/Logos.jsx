import React from 'react'

import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"
import Container from "../Container/Container"

const Logos = () => {
    return (
        <div>
            <Container>
                <div className="flex py-[117px] justify-between">
                    
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Logos
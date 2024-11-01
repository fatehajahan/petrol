import React from 'react'
import logoOne from "../../assets/logo1.png"
import logoTwo from "../../assets/logo2.png"
import logoThree from "../../assets/logo3.png"
import logoFour from "../../assets/logo4.png"
import Container from "../Container/Container"

const Logos = () => {
    return (
        <div>
            <Container>
                <div className="flex py-[117px] justify-between">
                    <img src={logoOne} alt="" />
                    <img src={logoTwo} alt="" />
                    <img src={logoThree} alt="" />
                    <img src={logoFour} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Logos
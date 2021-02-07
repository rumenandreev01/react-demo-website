import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'


import {homeObjOne} from './Data'

function SignUp() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <Pricing/>
           
        </>
    )
}

export default SignUp
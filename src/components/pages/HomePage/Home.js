import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'


import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjFour}/>
            <Pricing/>
            <HeroSection {...homeObjThree}/>
           
        </>
    )
}

export default Home

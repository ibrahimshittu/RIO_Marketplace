import React from 'react'
import styled from 'styled-components'
import HIWCard from './HIWCard';

function HowItWorks() {
    return (
        <Container>
            <Heading>Create and sell your NFTs</Heading>
            <HIW>
                <HIWCard number="1" header="Connect Your Wallet" 
                desc="Download and create your wallet and connect it to OpenSea  by clicking on the connect wallet Icon on the top right hand corner"/>
                <HIWCard number="2" header="Create Your Collection" 
                desc="Create your unique NFT by clicking on create. Write a description and social links"/>
                <HIWCard number="3" header="Add Collection" 
                desc="Download and create your wallet and connect it to OpenSea"/>
                <HIWCard number="4" header="List them for sale" 
                desc="Download and create your wallet and connect it to OpenSea"/>
            </HIW>
            
        </Container>
    )
}

export default HowItWorks

const Container= styled.div`

`

const Heading= styled.div`
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    margin: 30px 30px;

`

const HIW= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #141414;

    HIWCard {
        margin: 20px;
    }

`

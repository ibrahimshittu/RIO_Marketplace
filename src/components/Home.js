import React from 'react'
import styled from 'styled-components'
import Hero from './Hero';
import Collections from './Collections';
import HowItWorks from './HowItWorks';
import Newsletter from './Newsletter';
import { useEffect, useState } from 'react';
import axios from 'axios';




function Home() {
    
    const [NFTdata, setNFTdata] = useState([])

    useEffect(() => {
        const getNFTs = async () => {
        const openseaData = await axios('https://cryptopunk-clone-server.herokuapp.com', {headers: {'Access-Control-Allow-Origin': '*'}}) // returns array of nfts info
        console.log("data", openseaData.data.assets)
        setNFTdata(openseaData.data.assets)

        }
        return getNFTs()
    }, [])

    return (
        <Container>
            <Hero/>
            { NFTdata.length > 0 &&
            (<Collections />) }
            <HowItWorks />
            <Newsletter/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:  0 calc(3.5vw + 5px);    
`

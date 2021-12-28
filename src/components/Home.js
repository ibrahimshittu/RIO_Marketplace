import React from 'react'
import styled from 'styled-components'
import Hero from './Hero';
import Collection from './Collections';
import HIWCard from './HIWCard';


function Home() {
    return (
        <Container>
            <Hero/>
            <Collection />
            <HIWCard />
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:  0 calc(3.5vw + 5px);    
`

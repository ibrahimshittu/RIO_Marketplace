import React from 'react'
import styled from 'styled-components'
import Hero from './Hero';
import Collections from './Collections';
import HowItWorks from './HowItWorks';
import Newsletter from './Newsletter';




function Home() {
    return (
        <Container>
            <Hero/>
            <Collections />
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

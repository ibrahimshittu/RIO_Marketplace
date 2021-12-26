import React from 'react'
import styled from 'styled-components'
import Hero from './Hero';

function Home() {
    return (
        <Container>
            <Hero/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:  0 calc(3.5vw + 5px);    
`

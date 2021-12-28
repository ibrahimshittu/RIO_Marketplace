import React from 'react'
import styled from 'styled-components'

function HIWCard() {
    return (
        <Container>
            <Number>
                1
            </Number>
            <Main>
                Connect Your Wallet
            </Main>
            <Desc>
                Download and create your wallet and connect it to OpenSea  by clicking on the connect wallet Icon on the top right hand corner
            </Desc>
            
        </Container>
    )
}

export default HIWCard

const Container = styled.div`
    height: 200px;
    width: 240px;
    border: 1px solid #b10ffe;
    border-radius: 10%;

`
const Number = styled.div`
    Background: #b10ffe;
    height: 22px;
    width: 22px;
    margin: 12px 31px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Main = styled.div`
    font-size: 18px;
    line-height: 15px;
    margin: 12px 31px;
    font-weight: 600;

`
const Desc = styled.div`
    font-size: 12px;
    margin: 22px 31px;
    font-weight: 600;

`

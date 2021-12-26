import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Hero() {
    return (
        <HeroSection>
            <AdSection>
                <Text> <a>Metaverse</a> all inclusive marketplace</Text>
                <p>Explore, buy and sell rare collections of amazing NFTs</p>
                <Buttons> 
                    <Button text="Get Started" color= "#b10ffe" borderColor="none" icon_one={true}  />
                    <Button text="How it Works" color= "#141414" borderColor="1px solid #b10ffe" icon_two={true}/>
                </Buttons>
            </AdSection>
            <ImgSection src="/images/NFT Card.svg" alt="HeroImg">
            </ImgSection>
        </HeroSection>
    )
}

export default Hero

const HeroSection = styled.div`
    display: flex;
    align-items: top;
    justify-content: center;
    width: calc(455px+682px);
    margin: 0 30px;
    
    `
const AdSection = styled.div`
    font-size: 64px;
    width: 760px;
    margin-top: calc(640px - 540px);

    p {
        font-size: 24px;
        line-height: 31px;
    }

    
`
const ImgSection = styled.img`
    width: calc(533px / 1.5);
    height: 640px;
    
`
const Text = styled.div`
    font-weight: bold;
    font-size: 64px;
    line-height: 83px;

    a {
        color: #B10FFE
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0;

    button {
        margin-left: 0;
        margin-right: 20px;
    }

`
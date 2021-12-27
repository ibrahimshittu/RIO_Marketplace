import React from 'react'
import styled from 'styled-components'

function NFTCard() {
    return (
        <Container>
            <NFTImg src="/images/Group 5.png"/>
            <NFTDetails>
                <Price>
                    <UserImg>
                        <img src="/images/Ellipse 6.svg" />
                        Username
                    </UserImg>
                    <Pricing>
                        <PriceEth>0.5</PriceEth>
                        <PriceDolls>$2800</PriceDolls>
                    </Pricing>

                </Price>
                <BidButtons>
                    <Button1>
                        Place Bid
                    </Button1>

                </BidButtons>

            </NFTDetails>
            
        </Container>
    )
}

export default NFTCard

const Container = styled.div`
    width: 250px;
    // display: flex
    // justify-content: flex-end;
    // align-items: center;
    
    

`

const NFTImg = styled.img`
    margin: 20px 10px;
    height: 250px;
    margin: 0;
    padding: 0;
    width: 100%;

`

const NFTDetails = styled.div`
    
    width: 100%;
    background: black;

    
    

`

const Price = styled.div`
    margin-top:0;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    Justify-content: space-between;

    
    


`

const BidButtons = styled.div`

`

const UserImg = styled.div`

    display: flex;
    align- items: center;
    Justify-content: center;

    img {
        height: 25px;
        margin-right: 8px;
     }

`

const Pricing = styled.div`
    

`
const PriceEth = styled.div`
    

`
const PriceDolls = styled.div`
    

`

const Button1 = styled.button`
    width: 80%;
    padding: 8px 0;
    background: #b10ffe;
    color: white;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    

`
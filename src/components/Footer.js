import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <TopFooter>
                <LeftPart>
                    <h3>RIO</h3>
                    <p>The Foremost NFT marketplace</p>
                </LeftPart>
                <RightPart>
                    Join Our Community
                </RightPart>
            </TopFooter>
            <BottomFooter>

            </BottomFooter>
        </Container>
    )
}

export default Footer

const Container = styled.div`

`

const TopFooter = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    margin: 30px 30px;

`
const BottomFooter = styled.div`

`
const LeftPart = styled.div`

`

const RightPart = styled.div`
`

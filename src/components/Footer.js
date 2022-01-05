import React from 'react'
import styled from 'styled-components'
import BottomFooter from './BottomFooter';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <Container>
            <TopFooter>
                <LeftPart>
                    <h3>RIO</h3>
                    <p>The Foremost NFT marketplace</p>
                </LeftPart>
                <RightPart>
                    <p>Join Our Community</p>
                    <BottomIcons>
                        <TwitterIcon style={{"height":"50%"}}/>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <GitHubIcon/>
                    </BottomIcons>
                    
                </RightPart>
            </TopFooter>
            <BottomFooter/>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    margin-top: 90px;

`

const TopFooter = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    margin: 30px 30px;

`
const LeftPart = styled.div`
    h3{
        letter-spacing: 1.4px;
        
    }

`

const RightPart = styled.div`
`

const BottomIcons = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    &:first-child {
        height: 50%; 
    }
`

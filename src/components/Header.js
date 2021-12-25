import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Header() {
    return (
        <Nav>
            <Logo> RIO</Logo>
            
            <NavItems>
                <NavItem>
                    <a >
                        <img src="https://img.icons8.com/ios/50/000000/search.png" alt="search" />
                        <span>Search</span>
                    </a>
                </NavItem>

                <NavItem>
                    <a >Blog</a>
                </NavItem>
                <NavItem>
                    <a >Marketplace</a>
                </NavItem>
                <NavItem>
                    <a >Community</a>
                </NavItem>
                <NavItem>
                    {/* <img src="https://img.icons8.com/ios/50/000000/profile.png" alt="search" />
                    <span>Profile</span> */}
                    <a>Profile</a>
                </NavItem>
                <Button text="Create NFT" color= "#141414" borderColor="1px solid #b10ffe"/>
                <Button text="Connect Wallet" color= "#b10ffe" borderColor="none" 
                img="https://img.icons8.com/ios/50/000000/wallet.png" />
            
            </NavItems>
                
            
           
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 36px;

`

const Logo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    color: #b10ffe;

`

const NavItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

    a {
        margin-left: 25px;
        font-size: 1em;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 17.5px;
            margin-right: 7px;
            color: white;
        }
        
    }
`

const NavItem = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // // width: 100px;
    // // height: 100%;
    // // margin-left: 25px;
    // // font-size: 1em;
    // // color: #b10ffe;
    // // text-decoration: none;
    // // border-bottom: 2px solid #b10ffe;
    // // transition: all 0.3s ease-in-out;
`


import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useWeb3 } from "@3rdweb/hooks" 



function Header() {
    const { connectWallet, address } = useWeb3();
    return (
        <Nav>
            <Logo> RIO</Logo>
            
            <NavItems>
                {/* <NavItem>

                    <SearchIcon style={{'width': "17.5px", "margin-right": "7px",
                        "display": "flex", "align-items": "center", "justify-content": "center"
                    }}/>
                    <span>Search</span>
                    
                </NavItem> */}

                <NavItem>
                    <a href='/'>Blog</a>
                </NavItem>
                <NavItem>
                    <a href='/'>Marketplace</a>
                </NavItem>
                <NavItem>
                    <a href='/'>Community</a>
                </NavItem>
                {/* <NavItem>
                    <AccountCircleIcon style={{'width': "17.5px", "margin-right": "7px",
                         "display": "flex", "align-items": "center", "justify-content": "center"}}/>
                    <span>Profile</span>
                    <ArrowDropDownIcon style={{"width": "24px","height": "24px", "margin-left": "7px",
                         "display": "flex", "align-items": "center", "justify-content": "center"}}/>
                </NavItem> */}
                <Button text="Create NFT" color= "#141414" borderColor="1px solid #b10ffe"/>
                <ConnectWallet className="">
                    {address ? (
                    <div className="address">
                        <p className="wallet">Wallet Connected</p>
                        <p><small>{address.slice(0, 7)}...{address.slice(35)}</small></p>
                    </div>
                    ) : (
                    <Button text="Connect Wallet" color= "#b10ffe" borderColor="none" 
                    icon = {true}  click={() => connectWallet('injected')}/> )}
                </ConnectWallet>
            </NavItems>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 70px;
    padding: 0 36px;

`

const Logo = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 1.5em;
    font-weight: bold;
    color: #b10ffe;

`

const NavItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavItem = styled.div`

    margin-left: 25px;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const ConnectWallet = styled.div`

    .address {
        margin-bottom: 0;
        margin-left: 25px;
        

        .wallet {
            color: #b10ffe;
            margin-bottom: 0;
            font-weight: bold;
        }
        p {
            margin-top: 0;
            margin-bottom: 0;
            
        }
    }

`
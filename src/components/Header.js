import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <Nav>
            <Logo> RIO</Logo>
            
            <NavItems>
                <NavItem>

                    <SearchIcon style={{'width': "17.5px", "margin-right": "7px",
                        "display": "flex", "align-items": "center", "justify-content": "center"
                    }}/>
                    <span>Search</span>
                    
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
                    <AccountCircleIcon style={{'width': "17.5px", "margin-right": "7px",
                         "display": "flex", "align-items": "center", "justify-content": "center"}}/>
                    <span>Profile</span>
                    <ArrowDropDownIcon style={{"width": "24px","height": "24px", "margin-left": "7px",
                         "display": "flex", "align-items": "center", "justify-content": "center"}}/>
                </NavItem>
                <Button text="Create NFT" color= "#141414" borderColor="1px solid #b10ffe"/>
                <Button text="Connect Wallet" color= "#b10ffe" borderColor="none" 
                 icon = {true} />
            
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
`

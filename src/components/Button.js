import React from 'react'
import styled from 'styled-components'
// import {SearchIcon } from '@mui/icons-material/Search';


function Button({ text, color, borderColor, img }) {
    return (
        <Buttons bgColor = {color} border={borderColor}>
            {/* <SearchIcon /> */}
            { img && <img src={img} alt="search" />}
            
            <span>{ text }</span>
        </Buttons>
    )
}

export default Button

const Buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    padding: 10.5px 15px;
    background-color: ${props => `${props.bgColor};`}
    color: white;
    border: ${props => `${props.border};`};
    margin-left: 20px;


    img {
        width: 17.5px;
        margin-right: 7px;
        color: white;
    }
`

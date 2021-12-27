import React from 'react';
import styled from 'styled-components';
import NFTCard from './NFTCard';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function Collections() {
    return (
        <Container>
            <Explore>Explore Collections</Explore>
            <SPD>
                <Button2>
                    <span>Search</span>
                    <SearchIcon style={{ "height": "15px"}}/>
                </Button2>
                <Button2>
                    <span>Price</span>
                    <ArrowDropDownIcon style={{ "height": "15px"}}/>
                </Button2>
                <Button2>
                    <span>Date</span>
                    <CalendarTodayIcon style={{ "height": "15px"}}/>
                </Button2>
            </SPD>
            <NFTCollection>
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
            </NFTCollection>
        </Container>
    )
}

export default Collections

const Container = styled.div`
   

`

const Explore = styled.div`
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    padding: 30px 0;


`

const NFTCollection = styled.div`
    background: #141414;
    margin: 10px 30px;
    display: grid;
    grid-gap: 20px;
    place-items: center;
    padding: 30px 26px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const SPD = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 28px 30px;

    button {
        margin-right: 15px;
    }
`
const Button2 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 8px;
    background: black;
    color: white;
    text-align: center;
    font-weight: 600;
    border-radius: 15px;
    border: 1px solid #b10ffe;

    span {
        padding-right: 4px;
    }

`


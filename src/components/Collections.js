import React from 'react';
import styled from 'styled-components';
import NFTCard from './NFTCard';
// import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function Collections({NFTdata}) {
    return (
        <Container>
            <Explore>Explore Collections</Explore>
            <SPD>
                {/* <Button2>
                    <span>Search</span>
                    <SearchIcon style={{ "height": "15px"}}/>
                </Button2> */}
                <Button1>
                    <span>Price</span>
                    <ArrowDropDownIcon style={{ }}/>
                </Button1>
                <Button2>
                    <span>Date</span>
                    <CalendarTodayIcon style={{ "height": "15px"}}/>
                </Button2>
            </SPD>
            <NFTCollection>
                {NFTdata.map(punk => (
                <NFTCard name={punk.name} image={punk.image_original_url} traits={punk.traits[0]?.value}
                profile_img={punk.owner.profile_img_url}/> ))}
                <NFTCard name="ohGee" image="/images/Rectangle 5.svg" traits="12"
                profile_img="/images/Ellipse 6.svg"/>
                <NFTCard name="Balling Kings" image="/images/Rectangle 10 (1).png" traits="21"
                profile_img="/images/Ellipse 6.svg"/>
                <NFTCard name="Balling Kings" image="/images/Rectangle 10 (1).png" traits="21"
                profile_img="/images/Ellipse 6.svg" />
                <NFTCard name="Balling Kings" image="/images/Rectangle 10 (1).png" traits="21"
                profile_img="/images/Ellipse 6.svg"/>
                <NFTCard name="Balling Kings" image="/images/Rectangle 10 (1).png" traits="21"
                profile_img="/images/Ellipse 6.svg"/>
            </NFTCollection>
            <MarketPlace>
                <Button3>
                    <span>Explore the marketplace</span>
                </Button3>
            </MarketPlace>
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
    // padding: 30px 0;


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

const Button1 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 8px;
    background: black;
    color: white;
    text-align: center;
    font-weight: 600;
    border-radius: 15px;
    border: 1px solid #b10ffe;
    cursor: pointer;

    span {
        padding-right: 4px;
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
    cursor: pointer;

    span {
        padding-right: 4px;
    }

`

const MarketPlace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;

`

const Button3 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 19px;
    background: #b10ffe;
    color: white;
    text-align: center;
    font-size: 18px;
    // letter-spacing: 0.9px;
    font-weight: 550;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        background: #a310e8;
        
    }
`
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { homeIcon, mobileIcon, houseIcon, gameIcon, shirtIcon, electronicIcon, moreIcon } from '../../assets/images';


export const SubHeaderSection = styled.div`
padding: 1rem 3rem;
display: flex;
justify-content: space-between;
flex-direction: row;
background: var(--primary);
`;

export const SecondaryNav = styled(Link)`
font-weight: 700;
font-size: 16px;
color: #F7F7F7;
text-align: center;
position: relative;
margin-left: 30px;
`;

export const SecondaryNavIcon = styled.img`
width: 24px;
height: 24px;
position: absolute;
left: -30px;
top: -5px;
`;

const SecondaryHeader = () => {
    return (
        <>
            <SubHeaderSection>
                <SecondaryNav to="/">Category One <SecondaryNavIcon src={moreIcon} alt="Category One" /></SecondaryNav>
                <SecondaryNav to="/">Category Two <SecondaryNavIcon src={moreIcon} alt="Category Two" /></SecondaryNav>
                <SecondaryNav to="/">Category Three <SecondaryNavIcon src={moreIcon} alt="Category Three" /></SecondaryNav>
                <SecondaryNav to="/">Category Four <SecondaryNavIcon src={moreIcon} alt="Category Four" /></SecondaryNav>
                <SecondaryNav to="/">Category Five <SecondaryNavIcon src={moreIcon} alt="Category Five" /></SecondaryNav>
                <SecondaryNav to="/">Category Six <SecondaryNavIcon src={moreIcon} alt="Category Six" /></SecondaryNav>
                <SecondaryNav to="/">Other categories <SecondaryNavIcon src={moreIcon} alt="Other categories" /></SecondaryNav>
            </SubHeaderSection>
        </>
    )
}

export default SecondaryHeader
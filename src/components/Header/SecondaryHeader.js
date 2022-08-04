import React from 'react'
import styled from 'styled-components'
import { homeIcon, mobileIcon, houseIcon, gameIcon, shirtIcon, electronicIcon, moreIcon } from '../../assets/images';


export const SubHeaderSection = styled.div`
padding: 1rem 3rem;
display: flex;
justify-content: space-between;
flex-direction: row;
background: var(--primary);
`;

export const SecondaryNav = styled.div`
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
                <SecondaryNav>Supermarket <SecondaryNavIcon src={homeIcon} alt="Supermarket" /></SecondaryNav>
                <SecondaryNav>Phones and tablet <SecondaryNavIcon src={mobileIcon} alt="Phones and tablet" /></SecondaryNav>
                <SecondaryNav>Home and office <SecondaryNavIcon src={houseIcon} alt="Home and office" /></SecondaryNav>
                <SecondaryNav>Fashion <SecondaryNavIcon src={shirtIcon} alt="Fashion" /></SecondaryNav>
                <SecondaryNav>Gaming <SecondaryNavIcon src={gameIcon} alt="Gaming" /></SecondaryNav>
                <SecondaryNav>Electronics <SecondaryNavIcon src={electronicIcon} alt="Electronics" /></SecondaryNav>
                <SecondaryNav>Other categories <SecondaryNavIcon src={moreIcon} alt="Other categories" /></SecondaryNav>
            </SubHeaderSection>
        </>
    )
}

export default SecondaryHeader
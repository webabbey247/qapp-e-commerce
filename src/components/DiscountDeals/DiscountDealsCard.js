import React from 'react'
import styled from 'styled-components'
import { Content6Column6, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles'
import { discountImg } from '../../assets/images';

export const DiscountDealCardList = styled.div`
display: flex;
flex-direction: column;
background: var(--white);
border-radius: 8px;
padding: 0.7rem;
margin-bottom: 2rem;
&: hover {
    box-shadow: 0px 15.6764px 32.006px rgba(0, 0, 0, 0.09);
  }
`;

export const DiscountImg = styled.img`
width: 100%;
height: auto;
margin-bottom: 15px;
`;

export const DiscountRate = styled.span`
background: var(--discount-bg);
border-radius: 8px;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: var(--primary);
position: absolute;
right: 20px;
padding: 0.3rem 0.4rem;
// padding: 0.5rem;
text-align: center;
margin: auto;
`;


const DiscountDealCard = () => {
    return (
        <Content6Column6>
            <DiscountDealCardList>
                <DiscountRate>25%</DiscountRate>
                <DiscountImg src={discountImg} alt='Discount Product' />
                <GeneralMdText fontWeight="700" fontSize="17px" lineHeight="24px" textAlign="left" textTransform="unset" color="var(--text-secondary)" margin="0">Volcano SharkBottom</GeneralMdText>
                <GeneralMdText fontWeight="600" fontSize="15px" lineHeight="24px" textAlign="left" textTransform="unset" color="var(--gray)" margin="5px 0">N3,250</GeneralMdText>
                <GeneralSmText style={{ textDecoration: "line-through" }} fontWeight="400" fontSize="15px" lineHeight="19px" textAlign="left" textTransform="unset" color="var(--gray-2)" margin="0">N5,000</GeneralSmText>
            </DiscountDealCardList>
        </Content6Column6>
    )
}

export default DiscountDealCard
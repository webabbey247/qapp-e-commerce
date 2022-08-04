import React from 'react'
import styled from 'styled-components'
import { Content6Column6, CustomButton, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles'
import { AddCartIcon } from '../../assets/styles/GeneralStyles';
import { productImg, shoppingCart } from '../../assets/images';

export const TopDealCardList = styled.div`
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

export const ProductImg = styled.img`
width: 100%;
height: auto;
margin-bottom: 15px;
`;




const TopDealCard = () => {
  return (
    <>
    <Content6Column6>
        <TopDealCardList>
            <ProductImg src={productImg} alt="Product Placeholder" />
            <GeneralMdText fontWeight="600" fontSize="16px" lineHeight="19px" textAlign="left" textTransform="unset" color="var(--text-secondary)" margin="0">Air max pro</GeneralMdText>
            <GeneralSmText fontWeight="400" fontSize="14px" lineHeight="17px" textAlign="left" textTransform="unset" color="var(--gray)" margin="5px 0">Misa shoes and bags</GeneralSmText>
            <GeneralMdText fontWeight="700" fontSize="14px" lineHeight="17px" textAlign="left" textTransform="unset" color="var(--text-secondary)" margin="0">N25,000</GeneralMdText>
            <CustomButton width="43%" margin="15px 0 5px" color="var(--primary)" background="transparent" border="1px solid var(--primary)" fontWeight="600" textAlign="center"><AddCartIcon src={shoppingCart} /> Add</CustomButton>
        </TopDealCardList>
    </Content6Column6>
    </>
  )
}

export default TopDealCard
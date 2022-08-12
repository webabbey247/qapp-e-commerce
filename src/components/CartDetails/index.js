import React from 'react';
import styled from 'styled-components';
import OrderSummary from '../OrderSummary';
import CartChildCard from './CartChildCard';
import { CustomColumn, ContentRow, SiteContainer, GeneralMdText } from '../../assets/styles/GlobalStyles';


export const CartDetailsSection = styled.section`
margin: 1rem 0;
display: flex;
align-items: center;
justify-content: center;
`;


export const CartDetailsCard = styled.div`
padding: 1rem 2rem;
background: var(--white);
border-radius: 4px;
display: flex;
flex-direction: column;
`;

export const CartDetailsCardChild = styled.div`
padding: 2rem 0 1rem;
position: relative;
border-bottom: 1px solid #D1D8DB;
`;

export const ProductImg = styled.img`
width: 112px;
height: 114px;
border-radius: 4px;
`;

export const ProductDeleteImgBg = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: #f9e1df;
margin-right: 0;
margin-left: auto;
margin-bottom: 2rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`;

export const ProductDeleteImg = styled.img`
width: 20px;
height: 20px;
display: block;
`;


const CartDetails = () => {
    return (
        <CartDetailsSection>
            <SiteContainer>
                <ContentRow>
                    <CustomColumn flex="0 0 70%">
                        <CartDetailsCard>
                            <GeneralMdText margin="1rem 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">Cart (3)</GeneralMdText>
                             <CartChildCard />
                             <CartChildCard />
                             <CartChildCard />
                             <CartChildCard />
                        </CartDetailsCard>
                    </CustomColumn>
                    <CustomColumn flex="0 0 30%">
                        <OrderSummary typeUrl="cart" />
                    </CustomColumn>
                </ContentRow>
            </SiteContainer>
        </CartDetailsSection>
    )
}

export default CartDetails
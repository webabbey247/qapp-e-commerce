import React from 'react'
import styled from 'styled-components'
import ViewMoreHeader from '../ViewMoreHeader';
import {  ContentRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import DiscountDealCard from './DiscountDealsCard';

export const DiscountDealSection = styled.section`
padding: 2rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


const DiscountDeals = () => {
  return (
    <>
    <DiscountDealSection>
        <SiteContainer>
            <ViewMoreHeader title="Discount Sales" typeUrl="" />
            <ContentRow>
                <DiscountDealCard />
                <DiscountDealCard />
                <DiscountDealCard />
                <DiscountDealCard />
                <DiscountDealCard />
                <DiscountDealCard />
            </ContentRow>

        </SiteContainer>
    </DiscountDealSection>
    </>
  )
}

export default DiscountDeals
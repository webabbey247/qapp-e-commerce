import React from 'react'
import styled from 'styled-components'
import ViewMoreHeader from '../ViewMoreHeader';
import {  ContentRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import TopDealCard from './TopDealCard';

export const TopDealSection = styled.section`
padding: 2rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


const TopDeals = () => {
  return (
    <>
    <TopDealSection>
        <SiteContainer>
            <ViewMoreHeader title="Top Deals" typeUrl="" />
            <ContentRow>
                <TopDealCard />
                <TopDealCard />
                <TopDealCard />
                <TopDealCard />
                <TopDealCard />
                <TopDealCard />
                <TopDealCard />
                <TopDealCard />
            </ContentRow>

        </SiteContainer>
    </TopDealSection>
    </>
  )
}

export default TopDeals
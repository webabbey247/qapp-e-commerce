import React from 'react'
import styled from 'styled-components'
import ViewMoreHeader from '../ViewMoreHeader';
import {  ContentRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import StoresCard from '../Stores/StoresCard';

export const TopStoreSection = styled.section`
padding: 2rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


const TopStores = () => {
  return (
    <>
    <TopStoreSection>
        <SiteContainer>
            <ViewMoreHeader title="Top Stores" typeUrl="" />
            <ContentRow>
                <StoresCard />
                <StoresCard />
                <StoresCard />
                <StoresCard />
                <StoresCard />
                <StoresCard />
            </ContentRow>
        </SiteContainer>
    </TopStoreSection>
    </>
  )
}

export default TopStores
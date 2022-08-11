import React from 'react'
import styled from 'styled-components'
import ViewMoreHeader from '../ViewMoreHeader';
import { ContentRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import ProductCard from '../Products/ProductCard';
// import TopDealCard from './TopDealCard';

export const TopDealSection = styled.section`
padding: 2rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


const RelatedProducts = () => {
  return (
    <>
    <TopDealSection>
        <SiteContainer>
            <ViewMoreHeader title="Related Products" typeUrl="" />
            <ContentRow>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ContentRow>
        </SiteContainer>
    </TopDealSection>
    </>
  )
}

export default RelatedProducts
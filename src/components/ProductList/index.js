import React from 'react'
import styled from 'styled-components'
import ViewMoreHeader from '../ViewMoreHeader';
import { ContentFullColumn, ContentRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import ProductCard from '../Products/ProductCard';

export const ProductListSection = styled.section`
padding: 2rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const PaginationWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
`;

export const Paginate = styled.span`
`;


const ProductList = () => {
  return (
    <>
    <ProductListSection>
        <SiteContainer>
            <ViewMoreHeader title="Products" typeUrl="" />
            <ContentRow>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ContentFullColumn>
                    <PaginationWrapper>

                    </PaginationWrapper>
                </ContentFullColumn>
            </ContentRow>
        </SiteContainer>
    </ProductListSection>
    </>
  )
}

export default ProductList
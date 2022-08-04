import React from 'react'
import styled from 'styled-components';
import { ContentRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import ProductCategoryCard from './ProductCategoryCard';

export const CategorySection = styled.section`
display: flex;
justify-content: center;
align-items: center;
`;


const ProductCategory = () => {
  return (
    <CategorySection>
      <SiteContainer>
      <ContentRow>
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
      </ContentRow>
      </SiteContainer>
    </CategorySection>
  )
}

export default ProductCategory
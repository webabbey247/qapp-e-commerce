import React from 'react'
import styled from 'styled-components';
import { ContentRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import ProductCategoryCard from './ProductCategoryCard';

export const CategorySection = styled.section`
display: flex;
justify-content: center;
align-items: center;
padding: 3rem 0;

`;


const ProductCategory = () => {
  return (
    <CategorySection>
      <SiteContainer>
      <ContentRow>
        <ProductCategoryCard title="Shoes" />
        <ProductCategoryCard title="Bags" />
        <ProductCategoryCard title="Clothes" />
        <ProductCategoryCard title="Shoes" />
        <ProductCategoryCard title="Bags" />
        <ProductCategoryCard title="Clothes" />
      </ContentRow>
      </SiteContainer>
    </CategorySection>
  )
}

export default ProductCategory
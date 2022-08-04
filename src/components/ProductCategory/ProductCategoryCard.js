import React from 'react'
import styled from 'styled-components'
import { Content6Column6, GeneralMdText } from '../../assets/styles/GlobalStyles'
import { categoryBg } from '../../assets/images';


export const CategoryCard = styled.div`
background-image: url("${categoryBg}");
background-size: contain;
background-position: bottom;
background-repeat: no-repeat;
width: 100%;
height: 200px;
`;



const ProductCategoryCard = () => {
  return (
    <Content6Column6>
        <CategoryCard>
            <GeneralMdText fontSize="19px" fontWeight="600" lineHeight="24px" color="var(--white)">Bags</GeneralMdText>
        </CategoryCard>
    </Content6Column6>
  )
}

export default ProductCategoryCard
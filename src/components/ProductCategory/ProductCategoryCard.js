import React from 'react'
import styled from 'styled-components'
import { Content6Column6, GeneralMdText } from '../../assets/styles/GlobalStyles'
import { categoryBg } from '../../assets/images';


export const CategoryCard = styled.div`
background-image: url("${categoryBg}");
background-size: cover;
background-position: bottom;
background-repeat: no-repeat;
width: 100%;
height: 100px;
position: relative;
`;

export const CategoryCardTitle = styled.div`
display: inline-block;
position: absolute;
top: 50%; 
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
`;



const ProductCategoryCard = ({title}) => {
  return (
    <Content6Column6>
        <CategoryCard>
            <CategoryCardTitle>
            <GeneralMdText textTransform="unset" textAlign="center" fontSize="19px" fontWeight="600" lineHeight="24px" color="var(--white)">{title}</GeneralMdText>
            </CategoryCardTitle>
        </CategoryCard>
    </Content6Column6>
  )
}

export default ProductCategoryCard
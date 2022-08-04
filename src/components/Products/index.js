import React from 'react'
import styled from 'styled-components'
import { ContentFullColumn, ContentRow, GeneralMdText, SiteContainer } from '../../assets/styles/GlobalStyles';
import TopDealCard from '../TopDeals/TopDealCard';


export const ProductsSection = styled.section`
padding: 2rem 0;
display: flex;
align-items: center;
justify-content: center;
`;

export const ProductsList = styled.div`
margin: 10px 0;
`;


const Products = () => {
    return (
        <>
            <ProductsSection>
                <SiteContainer>
                    <ContentRow>
                        <ContentFullColumn>
                            <GeneralMdText fontWeight="600" textTransform="unset" textAlign="left" margin="1rem 0" fontSize="30px" lineHeight="45px" color="var(--text-primary)">All Products</GeneralMdText>
                        </ContentFullColumn>
                        <ContentFullColumn>
                            <h4>Filter Section</h4>
                        </ContentFullColumn>
                    </ContentRow>
                    <ContentRow>
                        <TopDealCard />
                        <TopDealCard />
                        <TopDealCard />
                        <TopDealCard />
                        <TopDealCard />
                        <TopDealCard />
                        <TopDealCard />
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
            </ProductsSection>
        </>
    )
}

export default Products
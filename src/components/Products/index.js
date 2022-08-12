import React from 'react'
import styled from 'styled-components'
import Select from 'react-dropdown-select'
import { ContentFullColumn, ContentRow, GeneralFlexRow, GeneralMdText, SiteContainer } from '../../assets/styles/GlobalStyles';
import ProductCard from './ProductCard';
import { filterIcon } from '../../assets/images';


export const ProductsSection = styled.section`
padding: 2rem 0;
display: flex;
align-items: center;
justify-content: center;
`;

export const ProductsList = styled.div`
margin: 10px 0;
`;

export const FilterOptions = styled.div`
padding: 2rem 0;
position: relative;
display: flex;
flex-direction: row;
justify-content: 
`;

export const FilterIcon = styled.img`
width: 24px;
height: 24px;
`;

export const FilterForm = styled.form`
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-left: 2rem;
`;

export const FilterFormGroup = styled.div`
flex: 0 0 20%;
max-width: 20%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 2rem;
`;

const Products = () => {

    const MenOptions = [
        { value: 'Shirts', label: 'Shirts' },
        { value: 'Shorts', label: 'Shorts' },
    ];
    return (
        <>
            <ProductsSection>
                <SiteContainer>
                    <ContentRow>
                        <ContentFullColumn>
                            <GeneralMdText fontWeight="600" textTransform="unset" textAlign="left" margin="1rem 0" fontSize="30px" lineHeight="45px" color="var(--text-primary)">All Products</GeneralMdText>
                        </ContentFullColumn>
                        <ContentFullColumn>
                          <GeneralFlexRow justifyContent="flex-start">
                          <FilterOptions>
                                <FilterIcon src={filterIcon} alt="Filter" />
                                <GeneralMdText margin="0.3rem 0.6rem" fontWeight="600" textTransform="unset" textAlign="left" fontSize="16px" lineHeight="20px" color="var(--text-primary)">35 item(s)</GeneralMdText>
                            </FilterOptions>
                            <FilterForm>
                                <FilterFormGroup className='filterFormRow'>
                                    <GeneralMdText margin="0.3rem 0.6rem" fontWeight="600" textTransform="unset" textAlign="left" fontSize="16px" lineHeight="20px" color="var(--text-primary)">Men</GeneralMdText>
                                    <Select
                                        options={MenOptions}
                                    />
                                </FilterFormGroup>

                            </FilterForm>
                          </GeneralFlexRow>
                        </ContentFullColumn>
                    </ContentRow>
                    <ContentRow>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </ContentRow>
                </SiteContainer>
            </ProductsSection>
        </>
    )
}

export default Products
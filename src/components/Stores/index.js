import React from 'react'
import styled from 'styled-components'
import { ContentFullColumn, ContentRow, GeneralMdText, SiteContainer } from '../../assets/styles/GlobalStyles';
import StoresCard from './StoresCard';


export const StoresSection = styled.section`
padding: 2rem 0 4rem;
display: flex;
align-items: center;
justify-content: center;
`;

export const ProductsList = styled.div`
margin: 10px 0;
`;


const Stores = () => {
    return (
        <>
            <StoresSection>
                <SiteContainer>
                    {/* <ContentRow>
                        <ContentFullColumn>
                            <GeneralMdText margin="0 0 2rem" fontWeight="600" textTransform="unset" textAlign="center" fontSize="30px" lineHeight="45px" color="var(--text-primary)">All Stores</GeneralMdText>
                        </ContentFullColumn>
                    </ContentRow> */}
                    <ContentRow>
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                        <StoresCard typeUrl="" />
                    </ContentRow>
                </SiteContainer>
            </StoresSection>
        </>
    )
}

export default Stores
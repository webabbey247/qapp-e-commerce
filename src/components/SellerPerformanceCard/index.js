import React from 'react'
import styled from 'styled-components'
import { GeneralMdText, GeneralSmText, SiteContainer } from '../../assets/styles/GlobalStyles';

export const SellerPerformanceCardList = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1.5rem 0;
`;

export const SellerPerformanceCardContent = styled.div`
background: var(--white);
border-radius: 4px;
padding: 2.5rem 2rem;
display: flex;
flex-direction: row;
`;

export const SellerPerformanceCardContentLTR = styled.div`
display: flex;
flex-direction: column;
flex: 0 0 60%;
max-width: 60%;
`;

export const SellerPerformanceCardContentRTL = styled.div`
display: flex;
flex-direction: column;
flex: 0 0 40%;
max-width: 40%;
margin-top: 4rem;
`;


const SellerPerformanceCard = () => {
    return (
        <SellerPerformanceCardList>
            <SiteContainer>
                <SellerPerformanceCardContent>
                    <SellerPerformanceCardContentLTR>
                    <GeneralMdText margin="0 0 20px" fontSize="30px" lineHeight="40px" fontWeight="600" textTransform="unset" color="var(--text-primary)" textAlign="left">Seller performance</GeneralMdText>
                        <GeneralSmText margin="5px 0" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Opened: <strong>7+ years</strong></GeneralSmText>
                        <GeneralSmText margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Number of succesful orders: <strong>300</strong></GeneralSmText>
                        <GeneralSmText margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Number of returned: <strong>0</strong></GeneralSmText>
                    </SellerPerformanceCardContentLTR>
                    <SellerPerformanceCardContentRTL>
                        <GeneralSmText padding="0" margin="5px 0" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Order fufilment rate: <strong>Excellent</strong></GeneralSmText>
                        <GeneralSmText padding="0" margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Quality score: <strong>Excellent</strong></GeneralSmText>
                    </SellerPerformanceCardContentRTL>
                </SellerPerformanceCardContent>
            </SiteContainer>
        </SellerPerformanceCardList>
    )
}

export default SellerPerformanceCard
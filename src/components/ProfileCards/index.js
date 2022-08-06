import React from 'react'
import styled from 'styled-components'
import { GeneralMdText, GeneralSmText, SiteContainer } from '../../assets/styles/GlobalStyles';
import { FollowCtaButton } from '../../assets/styles/ButtonStyles';

export const ProfileCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 2rem 0;
`;

export const ProfileCardContent = styled.div`
background: var(--white);
border-radius: 4px;
padding: 2.5rem 2rem;
display: flex;
justify-content: space-between;
flex-direction: row;
`;

export const ProfileCardLTR = styled.div`
display: flex;
flex-direction: column;
flex: 0 0 80%;
max-width: 80%;
`;

export const ProfileCardRTL = styled.div`
display: flex;
flex-direction: column;
flex: 0 0 20%;
max-width: 20%;
`;




const ProfileCards = () => {
    return (
        <ProfileCard>
            <SiteContainer>
                <ProfileCardContent>
                    <ProfileCardLTR>
                        <GeneralMdText margin="0 0 20px" fontSize="30px" lineHeight="40px" fontWeight="600" textTransform="unset" color="var(--text-primary)" textAlign="left">Profile</GeneralMdText>
                        <GeneralSmText margin="5px 0" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Name: <strong>Misa Shoes and Bags</strong></GeneralSmText>
                        <GeneralSmText margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Country of origin: <strong>Nigeria</strong></GeneralSmText>
                        <GeneralSmText margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Seller score: <strong>80%</strong></GeneralSmText>
                    </ProfileCardLTR>
                    <ProfileCardRTL>
                        <FollowCtaButton>Follow</FollowCtaButton>
                        <GeneralSmText textAlign="right" textTransform="unset" fontSize="17px" lineHeight="24px" fontWeight="400">1002 followers</GeneralSmText>
                    </ProfileCardRTL>
                </ProfileCardContent>
            </SiteContainer>
        </ProfileCard>
    )
}

export default ProfileCards
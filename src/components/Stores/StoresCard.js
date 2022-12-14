import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Content4Column4, Content6Column6, GeneralFlexColumn, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles'
import { ViewMoreCta, ViewMoreIcon } from '../../assets/styles/GeneralStyles';
import { storeImg, viewMoreRight } from '../../assets/images';

export const StoresCardList = styled(Link)`
display: flex;
flex-direction: column;
background: var(--white);
border-radius: 8px;
margin-bottom: 2rem;

&: hover {
    box-shadow: 0px 15.6764px 32.006px rgba(0, 0, 0, 0.09);
  }
`;

export const StoreImg = styled.img`
width: 100%;
height: auto;
`;

const StoresCard = ({ typeUrl }) => {
    return (
        <>
            {typeUrl === 'home' ? (
                <Content6Column6>
                    <StoresCardList to="/store/single-store">
                        <StoreImg src={storeImg} alt='Store Name' />
                        <GeneralFlexColumn padding=" 10px 0.7rem">
                            <GeneralMdText fontWeight="600" fontSize="15px" lineHeight="24px" textAlign="left" textTransform="unset" color="var(--gray)" margin="5px 0">Maryflo fashion</GeneralMdText>
                            <GeneralSmText fontWeight="400" fontSize="15px" lineHeight="19px" textAlign="left" textTransform="unset" color="var(--gray-2)" margin="0">A fashion store made up of different fabrics for different occassion</GeneralSmText>
                            <ViewMoreCta style={{ padding: "1rem 0 0.5rem" }} as={Link} to="/">View More
                                <ViewMoreIcon src={viewMoreRight} />
                            </ViewMoreCta>
                        </GeneralFlexColumn>
                    </StoresCardList>
                </Content6Column6>
            ) : (
                <Content4Column4>
                    <StoresCardList to="/store/single-store">
                        <StoreImg src={storeImg} alt='Store Name' />
                        <GeneralFlexColumn padding=" 10px 0.7rem">
                            <GeneralMdText fontWeight="600" fontSize="15px" lineHeight="24px" textAlign="left" textTransform="unset" color="var(--gray)" margin="5px 0">Maryflo fashion</GeneralMdText>
                            <GeneralSmText fontWeight="400" fontSize="15px" lineHeight="19px" textAlign="left" textTransform="unset" color="var(--gray-2)" margin="0">A fashion store made up of different fabrics for different occassion</GeneralSmText>
                            <ViewMoreCta style={{ padding: "1rem 0 0.5rem" }} as={Link} to="/">View More
                                <ViewMoreIcon src={viewMoreRight} />
                            </ViewMoreCta>
                        </GeneralFlexColumn>
                    </StoresCardList>
                </Content4Column4>
            )}
        </>
    )
}

export default StoresCard
import React from 'react'
import styled from 'styled-components'
import { ContentFullColumn, ContentRow, CustomButton, GeneralFlexRow, GeneralMdText } from '../../assets/styles/GlobalStyles';
import { AddCartIcon } from '../../assets/styles/GeneralStyles';
import { phoneBannerImg, shoppingCart, peopleBannerImgLTR, peopleBannerImgRTL } from '../../assets/images';

export const HomeTopBannerSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const HomeTopBannerContainer = styled.div`
width:min(100%, 85rem);
padding: 0;
background: linear-gradient(90deg, #FE8C00 0%, #F83600 100%);
border-radius: 8px;
`;


export const BannerTopImgLeft = styled.div`
background-image: url("${peopleBannerImgLTR}");
background-size: cover;
background-position: bottom;
background-repeat: no-repeat;
width: 100%;
height: 350px;
`;

export const BannerTopImgContent = styled.div`
display: flex;
flex-direction: column;
flex: 0 0 40%;
max-width: 40%;
justify-content: center;
padding: 1rem 0;
`;

export const BannerTopImgRight = styled.div`
background-image: url("${peopleBannerImgRTL}");
background-size: cover;
background-position: bottom;
background-repeat: no-repeat;
width: 100%;
height: 350px;
`;




export const HomeBottomBannerSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 4rem;
`;

export const HomeBottomBannerContainer = styled.div`
width:min(100%, 85rem);
padding: 0;
background: linear-gradient(90deg, #EC008C 0%, #FC6767 100%);
border-radius: 8px;
`;

export const BannerBottomLTR = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 0;
flex: 0 0 50%;
max-width: 50%;
justify-content: center;
margin: auto;
`;

export const BannerBottomImg = styled.div`
background-image: url("${phoneBannerImg}");
background-size: contain;
background-position: bottom;
background-repeat: no-repeat;
width: 100%;
height: 300px;
`;


const Banners = ({ typeUrl }) => {
    return (
        <>
            {typeUrl === "top" && (
                <HomeTopBannerSection>
                    <HomeTopBannerContainer>
                        <ContentRow>
                            <ContentFullColumn>
                                <GeneralFlexRow justifyContent="space-between">
                                    <BannerTopImgLeft />
                                    <BannerTopImgContent>
                                        {/* <GeneralMdText textAlign="center" fontWeight="600" fontSize="20px" lineHeight="25px" textTranform="unset" margin="20px 0 2rem" color="var(--white)">Welcome to the best market place in Africa</GeneralMdText> */}

                                        <GeneralMdText fontWeight="700" fontSize="20px" lineHeight="24px" textTransform="unset" color="var(--white)" margin="0 auto" width="50%" textAlign="center">Get amazing deals for the lowest of</GeneralMdText>

                                        <GeneralMdText fontWeight="700" fontSize="89px" lineHeight="108px" textTransform="unset" color="var(--white)" margin="0" padding="0" textAlign="center">Prices</GeneralMdText>

                                        <CustomButton color="var(--primary)" fontSize="15px" lineHeight="24px" fontWeight="600" background="var(--white)" border="1px solid var(--white)" width="35%" margin="10px auto" padding="1rem 0">
                                            <AddCartIcon style={{ left: "13%" }} src={shoppingCart} /> Shop Now</CustomButton>
                                    </BannerTopImgContent>
                                    <BannerTopImgRight />
                                </GeneralFlexRow>
                            </ContentFullColumn>
                        </ContentRow>
                    </HomeTopBannerContainer>
                </HomeTopBannerSection>
            )}

            {typeUrl === "bottom" && (
                <HomeBottomBannerSection>
                    <HomeBottomBannerContainer>
                        <ContentRow>
                            <ContentFullColumn>
                                <GeneralMdText textAlign="center" fontWeight="600" fontSize="20px" lineHeight="25px" textTransform="unset" padding=" 2rem 0" color="var(--white)">Welcome to the best market place in Africa</GeneralMdText>
                            </ContentFullColumn>
                            <ContentFullColumn>
                                <GeneralFlexRow justifyContent="space-between">
                                    <BannerBottomLTR>
                                        <GeneralMdText fontWeight="700" fontSize="20px" lineHeight="24px" textTransform="unset" color="var(--white)" margin="0" padding="0" textAlign="center">Best Deal on</GeneralMdText>
                                        <GeneralMdText fontWeight="700" fontSize="89px" lineHeight="108px" textTransform="unset" color="var(--white)" margin="0" padding="0" textAlign="center">Phones</GeneralMdText>
                                        <CustomButton color="var(--primary)" fontSize="15px" lineHeight="24px" fontWeight="600" background="var(--white)" border="1px solid var(--white)" width="35%" margin="10px auto">
                                            <AddCartIcon style={{ left: "20%" }} src={shoppingCart} /> Shop Now</CustomButton>
                                    </BannerBottomLTR>
                                    <BannerBottomImg />
                                </GeneralFlexRow>
                            </ContentFullColumn>
                        </ContentRow>
                    </HomeBottomBannerContainer>
                </HomeBottomBannerSection>
            )}
        </>
    )
}

export default Banners
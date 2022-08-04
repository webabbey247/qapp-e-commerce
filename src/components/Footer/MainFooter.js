import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { ContentFullColumn, ContentRow, GeneralFlexColumn, GeneralFlexRow, GeneralMdText, SiteContainer } from '../../assets/styles/GlobalStyles';
import { qappLogoWhite } from '../../assets/images';

export const Footer = styled.footer`
padding: 1rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: var(--primary)
`;

export const FooterLTR = styled.div`
flex: 0 0 20%;
max-width: 20%;
padding: 2rem 0;
`;

export const FooterLTRImg = styled.img`
height: 52px;
`;


export const FooterRTL = styled.div`
flex: 0 0 80%;
max-width: 80%;
padding: 2rem 0 4rem;
justify-content: flex-start;
flex-direction: row;
display: flex;
`;

export const FooterNavLink = styled.a`
font-weight: 600;
font-size: 15px;
line-height: 29px;
color: #F7F7F7;
`;



export const Copyright = styled.p`
font-weight: 700;
font-size: 14px;
line-height: 17px;
text-align: left;
color: #F7F7F7;
flex: 0 0 80%;
max-width: 80%
`;

export const FooterResourcesNav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex: 0 0 20%;
max-width: 20%
`;

export const FooterNav = styled.a`
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #F7F7F7;
margin: 0;
padding: 0;
`;


const MainFooter = () => {
  return (
    <>
    <Footer>
        <SiteContainer>
            <ContentRow>
                <ContentFullColumn>
                    <GeneralFlexRow>
                    <FooterLTR>
                        <FooterLTRImg src={qappLogoWhite} alt="Qapp Logo" />
                        </FooterLTR>

                    <FooterRTL>
                        <GeneralFlexColumn>
                            <GeneralMdText color="var(--white)" fontSize="24px" lineHeight="29px" fontWeight="600" margin="0 0 20px" textTransform="unset">Let us help you</GeneralMdText>
                            <FooterNavLink as={Link} to="/"> Help Center</FooterNavLink>
                            <FooterNavLink as={Link} to="/">How to shop on QAPP</FooterNavLink>
                            <FooterNavLink as={Link} to="/">Delivery options and timelines</FooterNavLink>
                            <FooterNavLink as={Link} to="/">How to return a product on QAPP</FooterNavLink>
                            <FooterNavLink as={Link} to="/">Report a Product</FooterNavLink>
                            <FooterNavLink as={Link} to="/">Ship your package anywhere in Nigeria</FooterNavLink>
                            <FooterNavLink as={Link} to="/">Dispute Resolution Policy</FooterNavLink>
                        </GeneralFlexColumn>

                        <GeneralFlexColumn>
                            <GeneralMdText color="var(--white)" fontSize="24px" lineHeight="29px" fontWeight="600" margin="0 0 20px" textTransform="unset">Let us help you</GeneralMdText>
                            <FooterNavLink as={Link} to="/"> Help Center</FooterNavLink>
                            <FooterNavLink as={Link} to="/">How to shop on QAPP</FooterNavLink>
                            <FooterNavLink as={Link} to="/">Delivery options and timelines</FooterNavLink>
                            <FooterNavLink as={Link} to="/">How to return a product on QAPP</FooterNavLink>
                            <FooterNavLink as={Link} to="/">Report a Product</FooterNavLink>
                            <FooterNavLink as={Link} to="/">Ship your package anywhere in Nigeria</FooterNavLink>
                            <FooterNavLink as={Link} to="/">Dispute Resolution Policy</FooterNavLink>
                        </GeneralFlexColumn>
                        </FooterRTL>
                    </GeneralFlexRow>

                </ContentFullColumn>

                <ContentFullColumn>
                    <GeneralFlexRow justifyContent="space-between">
                        <Copyright>Copyright © 2022 QApp. All rights reserved.</Copyright>
                        <FooterResourcesNav>
                            <FooterNav as={Link} to="/">Privacy Policy</FooterNav>
                            <FooterNav as={Link} to="/">Terms and Conditions</FooterNav>
                        </FooterResourcesNav>
                    </GeneralFlexRow>
                </ContentFullColumn>
            </ContentRow>
        </SiteContainer>
    </Footer>
    </>
  )
}

export default MainFooter
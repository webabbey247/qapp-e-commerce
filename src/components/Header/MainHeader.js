import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { qappLogo } from '../../assets/images';
import { GeneralFlexRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import { shoppingCart } from '../../assets/images';

export const Nav = styled.nav`
display: flex;
justify-content: center;
padding: 0.8rem 0;
align-items: center;
flex-direction: column;
background: var(--white);
`;

export const NavLogo = styled.a`
flex: 0 0  30%;
max-width: 30%;
`;
export const NavLogoImg = styled.img`
height: 43px;
width: auto;
`;

export const NavChildrenLinks = styled.div`
flex: 0 0 70%;
max-width: 70%;
display: flex;
flex-direction: row;
justify-content: flex-end;
`;

export const NavLinks = styled.a`
font-weight: 400;
font-size: 15px;
line-height: 19px;
color: var(--text-primary);
margin-left: 3rem;
margin-top: 15px;

&:first-child {
    margin-left: 0;
}
`;

export const NavCartIcon = styled.img`
width: 24px;
height: 24px;
margin-top: -3px;
`;


export const NavLinkCta = styled.a`
background: var(--primary);
border: 1px solid var(--primary);
padding: 0.6rem 2rem;
color: var(--white);
// margin: auto;
margin-left: 1.5rem;
text-align: center;
font-weight: 400;
font-size: 15px;
line-height: 19px;
margin-top: 5px;
border-radius: 4px;
`;

export const NavLinkOutlineCta = styled.a`
background: transparent;
border: 1px solid var(--primary);
padding: 0.6rem 2rem;
color: var(--primary);
margin-left: 1.5rem;
text-align: center;
font-weight: 400;
font-size: 15px;
line-height: 19px;
margin-top: 5px;
border-radius: 4px;
`;


const MainHeader = ({ typeUrl }) => {
    return (
        <>
            <Nav>
                <SiteContainer>
                    <GeneralFlexRow justifyContent="space-between" margin="0" padding="0">
                        <NavLogo as={Link} to="/">
                            <NavLogoImg src={qappLogo} alt='Qapp Logo' />
                        </NavLogo>
                        {typeUrl === "store" ? (
                            <NavChildrenLinks>
                                <NavLinks as={NavLink} to="/">Home</NavLinks>
                                <NavLinks as={NavLink} to="/">Products</NavLinks>
                                <NavLinks as={NavLink} to="/profile">Profile</NavLinks>
                                <NavLinks as={NavLink} to="/cart"><NavCartIcon src={shoppingCart} /></NavLinks>
                                <NavLinkCta as={NavLink} to="/">Sign Up</NavLinkCta>
                                <NavLinkOutlineCta as={NavLink} to="/">Login</NavLinkOutlineCta>
                            </NavChildrenLinks>
                        ) : (
                            <NavChildrenLinks>
                                <NavLinks as={NavLink} to="/">Home</NavLinks>
                                <NavLinks as={NavLink} to="/store">Shops</NavLinks>
                                <NavLinks as={NavLink} to="/">Products</NavLinks>
                                <NavLinks as={NavLink} to="/">Privacy</NavLinks>
                                <NavLinks as={NavLink} to="/">Terms</NavLinks>                            
                                <NavLinks as={NavLink} to="/cart"><NavCartIcon src={shoppingCart} /></NavLinks>
                                <NavLinkCta as={NavLink} to="/">Sign Up</NavLinkCta>
                                <NavLinkOutlineCta as={NavLink} to="/">Login</NavLinkOutlineCta>
                            </NavChildrenLinks>
                        )}
                    </GeneralFlexRow>
                </SiteContainer>
            </Nav>
        </>
    )
}

export default MainHeader
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { merchantLogo } from '../../assets/images';
import { GeneralFlexRow, SiteContainer } from '../../assets/styles/GlobalStyles';
import { shoppingCart } from '../../assets/images';
import { FaMoon, FaSun } from 'react-icons/fa';

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
margin-left: 2rem;
margin-top: 15px;
position: relative;

&:first-child {
    margin-left: 0;
}
`;

export const NavCartIcon = styled.img`
width: 24px;
height: 24px;
margin-top: -3px;
`;

export const CartIconBadge = styled.span`
font-size: 12px;
font-weight: 500;
position: absolute;
bottom: 25px;
left: 15px;
display: flex;
width: 25px;
height: 25px;
color: var(--white);
border-radius: 50%;
background-color: var(--primary);
align-items: center;
justify-content: center;
`;


export const NavLinkCta = styled.a`
background: var(--primary);
border: 1px solid var(--primary);
padding: 0.6rem 2rem;
color: var(--white);
// margin: auto;
margin-left: 3rem;
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
margin-left: 2rem;
text-align: center;
font-weight: 400;
font-size: 15px;
line-height: 19px;
margin-top: 5px;
border-radius: 4px;
`;

export const NavUserProfile = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: var(--primary);
padding: 0;
margin-top: -0.6rem;
`;

export const NavUserIcon = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;
`;


const MainHeader = ({ typeUrl }) => {
    const [isLoggedIn, setisLoggedIn] = React.useState(null);
    const [nightMode, setNightMode] = React.useState(false)
    const CurrentUrl = window.location.href;
    const BaseUrl = window.location.origin;
    const SSO_URL = `http://auth.qappworld.com/login?client_id=743766160104&return_url=${CurrentUrl}&call_url=${BaseUrl}/callback`;
    console.log("SSO url", SSO_URL);

    const userData = [{
        name: "Balogun Abiodun",
        email: "balogun.abiodunlive@gmail.com",
        account: "Corporate",
    }]


    const logIn = () => {
        localStorage.setItem('authToken', JSON.stringify(userData))
        window.location.reload(false)
    };

    const logout = () => {
        localStorage.removeItem('authToken')
        window.location.reload(false)
    };


    React.useEffect(() => {
        async function fetchAccountData() {
            const webToken = localStorage.getItem('authToken');
            if (webToken) {
                setisLoggedIn(true)
                console.log("account is already logged");
            } else {
                setisLoggedIn(false)
                console.log("account is not logged");
            }
        }
        fetchAccountData();
    }, []);


    return (
        <>
            <Nav>
                <SiteContainer>
                    <GeneralFlexRow justifyContent="space-between" margin="0" padding="0">
                        <NavLogo as={Link} to="/">
                            <NavLogoImg src={merchantLogo} alt='Merchant Logo' />
                        </NavLogo>

                        <NavChildrenLinks>
                            <NavLinks as={NavLink} to="/">Home</NavLinks>
                            <NavLinks as={NavLink} to="/">Products</NavLinks>
                            <NavLinks as={NavLink} to="/cart"><NavCartIcon src={shoppingCart} />
                                <CartIconBadge>3</CartIconBadge>
                            </NavLinks>
                            {isLoggedIn ? (
                                <NavLinkOutlineCta onClick={logout}>Logout</NavLinkOutlineCta>
                            ) : (
                                <NavLinkOutlineCta onClick={logIn}>Login</NavLinkOutlineCta>
                            )}
                            {/* <NavLinkOutlineCta href={SSO_URL}>Login</NavLinkOutlineCta> */}

                            {isLoggedIn && (
                                <NavLinks>
                                    <NavUserProfile>
                                        <NavUserIcon src='https://qapp-customer-dashboard-v2.vercel.app/static/media/profile-img.3da857ea.png' alt="Balogun Abiodun" />
                                    </NavUserProfile>
                                </NavLinks>
                            )}

                            <NavLinks onClick={() => setNightMode(!nightMode)}>{nightMode ? (<FaMoon size="22" color="var(--primary)" />) : (<FaSun size="22" color="var(--primary)" />)}</NavLinks>
                        </NavChildrenLinks>
                    </GeneralFlexRow>
                </SiteContainer>
            </Nav>
        </>
    )
}

export default MainHeader
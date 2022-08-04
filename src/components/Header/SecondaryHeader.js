import React from 'react'
import styled from 'styled-components'

export const SubHeaderSection = styled.div`
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
flex-direction: row;
background: var(--primary);
`;

export const SecondaryNav = styled.div`
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #F7F7F7;
text-align: center;
`;

const SecondaryHeader = () => {
  return (
    <>
    <SubHeaderSection>
        <SecondaryNav>Supermarket</SecondaryNav>
        <SecondaryNav>Phones and tablet</SecondaryNav>
        <SecondaryNav>Home and office</SecondaryNav>
        <SecondaryNav>Fashion</SecondaryNav>
        <SecondaryNav>Gaming</SecondaryNav>
        <SecondaryNav>Electronics</SecondaryNav>
        <SecondaryNav>Other categories</SecondaryNav>
    </SubHeaderSection>
    </>
  )
}

export default SecondaryHeader
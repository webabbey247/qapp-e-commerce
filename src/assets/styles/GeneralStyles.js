import styled from "styled-components";

// View More Heading
export const HeaderText = styled.h2`
font-weight: 700;
font-size: 18px;
line-height: 29px;
color: var(--text-primary);
text-align: left;
border-bottom: 1px solid var(--primary);
`;

export const ViewMoreCta = styled.a`
font-weight: 600;
font-size: 15px;
line-height: 24px;
color: var(--primary);
position: relative;
text-align: left;
margin-right: 30px;
`;

export const ViewMoreIcon = styled.img`
height: 22px;
width: 22px;
position: absolute;
margin-left: 5px;
`;


// Add to Cart Icon
export const AddCartIcon = styled.img`
width: 24px;
height: 24px;
position: absolute;
left: 10px;
`;

export const VerifiedStoreIcon = styled.img`
width: 18px;
height: 18px;
position: absolute;
top: 2px;
left: 40%;
`;

// Product Qty

export const ProductQuantity = styled.div`
display: flex;
justify-content: flex-end;
`;

export const ProductQuantityBtn = styled.div`
background-color: var(--primary);
border: 1px solid var(--primary);
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: space-evenly;
line-height: 1;
color: var(--white);
border-radius: 4px;
`;

export const ProductQuantityInput = styled.input`
text-align: center;
height: 30px;
width: 30px;
color: var(--text-primary);
border: 0;
outline: none;
font-size: 15px;
line-height: 21px;
font-weight: 600;
background: transparent;
`;


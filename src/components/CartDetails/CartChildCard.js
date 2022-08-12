import React from 'react';
import styled from 'styled-components';
import { CustomColumn, ContentRow, GeneralMdText, GeneralSmText, GeneralFlexRow, GeneralFlexColumn } from '../../assets/styles/GlobalStyles';
import { productImg, verifiedIcon, trashIcon } from '../../assets/images';
import { VerifiedStoreIcon, ProductQuantity, ProductQuantityBtn, ProductQuantityInput } from '../../assets/styles/GeneralStyles';
import { FiMinus, FiPlus } from "react-icons/fi"


export const CartChild = styled.div`
padding: 2rem 0 1rem;
position: relative;
border-bottom: 1px solid #D1D8DB;
`;

export const ProductImg = styled.img`
width: 112px;
height: 114px;
border-radius: 4px;
`;

export const ProductDeleteImgBg = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: #f9e1df;
margin-right: 0;
margin-left: auto;
margin-bottom: 2rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`;

export const ProductDeleteImg = styled.img`
width: 20px;
height: 20px;
display: block;
`;



const CartChildCard = () => {
    return (
        <CartChild>
            <ContentRow>
                <CustomColumn flex="0 0 70%">
                    <GeneralFlexRow>
                        <ProductImg src={productImg} alt="Product Name" />
                        <GeneralFlexColumn margin="0 0 0 1rem">
                            <GeneralMdText fontSize="24px" lineHeight="29px" fontWeight="600" textTransform="unset" color="var(--text-primary)" textAlign="left">Air max pro</GeneralMdText>
                            <GeneralSmText style={{
                                position: "relative"
                            }} margin="5px 0" fontSize="14px" lineHeight="17px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Store: Misa shoes and bags
                                <VerifiedStoreIcon style={{
                                    top: "0", left: "38%"
                                }} src={verifiedIcon} /> </GeneralSmText>
                            <GeneralSmText margin="5px 0" fontSize="14px" lineHeight="17px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Size: 45 </GeneralSmText>
                            <GeneralMdText margin="5px 0" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">N25,000</GeneralMdText>
                        </GeneralFlexColumn>
                    </GeneralFlexRow>
                </CustomColumn>
                <CustomColumn flex="0 0 30%">
                    <GeneralFlexColumn margin=".5rem 0">
                        <ProductDeleteImgBg>
                            <ProductDeleteImg src={trashIcon} />
                        </ProductDeleteImgBg>
                        <ProductQuantity>
                            <ProductQuantityBtn><FiMinus /></ProductQuantityBtn>
                            <ProductQuantityInput type="text" value="2" />
                            <ProductQuantityBtn><FiPlus /></ProductQuantityBtn>
                        </ProductQuantity>
                    </GeneralFlexColumn>
                </CustomColumn>
            </ContentRow>
        </CartChild>
    )
}

export default CartChildCard
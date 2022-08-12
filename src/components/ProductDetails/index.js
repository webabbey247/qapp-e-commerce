import React, { useState } from 'react'
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'
import { ContentFullColumn, CustomButton, ContentRow, SiteContainer, GeneralMdText, GeneralSmText, GeneralFlexRow, GeneralFlexColumn, Content2Column2 } from '../../assets/styles/GlobalStyles';
import { AddCartIcon } from '../../assets/styles/GeneralStyles';
import { productImg, productInfoImg, verifiedIcon, shoppingCart } from '../../assets/images';
import { VerifiedStoreIcon } from '../../assets/styles/GeneralStyles';
import { FiMinus, FiPlus } from "react-icons/fi"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'




export const ProductDetailsSection = styled.section`
margin: 1rem 0;
display: flex;
align-items: center;
justify-content: center;

`;

export const ProductDetailsContent = styled.div`
// background: var(--white);
padding: 2rem 0;
border-radius: 4px;
`;

export const PageTitle = styled.div`
padding: 1rem 0;
position: relative;
display: flex;
justify-content: flex-start;
flex-direction: row;
`;

export const PageTitleNav = styled.a`
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: var(--text-secondary);
`;

export const ProductGallery = styled.div`
padding: 2rem 0;
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

export const ProductGalleryList = styled.div`
display: flex;
flex-direction: column;
flex: 0 0 30%;
max-width: 30%;
`;

export const ProductGalleryImg = styled.div`
width: 430.67px;
height: 430.67px;
border-radius: 4px;
background-size: contain;
background-position: top;
background-repeat: no-repeat;
`;

export const ProductGallerySubImages = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
margin: 1.5rem 0 0;
`;

export const ProductGallerySubImg = styled.img`
width: 80px;
height: 80px;
border-radius: 4px;
margin-left: 10px;

&:first-child {
margin-left: 0;
}
`;

export const ProductGalleryInfo = styled.div`
display: flex;
flex-direction: column;
margin-left: 4rem;
flex: 0 0 40%;
max-width: 40%;
`;

export const ProductGalleryTopInfo = styled.div`
margin: 0;
`;


export const ProductGalleryInfoRating = styled.div`
margin: 0.5rem 0 0;
`;

export const ProductGalleryColorsInfo = styled.div`
margin: 0;
display: flex;
flex-direction: column;
`;

export const ProductGalleryColors = styled.a`
border-radius: 4px;
font-weight: 600;
background: var(--text-secondary);
margin-left: 15px;
height: 24px;
width: 24px;

&:nth-child(2){
background: var(--gray);
}

&:nth-child(3){
background: var(--primary);
}

&:nth-child(4){
background: var(--text-primary);
}

&:first-child {
margin-left: 0;
}
`;


export const ProductGallerySizesInfo = styled.div`
margin: 0.5rem 0;
display: flex;
flex-direction: column;
`;

export const ProductGallerySizes = styled.a`
border-radius: 4px;
border: 1px solid #1A3C4A;
font-weight: 600;
font-size: 15px;
line-height: 29px;
width: 30px;
height: 30px;
color: var(--text-primary);
// padding: 0.3rem .7rem;
margin-left: 15px;
text-align: center;
// justify-content: center;
// align-items: center;

&:first-child {
margin-left: 0;
}
`;

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


export const ProductInformation = styled.div`
padding: 2rem 0;
display: flex;
flex-direction: column;
`;



const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <ProductDetailsSection>
            <SiteContainer>
                <ProductDetailsContent>
                    <ContentRow>
                        <ContentFullColumn>
                            <PageTitle>
                                <PageTitleNav>Store &raquo; Products &raquo; Men’s Shoes &raquo; Air Max Pro</PageTitleNav>
                            </PageTitle>

                            <ProductGallery>
                                <ProductGalleryList>
                                <ProductGalleryImg style={{ backgroundImage: `url(${productInfoImg})` }} />
                                    <ProductGallerySubImages>
                                        <ProductGallerySubImg src={productImg} alt="Image 01" />
                                        <ProductGallerySubImg src={productImg} alt="Image 02" />
                                        <ProductGallerySubImg src={productImg} alt="Image 03" />
                                        <ProductGallerySubImg src={productImg} alt="Image 04" />
                                        <ProductGallerySubImg src={productImg} alt="Image 05" />
                                    </ProductGallerySubImages>
                                </ProductGalleryList>

                                <ProductGalleryInfo>
                                    <ProductGalleryTopInfo>
                                        <ContentRow>
                                            <ContentFullColumn>
                                                <GeneralFlexRow justifyContent="space-between">
                                                    <GeneralMdText margin="5px 0" fontSize="30px" lineHeight="48px" fontWeight="600" textTransform="unset" color="var(--text-primary)" textAlign="left">Air max pro</GeneralMdText>
                                                    <ProductGalleryInfoRating>
                                                        <Rating
                                                            readonly
                                                            size="20"
                                                            fillColor="var(--review-color)"
                                                            initialValue="3"
                                                            allowHalfIcon
                                                        />
                                                        <GeneralSmText textAlign="left" margin="0 0 0 0.2rem" fontSize="15px" lineHeight="21px" fontWeight="600" textTransform="unset" color="var(--text-primary)">17 (Reviews)</GeneralSmText>

                                                    </ProductGalleryInfoRating>
                                                </GeneralFlexRow>
                                                <GeneralFlexColumn>
                                                    <GeneralSmText style={{
                                                        position: "relative"
                                                    }} margin="5px 0" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Store: Misa shoes and bags
                                                        <VerifiedStoreIcon src={verifiedIcon} /> </GeneralSmText>
                                                    <GeneralMdText margin="5px 0" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">N25,000</GeneralMdText>
                                                    <GeneralSmText margin="5px 0" fontSize="14px" lineHeight="17px" fontWeight="400" textTransform="unset" color="var(--text-primary)" textAlign="left">+ shipping</GeneralSmText>
                                                </GeneralFlexColumn>
                                            </ContentFullColumn>
                                        </ContentRow>
                                    </ProductGalleryTopInfo>
                                    <ProductGalleryColorsInfo>
                                        <ContentRow>
                                            <ContentFullColumn>
                                                <GeneralMdText margin="1rem 0" fontSize="17px" lineHeight="29px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">Colors</GeneralMdText>
                                            </ContentFullColumn>
                                            <ContentFullColumn>
                                                <GeneralFlexRow justifyContent="flex-start">
                                                    <ProductGalleryColors />
                                                    <ProductGalleryColors />
                                                    <ProductGalleryColors />
                                                    <ProductGalleryColors />
                                                </GeneralFlexRow>
                                            </ContentFullColumn>
                                        </ContentRow>
                                    </ProductGalleryColorsInfo>
                                    <ProductGallerySizesInfo>
                                        <ContentRow>
                                            <ContentFullColumn>
                                                <GeneralMdText margin="1rem 0" fontSize="17px" lineHeight="29px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">Sizes</GeneralMdText>
                                            </ContentFullColumn>
                                            <Content2Column2>
                                                <GeneralFlexRow justifyContent="flex-start">
                                                    <ProductGallerySizes>40</ProductGallerySizes>
                                                    <ProductGallerySizes>41</ProductGallerySizes>
                                                    <ProductGallerySizes>42</ProductGallerySizes>
                                                    <ProductGallerySizes>43</ProductGallerySizes>
                                                    <ProductGallerySizes>44</ProductGallerySizes>
                                                </GeneralFlexRow>
                                            </Content2Column2>
                                            <Content2Column2>
                                                <ProductQuantity>
                                                    <ProductQuantityBtn><FiMinus /></ProductQuantityBtn>
                                                    <ProductQuantityInput type="text" value="2" />
                                                    <ProductQuantityBtn><FiPlus /></ProductQuantityBtn>
                                                </ProductQuantity>
                                            </Content2Column2>
                                        </ContentRow>
                                    </ProductGallerySizesInfo>
                                    <CustomButton width="100%" margin="15px 0" color="var(--primary)" background="transparent" border="1px solid var(--primary)" fontWeight="600" textAlign="center">
                                        <AddCartIcon style={{ left: "38%" }} src={shoppingCart} /> Add to cart</CustomButton>
                                </ProductGalleryInfo>
                            </ProductGallery>

                            <ProductInformation>
                                <GeneralMdText margin="0 0 20px" fontSize="25px" lineHeight="40px" fontWeight="600" textTransform="unset" color="var(--text-primary)" textAlign="left">Product Details</GeneralMdText>
                                <GeneralSmText margin="5px 0" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Material: Canvas</GeneralSmText>
                                <GeneralSmText margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Colour: Grey</GeneralSmText>
                                <GeneralSmText margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Detail: Multi-purpose Sneakers</GeneralSmText>
                                <GeneralSmText margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Style: Casual, Lace Up</GeneralSmText>
                                <GeneralSmText margin="0 0 5px" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Size Guide: Choose 1 size higher.</GeneralSmText>
                            </ProductInformation>

                        </ContentFullColumn>
                    </ContentRow>

                </ProductDetailsContent>
            </SiteContainer>
        </ProductDetailsSection>
    )
}

export default ProductDetails
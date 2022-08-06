import React from 'react';
import styled from 'styled-components';
import OrderSummary from '../OrderSummary';
import { CustomColumn, ContentRow, SiteContainer, GeneralMdText, ContentFullColumn, Content2Column2 } from '../../assets/styles/GlobalStyles';
import { Form, Input, InputLabel, RadioInput, RadioLabel } from '../../assets/styles/FormStyles';


export const CheckoutDetailsSection = styled.section`
margin: 1rem 0;
display: flex;
align-items: center;
justify-content: center;
`;


export const CheckoutDetailsCard = styled.div`
padding: 1rem 2rem 3rem;
background: var(--white);
border-radius: 4px;
display: flex;
flex-direction: column;
`;

export const ShippingOptions = styled.div`
padding: 2rem 2rem 4rem;
background: var(--white);
border-radius: 4px;
display: flex;
flex-direction: column;
margin: 1rem 0;
`;



const CheckoutDetails = () => {
    return (
        <CheckoutDetailsSection>
            <SiteContainer>
            <Form>
                <ContentRow>
                    <CustomColumn flex="0 0 70%">
                        <CheckoutDetailsCard>
                           <ContentRow>
                            <ContentFullColumn>
                            <GeneralMdText margin="1rem 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">Delivery Details</GeneralMdText>
                            </ContentFullColumn>

                            <ContentFullColumn>
                            <InputLabel>Name</InputLabel>
                            <Input margin="10px 0" type="text" placeholder='Full Name' />
                            </ContentFullColumn>

                            <ContentFullColumn>
                            <InputLabel>Address</InputLabel>
                            <Input margin="10px 0" type="text" placeholder='Address' />
                            </ContentFullColumn>

                            <ContentFullColumn>
                            <InputLabel>City/Town</InputLabel>
                            <Input margin="10px 0" type="text" placeholder='Full Name' />
                            </ContentFullColumn>

                           </ContentRow>
                        </CheckoutDetailsCard>

                        <ShippingOptions>
                           <ContentRow>
                            <ContentFullColumn>
                            <GeneralMdText margin="1rem 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">Shipping Details</GeneralMdText>
                            </ContentFullColumn>

                            <Content2Column2>
                            <RadioInput margin="10px 0" type="radio" id="door" value="Door Delivery" />
                            <RadioLabel htmlFor='door'>Door step delivery</RadioLabel>
                            </Content2Column2>

                            <Content2Column2>
                            <RadioInput margin="10px 0" type="radio" id="store" value="Store Pickup" />
                            <RadioLabel htmlFor='store'>Pick at the store</RadioLabel>
                            </Content2Column2>


                            {/* <Content2Column2>
                            <Input margin="10px 0" type="radio" />
                            <InputLabel>Name</InputLabel>
                            </Content2Column2> */}

                           </ContentRow>
                        </ShippingOptions>
                    </CustomColumn>
                    <CustomColumn flex="0 0 30%">
                        <OrderSummary typeUrl="checkout" />
                    </CustomColumn>
                </ContentRow>
                </Form>
            </SiteContainer>
        </CheckoutDetailsSection>
    )
}

export default CheckoutDetails
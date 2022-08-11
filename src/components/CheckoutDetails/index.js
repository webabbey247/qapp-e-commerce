import React, {useState} from 'react';
import styled from 'styled-components';
import OrderSummary from '../OrderSummary';
import { CustomColumn, ContentRow, SiteContainer, GeneralMdText, ContentFullColumn, Content2Column2 } from '../../assets/styles/GlobalStyles';
import { Form, Input, InputLabel, RadioInput, RadioLabel } from '../../assets/styles/FormStyles';
import PaymentModal from '../Modals/PaymentModal';


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
    const [showModal, setShowModal] = useState(false);
    const [closeModal, SetCloseModal] = useState(false);
    // const [ isParentData, setIsParentData] = useState(false);

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
                                <label className='customRadioBtn'>
                                <input type='radio' name="gender" value="male" />
                                {/* Door step delivery */}
                                <span className='checkmark'></span>
                                </label>
                            </Content2Column2>

                            <Content2Column2>
                                <label className='customRadioBtn'>
                                <input type='radio' name="gender" value="Female" />
                                {/* Pick at the store */}
                                <span className='checkmark'></span>
                                </label>
                            </Content2Column2>

                            {/* <Content2Column2>
                            <RadioInput name="deliveryOption" margin="10px 0" type="radio" id="door" value="Door Delivery" checked="checked" />
                            <RadioLabel htmlFor='door'>Door step delivery</RadioLabel>
                            </Content2Column2>

                            <Content2Column2>
                            <RadioInput name="deliveryOption" margin="10px 0" type="radio" id="store" value="Store Pickup" />
                            <RadioLabel htmlFor='store'>Pick at the store</RadioLabel>
                            </Content2Column2> */}

                           </ContentRow>
                        </ShippingOptions>
                    </CustomColumn>
                    <CustomColumn flex="0 0 30%">
                        <OrderSummary toChild={showModal} sendToParent={setShowModal} typeUrl="checkout" />
                    </CustomColumn>
                </ContentRow>
                </Form>
            </SiteContainer>
            {showModal && (
                <PaymentModal activeModal={closeModal} setActiveModal={SetCloseModal}  />
            )}
        </CheckoutDetailsSection>

        
    )
}

export default CheckoutDetails
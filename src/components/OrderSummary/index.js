import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { GeneralMdText, GeneralSmText, CustomButton } from '../../assets/styles/GlobalStyles';
import { paystackImg, bankIcon } from '../../assets/images';
import PaymentModal from '../Modals/PaymentModal';

export const OrderSummaryCard = styled.div`
padding: .5rem 1rem 2rem;
background: var(--white);
border-radius: 4px;
display: flex;
flex-direction: column;
`;

export const OrderSummaryChild = styled.div`
border-bottom: 1px solid #D1D8DB;
padding: 0.3rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;

:nth-child(4n) {
    border-bottom: 1px dashed #D1D8DB; 
}

&: last-child {
    border-bottom: none;
}
`;

export const PaymentOptionCard = styled.div`
background: var(--white);
padding: 1rem 0;
display: flex;
flex-direction: column;
`;

export const PaymentOptionChild = styled.div`
padding: 1rem 1rem;
background: #FDFDFD;
border: 1px solid #8D9EA5;
border-radius: 4px;
margin: 0.5rem 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&:first-child {
    background: #FAE2D3;
    border: 1px solid #E46F24;  
}
`;

export const PaymentOptionPartner = styled.img`
width: 160px;
height: 28.51px;
`;


export const OrderSummaryBtnContainer = styled.div`
background: var(--white);
padding: 0 1rem 1rem;
`;

const OrderSummary = ({ typeUrl }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <OrderSummaryCard>
                <GeneralMdText margin="1rem 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">Order summary</GeneralMdText>
                <OrderSummaryChild>
                    <GeneralMdText margin="1rem 0 0" fontSize="16px" lineHeight="19px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Quantity</GeneralMdText>
                    <GeneralMdText margin="1rem 0 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="right">2</GeneralMdText>
                </OrderSummaryChild>

                <OrderSummaryChild>
                    <GeneralMdText margin="1rem 0 0" fontSize="16px" lineHeight="19px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Subtotal</GeneralMdText>
                    <GeneralMdText margin="1rem 0 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="right">N50,000</GeneralMdText>
                </OrderSummaryChild>

                {typeUrl === "checkout" && (
                    <>
                        <OrderSummaryChild>
                            <GeneralMdText margin="1rem 0 0" fontSize="16px" lineHeight="19px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Discount</GeneralMdText>
                            <GeneralMdText margin="1rem 0 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--cart-color)" textAlign="right">25%</GeneralMdText>
                        </OrderSummaryChild>

                        <OrderSummaryChild>
                            <GeneralMdText margin="1rem 0 0" fontSize="16px" lineHeight="19px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Total</GeneralMdText>
                            <GeneralMdText margin="1rem 0 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--cart-color)" textAlign="right">N37,875</GeneralMdText>
                        </OrderSummaryChild>
                    </>
                )}


            </OrderSummaryCard>

            {typeUrl === "checkout" && (
                <PaymentOptionCard>
                    <PaymentOptionChild>
                        <PaymentOptionPartner src={paystackImg} alt="Paystack" />
                        <GeneralSmText margin="5px 0" fontSize="14px" lineHeight="17px" fontWeight="400" textTransform="unset" color="var(--text-primary)" textAlign="center">Pay with Paystack</GeneralSmText>
                    </PaymentOptionChild>
                    <PaymentOptionChild>
                        <PaymentOptionPartner style={{
                            width: "28.51px",
                            height: "28.51px"
                        }} src={bankIcon} alt="Pay with Bank Transfer" />
                        <GeneralSmText margin="5px 0" fontSize="14px" lineHeight="17px" fontWeight="400" textTransform="unset" color="var(--text-primary)" textAlign="center">Pay with Bank transfer</GeneralSmText>
                    </PaymentOptionChild>
                </PaymentOptionCard>

            )}

            <OrderSummaryBtnContainer>
                {typeUrl === "checkout" ? (
                     <CustomButton onClick={()=>setShowModal(true)} type='button' style={{ display: "block" }} fontWeight="600" color="var(--white)" margin="0 1rem" background="var(--primary)">Finish</CustomButton>
                ) : (
                    <CustomButton style={{ display: "block" }} as={Link} to="/checkout" fontWeight="600" color="var(--white)" margin="0 1rem" background="var(--primary)">Proceed to checkout</CustomButton>
                )}
            </OrderSummaryBtnContainer>

            {showModal && (
                <PaymentModal />
            )}
        </>
    )
}

export default OrderSummary
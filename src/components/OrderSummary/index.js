import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { GeneralMdText, GeneralSmText, CustomButton } from '../../assets/styles/GlobalStyles';
import { paystackImg, bankIcon, flutterwaveImg } from '../../assets/images';
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

:nth-child(5n) {
    border-bottom: 1px dashed #D1D8DB; 
}

&: last-child {
    border-bottom: none;
}
`;




const OrderSummary = ({ delivery, typeUrl }) => {
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

{delivery === "Home Delivery" && (
                            <OrderSummaryChild>
                            <GeneralMdText margin="1rem 0 0" fontSize="16px" lineHeight="19px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left">Shipping Charges</GeneralMdText>
                            <GeneralMdText margin="1rem 0 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--cart-color)" textAlign="right">N1,550</GeneralMdText>
                        </OrderSummaryChild>
                        )}


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
        </>
    )
}

export default OrderSummary
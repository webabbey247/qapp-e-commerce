import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { ContentFullColumn, CustomButton, GeneralMdText, GeneralSmText, ContentRow, Content2Column2, Content4Column4, GeneralFlexRow } from '../../assets/styles/GlobalStyles';
import { successIcon } from '../../assets/images';
import { Form, Input, InputLabel, OTPInput } from '../../assets/styles/FormStyles';
import { FaTimes } from "react-icons/fa"


export const ModalContainer = styled.div`
background: rgba(0, 0, 0, 0.75);
display: flex;
align-items: flex-start;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
overflow-y: auto;
overflow-x: hidden;
z-index: 1000;
`;

export const ModalBody = styled.div`
width: 550px;
position: relative;
padding: 1rem 2rem;
background: var(--white);
background-clip: padding-box;
box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
margin: auto;
border-radius: 4px;
`;

export const ModalContent = styled.div`
display: flex;
justify-content: center;
align-items:center;
padding: 1.5rem 0 0;
flex-direction: column;
`;

export const ModalClose = styled.div`
align-items: center;
color: #111827;
display: flex;
justify-content: center;
pointer-events: none;
position: absolute;
right: 5%;
top: 5%;
width: 45px;
height: 45px;
border-radius: 50%;
background: #FBF3ED;
`;

export const ModalIcon = styled.img`
height: 25px;
width: 25px;
`;

export const ModalTopInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 2rem 0;
width: 100%;
`;

export const ModalTopChildren = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 0 2rem;
`;

export const TransactionIcon = styled.img`
width: 80px;
height: 80px;
`;

export const OTPContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: min(100%, 15rem);
`;

export const PaymentHintCard = styled.div`
background: #FAE2D3;
border: 1px solid #E46F24;
border-radius: 4px;
padding: 2rem 6rem;
margin-bottom: 2rem ;
`;


const PaymentModal = ({ setActiveModal }) => {
    const [showForm, setShowForm] = useState(true);
    const [showBankForm, setShowBankForm] = useState(true);
    const [showPaymentHint, setShowPaymentHint] = useState(false);
    const [showOTPForm, setShowOTPForm] = useState(false);
    const [showSummary, setShowSummary] = useState(false);

    const AccountOptions = [
        { value: 'Account 1-0023446789', label: 'Account 1-0023446789' },
        { value: 'Account 2-0023446789', label: 'Account 2-0023446789' },
    ];

    const BankOptions = [
        { value: 'First Bank', label: 'First Bank' },
        { value: 'United Bank Of Africa', label: 'United Bank Of Africa' },
    ];


    return (
        <>
            <ModalContainer>
                <ModalBody>
                    <ModalContent>
                        <ModalClose onClick={setActiveModal(false)}><FaTimes color='var(--primary)' /></ModalClose>

                        {showForm && (
                            <ModalTopInfo>
                                <Form>
                                    {showBankForm && (
                                        <ContentRow>
                                            <ContentFullColumn>
                                                <Select
                                                    placeholder="Select Preferred Bank"
                                                    options={BankOptions}
                                                />
                                            </ContentFullColumn>

                                            <ContentFullColumn>
                                                <Select
                                                    placeholder="Select Preferred Account"
                                                    options={AccountOptions}
                                                />
                                            </ContentFullColumn>

                                            {!showPaymentHint && (
                                                <ContentFullColumn>
                                                    <CustomButton type='button' margin="1rem 0 0"
                                                        onClick={() => { setShowPaymentHint(true); setShowBankForm(false) }} fontWeight="600" fontSize="16px" color="var(--white)" background="var(--primary)">Continue</CustomButton>
                                                </ContentFullColumn>
                                            )}
                                        </ContentRow>
                                    )}

                                    {showPaymentHint && (
                                        <ContentRow>
                                            <ContentFullColumn>
                                                <ModalTopInfo>
                                                    <PaymentHintCard>
                                                        <GeneralMdText fontSize="14px" lineHeight="19.05px" color="var(--text-primary)" fontWeight="600" textAlign="center" textTransform="unset" margin="10px 0">You are about to pay N37,875 for a purchase on the merchant website</GeneralMdText>
                                                    </PaymentHintCard>

                                                    {showOTPForm && (
                                                        <OTPContainer>
                                                            <ContentRow>
                                                            <ContentFullColumn>
                                                                <GeneralMdText margin="10px 0" fontSize="18px" lineHeight="29px" fontWeight="600" textTransform="unset" color="var(--primary)" textAlign="center">Enter your transfer pin below</GeneralMdText>
                                                            </ContentFullColumn>
                                                            <Content4Column4>
                                                                <OTPInput type="password" maxLength="1" />
                                                            </Content4Column4>
                                                            <Content4Column4>
                                                                <OTPInput type="password" maxLength="1" />
                                                            </Content4Column4>
                                                            <Content4Column4>
                                                                <OTPInput type="password" maxLength="1" />
                                                            </Content4Column4>
                                                            <Content4Column4>
                                                                <OTPInput type="password" maxLength="1" />
                                                            </Content4Column4>
                                                        </ContentRow>
                                                        </OTPContainer>
                                                    )}
                                                    <GeneralFlexRow>
                                                        {showOTPForm ? (
                                                            <CustomButton onClick={() => { setShowSummary(true); setShowForm(false) }} type='button' fontWeight="600" fontSize="16px" color="var(--white)" margin="2rem 0 0" background="var(--primary)" width="100%">Proceed to pay (N37,875)</CustomButton>
                                                        ) : (
                                                            <CustomButton onClick={() => setShowOTPForm(true)} type='button' fontWeight="600" fontSize="16px" color="var(--white)" margin="1rem 0" background="var(--primary)" width="100%">Proceed to pay (N37,875)</CustomButton>
                                                        )}
                                                    </GeneralFlexRow>
                                                </ModalTopInfo>
                                            </ContentFullColumn>
                                        </ContentRow>
                                    )}
                                </Form>
                            </ModalTopInfo>
                        )}





                        {showSummary && (
                            <ModalTopInfo>
                                <TransactionIcon src={successIcon} alt="Success" />
                                <GeneralMdText textAlign="center" margin="10px 0" fontSize="24px" lineHeight="29.23px" color="var(--text-primary)" fontWeight="600" textTransform="unset">Success</GeneralMdText>

                                <ModalTopChildren>
                                    <GeneralMdText fontSize="14px" lineHeight="17px" color="var(--text-primary)" fontWeight="600" textAlign="center" textTransform="unset" margin="10px 0">Payment of N37,875 was successful</GeneralMdText>
                                </ModalTopChildren>

                                <GeneralFlexRow>
                                    <CustomButton to="/" as={Link} fontWeight="600" fontSize="16px" color="var(--white)" margin="1rem 0" background="var(--primary)" width="100%">Back to shopping </CustomButton>
                                </GeneralFlexRow>
                            </ModalTopInfo>
                        )}





                    </ModalContent>
                </ModalBody>
            </ModalContainer>
        </>
    )
}

export default PaymentModal
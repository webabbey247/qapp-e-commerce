import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { ContentFullColumn, CustomButton, GeneralMdText, GeneralSmText, ContentRow, Content2Column2, Content4Column4, GeneralFlexRow } from '../../assets/styles/GlobalStyles';
import { successIcon } from '../../assets/images';
import { Form, Input, InputLabel } from '../../assets/styles/FormStyles';


export const ModalContainer = styled.div`
background: rgba(0, 0, 0, 0.6);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 11;
`;

export const TransactionModalBody = styled.div`
background: var(--white);
border-radius: 0.5em;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
left: 50%;
max-width: 90%;
pointer-events: none;
position: absolute;
top: 50%;
transform: translate(-50%, -50%);
width: 40vw;
text-align: left;
display: flex;
flex-direction: column;
`;

export const TransactionModal = styled.div`
display: flex;
justify-content: center;
align-items:center;
padding: 1.5rem 0 3rem;
flex-direction: column;
`;

export const ModalClose = styled.div`
align-items: center;
color: #111827;
display: flex;
height: 4.5em;
justify-content: center;
pointer-events: none;
position: absolute;
right: 0;
top: 0;
width: 4.5em;
`;

export const ModalIcon = styled.img`
height: 25px;
width: 25px;
`;

// export const TransactionModalTitle = styled.div`
// color: #111827;
// padding: 1.5em 2em;
// pointer-events: all;
// position: relative;
// width: calc(100% - 4.5em);
// `;

export const TransactionModalContent = styled.div`
width:min(100%,30rem);
`;

export const ModalTopInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 2rem 0;
z-index: 1021;
position: relative;
`;

export const ModalTopChildren = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 0 2rem;
`;

export const TransactionIconHolder = styled.div`
padding:  0.6rem 2rem;
background: var(--secondary-2);
display: flex;
flex-direction: row;
border-radius: 8px;
`;

export const TransactionIcon = styled.img`
width: 80px;
height: 80px;
`;


export const TransactionInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-bottom: 2rem;
background: var(--secondary-2);
padding: 2rem;
border-radius: 8px;
margin-left: 3rem;
margin-right: 3rem;
`;

export const TransactionInfoGroup = styled.div`
display: flex;
flex-direction: column;
border-bottom: 0.05px solid #F7F7F7;
padding: 12px 0;
`;

export const OperationsInfoGroup = styled.div`
display: flex;
flex-direction: row;
padding: 12px 0;
`;

export const ModalBottomButton = styled.div`
display: flex;
flex-direction: row;
margin: auto 3rem;
`;

export const ThemeText = styled.span`
color: var(--orange);
`;

export const OTPContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 2rem 4rem;
`;

export const PaymentHintCard = styled.div`
background: #FAE2D3;
border: 1px solid #E46F24;
border-radius: 4px;
padding: 2rem 6rem;
margin-bottom: 2rem ;
`;


const PaymentModal = ({ typeUrl }) => {
    const [showPaymentHint, setShowPaymentHint]= useState(false);
    const [showOTPForm, setShowOTPForm]= useState(false);
    const [showSummary, setShowSummary]= useState(false);

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
                <TransactionModalBody>
                    <TransactionModal>
                        <TransactionModalContent>
                            {/* <ModalClose>X</ModalClose> */}
                            <ModalTopInfo>
                                <Form>
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
                                    </ContentRow>

                                    {showOTPForm && (
                                    <ContentRow>
                                    <OTPContainer>
                                        <ContentRow>
                                            <ContentFullColumn>
                                                <GeneralMdText margin="10px 0" fontSize="18px" lineHeight="29px" fontWeight="600" textTransform="unset" color="var(--primary)" textAlign="center">Enter your transfer pin below</GeneralMdText>
                                            </ContentFullColumn>
                                            <Content4Column4>
                                                <Input type="password" maxLength="1" />
                                            </Content4Column4>
                                            <Content4Column4>
                                                <Input type="password" maxLength="1" />
                                            </Content4Column4>
                                            <Content4Column4>
                                                <Input type="password" maxLength="1" />
                                            </Content4Column4>
                                            <Content4Column4>
                                                <Input type="password" maxLength="1" />
                                            </Content4Column4>
                                        </ContentRow>
                                    </OTPContainer>
                                    </ContentRow>
                                    )}

                                    <ContentRow>
                                        <ContentFullColumn>
                                            <CustomButton onClick={()=>setShowOTPForm(true)} fontWeight="600" fontSize="16px" color="var(--white)" background="var(--primary)" width="100%">Continue</CustomButton>
                                        </ContentFullColumn>
                                    </ContentRow>
                                </Form>
                            </ModalTopInfo>

                            {showPaymentHint && (
                                <ModalTopInfo>
                                <PaymentHintCard>
                                <GeneralMdText fontSize="14px" lineHeight="19.05px" color="var(--text-primary)" fontWeight="600" textAlign="center" textTransform="unset" margin="10px 0">You are about to pay N37,875 for a purchase on the merchant website</GeneralMdText>
                                </PaymentHintCard>

                                <GeneralFlexRow>
                                <CustomButton fontWeight="600" fontSize="16px" color="var(--white)" margin="1rem 0" background="var(--primary)" width="100%">Procede to pay (N37,875)</CustomButton>
                                    </GeneralFlexRow>
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





                        </TransactionModalContent>
                    </TransactionModal>
                </TransactionModalBody>
            </ModalContainer>
        </>
    )
}

export default PaymentModal
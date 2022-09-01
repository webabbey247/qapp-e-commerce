import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import Select from 'react-dropdown-select';
import Select from 'react-select'
import { usePaystackPayment } from 'react-paystack';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import OrderSummary from '../OrderSummary';
import { CustomColumn, ContentRow, SiteContainer, GeneralMdText, ContentFullColumn, Content2Column2, CustomButton, GeneralSmText, Content4Column4, HiddenButton } from '../../assets/styles/GlobalStyles';
import { Form, Input, InputLabel } from '../../assets/styles/FormStyles';
import { paystackImg, bankIcon, flutterwaveImg } from '../../assets/images';
import PaymentModal from '../Modals/PaymentModal';
import { PaystackConfig, FlutterwaveConfig } from '../../utils/config';


export const CheckoutDetailsSection = styled.section`
margin: 1rem 0;
display: flex;
align-items: center;
justify-content: center;
`;


export const CheckoutDetailsCard = styled.div`
padding: 1rem 2rem 2rem;
background: var(--white);
border-radius: 4px;
display: flex;
flex-direction: column;
margin: 1rem 0;

`;

export const ShippingOptions = styled.div`
padding: 1rem 2rem 2rem;
background: var(--white);
border-radius: 4px;
display: flex;
flex-direction: column;
`;


export const CheckboxLabel = styled.label`
display: block;
line-height: 40px;
padding: 1rem 0;
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: var(--text-secondary);
position: relative;
z-index: 1;

  `;

export const InputCheckbox = styled.input.attrs({
    type: 'checkbox',
})`
  appearance: none;
  position: relative;
  top: 8px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;

  &:hover {
    background: var(--primary);
  }

  &:checked{
    background: var(--white);
    border: 5px solid var(--primary);
  }

  &:checked::after {
    // -webkit-animation: click-wave 0.65s;
    // -moz-animation: click-wave 0.65s;
    // animation: click-wave 0.65s;
    background: var(--primary);
    content: "";
    display: block;
    position: relative;
    z-index: 100;
    border-radius: 50%;
  }
  `;


export const PaymentOptionCard = styled.div`
background: var(--white);
padding: 1rem 0;
display: flex;
flex-direction: column;
`;

export const PaymentOptionChild = styled.div`
margin: 0.5rem 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const PaymentOptionPartner = styled.img`
width: 160px;
height: 28.51px;
margin: auto;

`;


export const OrderSummaryBtnContainer = styled.div`
background: var(--white);
padding: 0 1rem 1rem;
`;

export const PaymentInputLabel = styled.label`
    position: relative;
    padding: 1rem;
	background: #FDFDFD;
    border: 1px solid #8D9EA5;
    border-radius: 4px;
	height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
	cursor: pointer;
	box-sizing: border-box;
    width: 100%; 
    max-width: 100%;

  &:first-child {
    margin-left: 0;
  }
  `;

export const PaymentTypeInput = styled.input.attrs({
    type: 'radio',
})`
  display: none;

  &:checked + ${PaymentInputLabel} {
    border: 1px solid var(--primary);
	background: rgb(250, 226, 211) none repeat scroll 0% 0%;;
  }
  `;


export const InputErrors = styled.div`
  width: 100%;
  font-size: 13px !important;
  color: #dc3545;
  margin: 3px 0 15px;
`;


const CheckoutDetails = ({ typeUrl }) => {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [deliveryCost, setDeliveryCost] = useState('')
    const [paymentOption, setPaymentOption] = useState('')
    const payStackButtonRef = useRef(null)
    const flutterWaveButtonRef = useRef(null)
    const bankTransferButtonRef = useRef(null)

    const initializePayment = usePaystackPayment(PaystackConfig);  
    const handleFlutterPayment = useFlutterwave(FlutterwaveConfig);
  
    const initPaymentButton = () => {
        switch (paymentOption) {
            case 'paystack':
                return payStackButtonRef.current.click();
            case 'flutterwave':
                return flutterWaveButtonRef.current.click();
            case 'bank':
                return bankTransferButtonRef.current.click();
            default:
                return;
        }
    };

    const openModal = () => {
        setShowModal(!showModal);
    }
    const LocationOption = [
        { value: 'Lagos - Abuja', label: 'Lagos - Abuja' },
        { value: 'Abuja - Kano', label: 'Abuja - Kano' },
    ];

    const validationSchema = yup.object().shape({
        firstName: yup.string().trim().required("Kindly provide your first name!"),
        lastName: yup.string().trim().required("Kindly provide your last name!"),
        emailAddress: yup.string().trim().required("Kindly provide a valid email address"),
        mobileNumber: yup
            .number("This should be numbers or integers!")
            .positive()
            .typeError("Mobile Number should be a valid number!")
            .min(11, "Mobile Number shouldn't be lower than 11 digits!")
            .required("Kindly provide a valid mobile number!"),
        address: yup.string().trim().required("Kindly provide a valid delivery address!"),
        deliveryType: yup.string().required("Kindly select a preferred delivery option!"),
        paymentType: yup.string().required("Kindly select a preferred payment option!"),
        location: yup
            .object()
            .shape({
                label: yup.string().required("Location is required"),
                value: yup.string().required("Location is required")
            })
            .nullable() // for handling null value when clearing options via clicking "x"
            .required("status is required (from outter null check)")
    });

    const { register, handleSubmit, control, formState } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            checkbox: false,
        }
    });

    const { errors } = formState;

    const requestDemo = async (data) => {
        console.log(data)
        initPaymentButton();
    };

    const onSuccess = (reference) => {
        console.log(reference);
        navigate('/');
    };

    // you can call this function anything
    const onClose = () => {
        console.log('closed')
        navigate('/');

    }

    return (
        <>
            <CheckoutDetailsSection>
                <SiteContainer>
                    <Form onSubmit={handleSubmit(requestDemo)}>
                        <ContentRow>
                            <CustomColumn flex="0 0 70%">

                                <ShippingOptions>
                                    <ContentRow>
                                        <ContentFullColumn>
                                            <GeneralMdText margin="1rem 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">Delivery Options</GeneralMdText>
                                        </ContentFullColumn>

                                        <Content2Column2>
                                            <div className='radioGroup'>
                                                <Controller
                                                    name="deliveryType"
                                                    {...register("deliveryType", {
                                                        onChange: (e) => { setDeliveryCost(e.target.value) },
                                                    })}
                                                    // {...register("deliveryType")}
                                                    control={control}
                                                    render={({ field }) =>
                                                        <input  {...field} id="doorStep" type='radio' name="deliveryType"
                                                            value="Home Delivery" />}
                                                />
                                                <label htmlFor='doorStep'>Door step delivery</label>
                                            </div>
                                        </Content2Column2>

                                        <Content2Column2>
                                            <div className='radioGroup'>
                                                <Controller
                                                    name="deliveryType"
                                                    control={control}
                                                    {...register("deliveryType", {
                                                        onChange: (e) => { setDeliveryCost(e.target.value) },
                                                    })}
                                                    render={({ field }) => <input  {...field} id="storePickUp" type='radio' name="deliveryType" value="Store Pickup" />}
                                                />

                                                <label htmlFor='storePickUp'> Pick at the store</label>
                                            </div>
                                        </Content2Column2>

                                        <ContentFullColumn>
                                            {errors.deliveryType && (
                                                <InputErrors>{errors.deliveryType.message}</InputErrors>
                                            )}
                                        </ContentFullColumn>
                                    </ContentRow>
                                </ShippingOptions>
                                <CheckoutDetailsCard>
                                    <ContentRow>
                                        <ContentFullColumn>
                                            <GeneralMdText margin="1rem 0" fontSize="20px" lineHeight="34px" fontWeight="600" textTransform="unset" color="var(--text-secondary)" textAlign="left">Delivery Details</GeneralMdText>
                                        </ContentFullColumn>

                                        <Content2Column2>
                                            <InputLabel>First Name</InputLabel>
                                            <Input className={`${errors.firstName ? "invalid" : ""}`} margin="10px 0" type="text" placeholder=''
                                                {...register("firstName")}
                                            />
                                            {errors.firstName && (
                                                <InputErrors>{errors.firstName.message}</InputErrors>
                                            )}
                                        </Content2Column2>

                                        <Content2Column2>
                                            <InputLabel>Last Name</InputLabel>
                                            <Input className={`${errors.lastName ? "invalid" : ""}`} margin="10px 0" type="text" placeholder='' {...register("lastName")}
                                            />
                                            {errors.lastName && (
                                                <InputErrors>{errors.lastName.message}</InputErrors>
                                            )}
                                        </Content2Column2>

                                        <Content2Column2>
                                            <InputLabel>Email Address</InputLabel>
                                            <Input className={`${errors.emailAddress ? "invalid" : ""}`} margin="10px 0"
                                                type="text"
                                                placeholder=''
                                                {...register("emailAddress", {
                                                    onChange: (e) => {setEmail(e.target.value) },
                                                })}
                                            />
                                            {errors.emailAddress && (
                                                <InputErrors>{errors.emailAddress.message}</InputErrors>
                                            )}
                                        </Content2Column2>

                                        <Content2Column2>
                                            <InputLabel>Phone Number</InputLabel>
                                            <Input className={`${errors.mobileNumber ? "invalid" : ""}`} margin="10px 0" type="text" placeholder='' {...register("mobileNumber")} />
                                            {errors.mobileNumber && (
                                                <InputErrors>{errors.mobileNumber.message}</InputErrors>
                                            )}
                                        </Content2Column2>

                                        <Content2Column2>
                                            <InputLabel>Address</InputLabel>
                                            <Input className={`${errors.address ? "invalid" : ""}`} margin="10px 0" type="text" placeholder='' {...register("address")} />
                                            {errors.address && (
                                                <InputErrors>{errors.address.message}</InputErrors>
                                            )}
                                        </Content2Column2>

                                        <Content2Column2>
                                            <InputLabel>Location</InputLabel>
                                            <Controller
                                                name="location"
                                                {...register("location")}
                                                control={control}
                                                render={({ field }) => (
                                                    <Select
                                                        {...field}
                                                        isClearable
                                                        isSearchable={true}
                                                        classNamePrefix="dropdown"
                                                        options={LocationOption}
                                                    />
                                                )}
                                            />
                                            {errors.location && (
                                                <InputErrors>{errors.location.message || errors.location.label.message}</InputErrors>
                                            )}
                                        </Content2Column2>

                                        <Content2Column2>
                                            <CheckboxLabel>
                                                <Controller
                                                    name="onboardUser"
                                                    {...register("onboardUser")}
                                                    control={control}
                                                    render={({ field }) => <InputCheckbox type="checkbox" value="true" {...field} />}
                                                />
                                                Create an account
                                            </CheckboxLabel>
                                        </Content2Column2>

                                    </ContentRow>
                                </CheckoutDetailsCard>


                            </CustomColumn>
                            <CustomColumn flex="0 0 30%">
                                {/* <OrderSummary toChild={showModal} sendToParent={setShowModal} typeUrl="checkout" /> */}
                                <OrderSummary delivery={deliveryCost} typeUrl="checkout" />

                                <PaymentOptionCard>
                                    <PaymentOptionChild>
                                        <Controller
                                            name="paymentType"
                                            control={control}
                                            {...register("paymentType", {
                                                onChange: (e) => { setPaymentOption(e.target.value) },
                                            })}
                                            render={({ field }) => <PaymentTypeInput {...field} type="radio" id="flutterwave" value="flutterwave" />}
                                        />
                                        <PaymentInputLabel htmlFor="flutterwave">
                                            <PaymentOptionPartner src={flutterwaveImg} alt="Flutterwave" />
                                            <GeneralSmText margin="5px 0" fontSize="14px" lineHeight="17px" fontWeight="400" textTransform="unset" color="var(--text-primary)" textAlign="center">Pay with Flutterwave</GeneralSmText>
                                        </PaymentInputLabel>
                                    </PaymentOptionChild>

                                    <PaymentOptionChild>
                                        <Controller
                                            name="paymentType"
                                            control={control}
                                            {...register("paymentType", {
                                                onChange: (e) => { setPaymentOption(e.target.value) },
                                            })}
                                            render={({ field }) => <PaymentTypeInput  {...field} type="radio" id="paystack" value="paystack" />}
                                        />
                                        <PaymentInputLabel htmlFor="paystack">
                                            <PaymentOptionPartner src={paystackImg} alt="Paystack" />
                                            <GeneralSmText margin="5px 0" fontSize="14px" lineHeight="17px" fontWeight="400" textTransform="unset" color="var(--text-primary)" textAlign="center">Pay with Paystack</GeneralSmText>
                                        </PaymentInputLabel>
                                    </PaymentOptionChild>

                                    <PaymentOptionChild>
                                        <Controller
                                            name="paymentType"
                                            control={control}
                                            {...register("paymentType", {
                                                onChange: (e) => { setPaymentOption(e.target.value) },
                                            })}
                                            render={({ field }) => <PaymentTypeInput {...field} type="radio" id="bank" value="bank" />}
                                        />
                                        <PaymentInputLabel htmlFor="bank">
                                            <PaymentOptionPartner style={{
                                                width: "28.51px",
                                                height: "28.51px"
                                            }} src={bankIcon} alt="Pay with Bank Transfer" />
                                            <GeneralSmText margin="5px 0" fontSize="14px" lineHeight="17px" fontWeight="400" textTransform="unset" color="var(--text-primary)" textAlign="center">Pay with Bank transfer</GeneralSmText>
                                        </PaymentInputLabel>
                                    </PaymentOptionChild>

                                    <PaymentOptionChild>
                                        {errors.paymentType && (
                                            <InputErrors>{errors.paymentType.message}</InputErrors>
                                        )}
                                    </PaymentOptionChild>


                                </PaymentOptionCard>


                                <OrderSummaryBtnContainer>
                                    <HiddenButton
                                        ref={payStackButtonRef}
                                        tabIndex="-1"
                                        onClick={() => {
                                            initializePayment(onSuccess, onClose)
                                        }} />

                                    <HiddenButton
                                        ref={flutterWaveButtonRef}
                                        tabIndex="-1"
                                        onClick={() => {
                                            handleFlutterPayment({
                                                callback: (response) => {
                                                   console.log(response);
                                                    closePaymentModal() 
                                                    // this will close the modal programmatically
                                                },
                                                onClose: () => {},
                                              });
                                        }} />
                                    <HiddenButton
                                        ref={bankTransferButtonRef}
                                        tabIndex="-1"
                                        onClick={() => setShowModal(true)}
                                    />
                                    <CustomButton type='submit' style={{ display: "block" }} fontWeight="600" color="var(--white)" margin="0" background="var(--primary)">Check Out</CustomButton>
                                </OrderSummaryBtnContainer>
                            </CustomColumn>
                        </ContentRow>
                    </Form>
                </SiteContainer>

            </CheckoutDetailsSection>

            {showModal && (
                <PaymentModal close={openModal} />
            )}
        </>
    )
}

export default CheckoutDetails
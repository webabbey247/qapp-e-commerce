import React from 'react'
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'
import { GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles';


export const CommentsCardChild = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
border-bottom: 1px solid #E5EBEE;
`;


export const CommentsCardChildLTR = styled.div`
flex: 0 0 80%;
max-width: 80%
display: flex;
flex-direction: column;
`;

export const CommentsCardChildRTL = styled.div`
flex: 0 0 20;
max-width: 20%;
margin-right: 0;
margin-left: auto;
`;

export const CommentsCardChildInitialCard = styled.div`
width: 70px;
height: 70px;
background: var(--text-primary);
position: relative;
border-radius: 50%;
margin-top: 1.8rem;
`;

export const CommentsCardChildRTLInitial = styled.span`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
color: var(--white);
font-weight: 700;
font-size: 28px;
text-transform: uppercase;
display: flex;
align-items: center;
justify-content: center;
`;


const CommentsCard = () => {
    return (
        <CommentsCardChild>
            <CommentsCardChildLTR>
                <GeneralMdText margin="5px 0" fontSize="17px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--text-secondary)" textAlign="left"><strong>I like it, good job</strong></GeneralMdText>
                <GeneralSmText margin="0 0 5px" fontSize="15px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--gray)" textAlign="left">By Adedamola Alausa</GeneralSmText>
                <GeneralSmText margin="0 0 5px" fontSize="15px" lineHeight="24px" fontWeight="400" textTransform="unset" color="var(--gray-2)" textAlign="left">02-08-2022</GeneralSmText>
                <Rating
                    readonly
                    size="20"
                    fillColor="var(--review-color)"
                    initialValue="3"
                    allowHalfIcon
                />
            </CommentsCardChildLTR>

            <CommentsCardChildRTL>
                <CommentsCardChildInitialCard>
                    <CommentsCardChildRTLInitial>A</CommentsCardChildRTLInitial>
                </CommentsCardChildInitialCard>
            </CommentsCardChildRTL>
        </CommentsCardChild>
    )
}

export default CommentsCard
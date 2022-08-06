import React from 'react'
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'
import { Form, InputTextArea } from '../../assets/styles/FormStyles'
import { GeneralFlexColumn, GeneralSmText } from '../../assets/styles/GlobalStyles'
import { FormSubmitBtn } from '../../assets/styles/ButtonStyles'

export const CommentFormWrapper = styled.div`
padding: 2rem 0;
display: flex;
flex-direction: column;
`;

export const AverageRatingChild = styled.div`
margin-bottom: 1rem;
`;

const CommentForm = () => {
    return (
        <CommentFormWrapper>
            <Form>
                <InputTextArea placeholder="Say something nice" />
                <GeneralFlexColumn>
                    <GeneralSmText color="var(--text-secondary)" textAlign="left" fontSize="15px" lineHeight="19px" fontWeight="600" margin="10px 0" textTransform="unset">Tap a star to rate</GeneralSmText>
                    <AverageRatingChild>
                        <Rating
                            transition
                            size="25"
                            fillColor='var(--review-color)'
                            initialValue="0"
                            allowHalfIcon
                        />
                    </AverageRatingChild>
                </GeneralFlexColumn>
                <FormSubmitBtn>Submit</FormSubmitBtn>
            </Form>
        </CommentFormWrapper>
    )
}

export default CommentForm

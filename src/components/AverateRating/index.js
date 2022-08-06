import React from 'react'
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'
import { GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles'

export const AverateRatingCard = styled.div`
background: #FBFBFB;
border-radius: 4px;
padding: 2rem;
display: flex;
flex-direction: column;
margin-left: 5rem;
`;

export const AverageRatingChild = styled.div`
margin: auto;
`;

const AverateRating = () => {
    return (
        <AverateRatingCard>
            <GeneralSmText fontWeight="400" textAlign="center" fontSize="20px" lineHeight="24px" textTransform="unset" margin="0" padding="0" color="var(--text-secondary)">Average rating</GeneralSmText>
            <GeneralMdText fontWeight="700" textAlign="center" fontSize="40px" lineHeight="58px" textTransform="unset" margin="10px 0 0" padding="0" color="var(--text-secondary)">4.5</GeneralMdText>
            <AverageRatingChild>
                <Rating
                    readonly
                    size="35"
                    fillColor='var(--review-color)'
                    initialValue="4.5"
                    allowHalfIcon
                />
            </AverageRatingChild>

        </AverateRatingCard>
    )
}

export default AverateRating
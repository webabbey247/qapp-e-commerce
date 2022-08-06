import React from 'react'
import styled from 'styled-components'
import { ContentFullColumn, ContentRow, GeneralFlexRow, GeneralMdText, SiteContainer } from '../../assets/styles/GlobalStyles';
import CommentsCard from './CommentsCard';
import AverateRating from '../AverateRating';
import CommentForm from './CommentForm';

export const CommentsSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 2rem 0;
`;

export const CommentsContent = styled.div`
background: var(--white);
border-radius: 4px;
padding: 2.5rem 2rem;
display: flex;
flex-direction: column;
`;

export const CommentFeedback = styled.div`
flex: 0 0 70%;
max-width: 70%;
`;

export const CommentRating = styled.div`
flex: 0 0 30%;
max-width: 30%;
`;



const Comments = ({typeUrl}) => {
    return (
        <CommentsSection>
            <SiteContainer>
                <CommentsContent>
                    <ContentRow>
                        <ContentFullColumn>
                            <GeneralMdText margin="0 0 20px" fontSize="30px" lineHeight="40px" fontWeight="600" textTransform="unset" color="var(--text-primary)" textAlign="left">Store Feedback</GeneralMdText>
                        </ContentFullColumn>
                    </ContentRow>

                    <ContentRow>
                        <ContentFullColumn>
                            <GeneralFlexRow width="100%" justifyContent="space-between">
                            <CommentFeedback>
                                <CommentsCard />
                                <CommentsCard />
                                <CommentsCard />
                                {typeUrl === "Info" && (
                                <CommentForm />
                                )}
                            </CommentFeedback>
                            <CommentRating>
                                <AverateRating />
                            </CommentRating>
                            </GeneralFlexRow>
                        </ContentFullColumn>
                    </ContentRow>
                </CommentsContent>
            </SiteContainer>
        </CommentsSection>
    )
}

export default Comments
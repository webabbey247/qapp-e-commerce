import React from 'react'
import { Link } from 'react-router-dom';
import { ContentFullColumn, ContentRow, GeneralFlexRow } from '../../assets/styles/GlobalStyles';
import { HeaderText, ViewMoreCta, ViewMoreIcon } from '../../assets/styles/GeneralStyles';
import { viewMoreRight } from '../../assets/images';

const ViewMoreHeader = ({title, typeUrl}) => {
  return (
    <>
     <ContentRow>
                <ContentFullColumn>
                    <GeneralFlexRow justifyContent="space-between" margin="1rem 0 2rem">
                        <HeaderText>{title}</HeaderText>
                        <ViewMoreCta as={Link} to={typeUrl}>View More
                        <ViewMoreIcon src={viewMoreRight} />
                        </ViewMoreCta>
                    </GeneralFlexRow>
                </ContentFullColumn>
            </ContentRow>
    </>
  )
}

export default ViewMoreHeader
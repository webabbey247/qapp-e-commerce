import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import 'swiper/modules/pagination/pagination.min.css'

// import required modules
import { Navigation, EffectFade, Autoplay } from "swiper";

import styled from 'styled-components'
import ViewMoreHeader from '../ViewMoreHeader';
import { ContentRow, SiteContainer, Content6Column6, ContentFullColumn } from '../../assets/styles/GlobalStyles';
import DiscountDealCard from '../DiscountDeals/DiscountDealsCard';

export const TopDealSection = styled.section`
padding: 2rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const DiscountDealContainer = styled.div`
display: flex;
flex-direction: row;
`;


const TopDeals = () => {
  return (
    <>
      <TopDealSection>
        <SiteContainer>
          <ViewMoreHeader title="Top Deals" typeUrl="" />

          <ContentRow>
            <DiscountDealCard />
            <DiscountDealCard />
            <DiscountDealCard />
            <DiscountDealCard />
            <DiscountDealCard />
            <DiscountDealCard />
            {/*             <ContentFullColumn>
<DiscountDealContainer>
              <DiscountDealCard />
              <DiscountDealCard />
              <DiscountDealCard />
              <DiscountDealCard />
              <DiscountDealCard />

             
              </DiscountDealContainer> 
              </ContentFullColumn>*/}
          </ContentRow>
        </SiteContainer>
      </TopDealSection>
    </>
  )
}

export default TopDeals
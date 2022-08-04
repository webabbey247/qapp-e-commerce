import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
// import Components
import { SecondaryHeader } from '../../components/Header'
import Search from '../../components/Search'
import Banners from '../../components/Banners'
import TopDeals from '../../components/TopDeals'
import DiscountDeals from '../../components/DiscountDeals'
import TopStores from '../../components/TopStores'
import { MainFooter } from '../../components/Footer'
 

const Dashboard = () => {
  return (
    <MainLayout>
        <h4>Main Nav Area</h4>
         <SecondaryHeader />
        <Search />
        <Banners typeUrl="top" />
        <TopDeals />
        <TopStores />
        <DiscountDeals />
        <Banners typeUrl="bottom" />
        <MainFooter />
    </MainLayout>
  )
}

export default Dashboard

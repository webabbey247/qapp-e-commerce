import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
// import Components
import { MainHeader, SecondaryHeader } from '../../components/Header'
import Search from '../../components/Search'
import Banners from '../../components/Banners'
import TopDeals from '../../components/TopDeals'
import ProductList from '../../components/ProductList'
// import DiscountDeals from '../../components/DiscountDeals'
import { MainFooter } from '../../components/Footer'
// import Products
 

const HomePage = () => {
  return (
    <MainLayout>
       <MainHeader />
         <SecondaryHeader />
        <Search />
        <Banners typeUrl="top" />
        <TopDeals />
        <ProductList />
        {/* <DiscountDeals /> */}
        <Banners typeUrl="bottom" />
        <MainFooter />
    </MainLayout>
  )
}

export default HomePage

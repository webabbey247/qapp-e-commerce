import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
import { MainHeader } from '../../components/Header'
import Search from '../../components/Search'
import ProductCategory from '../../components/ProductCategory'
import Comments from '../../components/Comments'
import DiscountDeals from '../../components/DiscountDeals'
import { MainFooter } from '../../components/Footer'
import ProductDetails from '../../components/ProductDetails'





const SingleProduct = () => {
  return (
    <MainLayout>
     <MainHeader typeUrl="store" />
        <Search />
        {/* <ProductCategory /> */}
        <ProductDetails />
        <DiscountDeals />
        <Comments typeUrl="Info" />
        <MainFooter />
    </MainLayout>
  )
}

export default SingleProduct
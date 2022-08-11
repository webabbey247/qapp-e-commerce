import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
import { MainHeader } from '../../components/Header'
import Search from '../../components/Search'
import Comments from '../../components/Comments'
import DiscountDeals from '../../components/DiscountDeals'
import { MainFooter } from '../../components/Footer'
import ProductDetails from '../../components/ProductDetails'
import RelatedProducts from '../../components/RelatedProducts'





const SingleProduct = () => {
  return (
    <MainLayout>
     <MainHeader typeUrl="store" />
        <Search />
        <ProductDetails />
        <RelatedProducts />
        {/* <DiscountDeals /> */}
        <Comments typeUrl="Info" />
        <MainFooter />
    </MainLayout>
  )
}

export default SingleProduct
import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
import { MainHeader } from '../../components/Header'
import Search from '../../components/Search'
import CartDetails from '../../components/CartDetails'
import DiscountDeals from '../../components/DiscountDeals'
import RelatedProducts from '../../components/RelatedProducts'
import { MainFooter } from '../../components/Footer'





const Cart = () => {
  return (
    <MainLayout>
     <MainHeader typeUrl="store" />
        <Search />
        <CartDetails />
        <RelatedProducts />
        <DiscountDeals />
        <MainFooter />
    </MainLayout>
  )
}

export default Cart
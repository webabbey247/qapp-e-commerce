import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
import { MainHeader } from '../../components/Header'
import Search from '../../components/Search'
import CartDetails from '../../components/CartDetails'
import DiscountDeals from '../../components/DiscountDeals'
import { MainFooter } from '../../components/Footer'





const Cart = () => {
  return (
    <MainLayout>
     <MainHeader typeUrl="store" />
        <Search />
        <CartDetails />
        <DiscountDeals />
        <MainFooter />
    </MainLayout>
  )
}

export default Cart
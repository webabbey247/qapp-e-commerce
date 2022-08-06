import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
import { MainHeader } from '../../components/Header'
import Search from '../../components/Search'
import CheckoutDetails from '../../components/CheckoutDetails'
import DiscountDeals from '../../components/DiscountDeals'
import { MainFooter } from '../../components/Footer'
import PaymentModal from '../../components/Modals/PaymentModal'





const Checkout = () => {
  return (
    <MainLayout>
     <MainHeader typeUrl="store" />
        <Search />
        <CheckoutDetails />
        <DiscountDeals />
        <MainFooter />
    </MainLayout>
  )
}

export default Checkout
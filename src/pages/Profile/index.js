import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
// import Components
import { MainHeader } from '../../components/Header'
import Search from '../../components/Search'
import ProductCategory from '../../components/ProductCategory'
import ProfileCards from '../../components/ProfileCards'
import SellerPerformanceCard from '../../components/SellerPerformanceCard'
import { MainFooter } from '../../components/Footer'




const Profile = () => {
  return (
    <MainLayout>
        <MainHeader typeUrl="store" />
        <Search />
        <ProductCategory />
        <ProfileCards />
        <SellerPerformanceCard />
        <MainFooter />
    </MainLayout>
  )
}

export default Profile
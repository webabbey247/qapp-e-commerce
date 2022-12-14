import React from 'react'
// import Components
import MainLayout from '../../components/Layouts/MainLayout'
import { MainHeader } from '../../components/Header'
import Search from '../../components/Search'
import ProductCategory from '../../components/ProductCategory'
import ProfileCards from '../../components/ProfileCards'
import SellerPerformanceCard from '../../components/SellerPerformanceCard'
import Comments from '../../components/Comments'
import { MainFooter } from '../../components/Footer'




const Profile = () => {
  return (
    <MainLayout>
        <MainHeader typeUrl="store" />
        <Search />
        <ProductCategory />
        <ProfileCards />
        <SellerPerformanceCard />
        <Comments />
        <MainFooter />
    </MainLayout>
  )
}

export default Profile
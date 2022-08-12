import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
// import Components
import { MainHeader } from '../../components/Header'
import ProductCategory from '../../components/ProductCategory'
import Search from '../../components/Search'
import Products from '../../components/Products'
import { MainFooter } from '../../components/Footer'

const SingleStore = () => {
  return (
    <MainLayout>
        <MainHeader typeUrl="store" />
        <Search typeUrl="store" />
        <ProductCategory />
       <Products />
       <MainFooter />
    </MainLayout>
  )
}

export default SingleStore
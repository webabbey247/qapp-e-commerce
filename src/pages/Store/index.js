import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
// import Components
import { MainHeader } from '../../components/Header'
import Search from '../../components/Search'
import Stores from '../../components/Stores'
import { MainFooter } from '../../components/Footer'

const Store = () => {
  return (
    <MainLayout>
        <MainHeader typeUrl="" />
        <Search typeUrl="" />
       <Stores />
       <MainFooter />
    </MainLayout>
  )
}

export default Store
import React from 'react'
import { MainContainer } from '../../assets/styles/GlobalStyles'

const MainLayout = ({children}) => {
  return (
    <>
    <MainContainer>
        {children}
    </MainContainer>
    </>
  )
}

export default MainLayout
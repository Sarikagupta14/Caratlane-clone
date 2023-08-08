import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Slider from '../../HomePage/Slider'
import DigitalGold from '../DigitalGold'
import Instagram from '../Instagram'
import Purchase from '../Purchase'
import { Box } from '@chakra-ui/react'
import Footer from '../Footer'

export const AllRoutes = () => { 
  return (
    <Box>
    {/* <Navbar/> */}
    <Routes>
        <Route path="/" element={<Slider/>} />
        <Route path="/digitalgold" element={<DigitalGold/>} />
        <Route path="/instagram" element={<Instagram/>} />
        <Route path="/purchase" element={<Purchase/>} />
        {/* <Route path="/digitalgold" element={<DigitalGold/>} /> */}
    </Routes>
    <Footer/>
    </Box>
  )
}

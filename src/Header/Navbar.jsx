import React, { useState } from 'react'
import './Navbar.css'

import { useMediaQuery } from "react-responsive";
import BigScreen from '../Components/headerRsive/BigScreen/BigScreen';

const Navbar = () => {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <>
   {/* {isMobileDevice && <Mobile />}
  {isTabletDevice && <>
  <TabletMobile />
  {isDesktop && <Desktop />}
  {isLaptop && <Laptop />} */}
  {isBigScreen && <BigScreen />}


</>

  )
}

export default Navbar

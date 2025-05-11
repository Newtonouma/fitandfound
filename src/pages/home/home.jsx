import React from 'react'
import Hero from '../../components/hero/hero'
import HomeProducts from '../../components/homeproducts/homproducts'
import Pricing from '../../components/Homepricing/pricing';
import Gallery from '../../components/gallery/gallery';
function home() {
  return (
    <>
    <Hero />
    <HomeProducts />
    <Pricing />
    <Gallery />
    </>
  )
}

export default home
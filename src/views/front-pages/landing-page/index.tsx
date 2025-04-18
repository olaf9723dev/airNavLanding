'use client'

// React Imports
import { useEffect } from 'react'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import HeroSection from './HeroSection'
import Opportunity from './Opportunity'
import CustomerReviews from './CustomerReviews'
import OurTeam from './OurTeam'
import Pricing from './Pricing'
import ProductStat from './ProductStat'
import Faqs from './Faqs'
import GetStarted from './GetStarted'
import ContactUs from './ContactUs'
import Features from './Features'
import Revenue from './Revenue'
import Strategy from './Strategy​'
import { useSettings } from '@core/hooks/useSettings'
import Advantage from './Advantage​'
import Timeline from './Timeline'
import Team from './Team'

const LandingPageWrapper = ({ mode }: { mode: Mode }) => {
  // Hooks
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HeroSection mode={mode} />
      <Opportunity />
      <Features />
      <Revenue />
      <Advantage />
      <Strategy />
      <Timeline />
      <ProductStat />
      <Faqs />
      <Team />
      <ContactUs />
    </>
  )
}

export default LandingPageWrapper

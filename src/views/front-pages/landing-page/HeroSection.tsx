// MUI Imports
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

const HeroSection = ({ mode }: { mode: Mode }) => {
  // Vars
  const heroSectionBgLight = '/images/front-pages/landing-page/hero-bg-light.png'
  const heroSectionBgDark = '/images/front-pages/landing-page/hero-bg-dark.png'

  // Hooks
  const heroSectionBg = useImageVariant(mode, heroSectionBgLight, heroSectionBgDark)

  return (
    <section id='home' className='relative overflow-hidden pbs-[70px] -mbs-[70px] bg-backgroundPaper z-[1]'>
      <img src={heroSectionBg} alt='hero-bg' className={styles.heroSectionBg} />
      <div className={classnames('pbs-16 overflow-hidden', frontCommonStyles.layoutSpacing)}>
        <div className='md:max-is-[550px] mlb-0 mli-auto text-center'>
          <Typography className='font-extrabold text-primary sm:text-[38px] text-3xl mbe-4 leading-[44px]'>
            AirNav: GPS for Airports​
          </Typography>
          <Typography className='font-medium' color='text.primary'>
            The Ultimate Airport Navigation App – Built for Travelers, Backed by You.​
          </Typography>
          <Typography className='font-medium' color='text.primary'>
            AirNav is a mobile app for iOS and Android that turns airports into walkable, navigable maps—just like
            Google Maps does for cities.
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

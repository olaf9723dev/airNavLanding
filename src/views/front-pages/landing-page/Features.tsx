// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'
import Lines from '@assets/svg/front-pages/landing-page/Lines'

const Features = () => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false

          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    ref.current && observer.observe(ref.current)
  }, [])

  return (
    <section
      id='features'
      ref={ref}
      className={classnames('flex flex-col gap-12 lg:gap-12 plb-[100px]', frontCommonStyles.layoutSpacing)}
    >
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-baseline flex-wrap gap-2 mbe-3 sm:mbe-1'>
          <Typography variant='h4' className='font-bold'>
            Key Features
          </Typography>
        </div>
        <Typography color='text.secondary' className='font-medium text-center'>
          A mobile app that brings GPS-style navigation to airport interiors.​
        </Typography>
      </div>
      <Grid container spacing={6} className='py-auto'>
        <Grid item xs={12} lg={6} className='text-center'>
          <img src='/images/front-pages/landing-page/feature.png' style={{ borderRadius: '25px' }} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className='flex flex-col items-left justify-center'>
            <Typography className='my-7' variant='h5'>
              Search gates, restrooms, stores, ticket counters, customs, lounges​
            </Typography>
            <Typography className='my-7' variant='h5'>
              Real-time indoor navigation with walking distance and estimated time​​
            </Typography>
            <Typography className='my-7' variant='h5'>
              Live flight tracking, gate change notifications, and itinerary integration​​
            </Typography>
            <Typography className='my-7' variant='h5'>
              Integration with rideshare and rental car services​​
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}
export default Features

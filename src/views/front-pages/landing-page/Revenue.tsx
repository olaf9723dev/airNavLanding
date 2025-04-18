// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

import Lines from '@assets/svg/front-pages/landing-page/Lines'
import Money from '@/assets/svg/front-pages/landing-page/Money'
import Pilot from '@/assets/svg/front-pages/landing-page/Pilot'
import Affiliate from '@/assets/svg/front-pages/landing-page/Affiliate'
const Revenue = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='revenue' ref={ref} className='bg-backgroundPaper px-20'>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={5} className='text-center justify-center items-center'>
          <Lines />
          <Typography variant='h3'>Revenue Sources</Typography>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Grid item lg={12} className='my-6'>
            <Card variant='outlined' className='border-2 border-primary'>
              <CardContent className='flex flex-row gap-8 p-8 items-center'>
                <Money />
                <Typography variant='h4'>
                  Annual App fee: Basic Only $9.95 yr. Premium will offer discounts from various vendors and will cost
                  $39 yr.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12} className='my-6'>
            <Card variant='outlined' className='border-2 border-primary'>
              <CardContent className='flex flex-row gap-8 p-8 items-center'>
                <Pilot />
                <Typography variant='h4'>
                  Licensing: Airports, travel agencies and airlines for branded or white-labeled versions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12} className='my-6'>
            <Card variant='outlined' className='border-2 border-primary'>
              <CardContent className='flex flex-row gap-8 p-8 items-center'>
                <Affiliate />
                <Typography variant='h4'>
                  Affiliate Commissions: Rideshare, rental cars, airport stores and dining​
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default Revenue

// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

import AirPlane from '@/assets/svg/front-pages/landing-page/AirPlanes'
import Pilot from '@/assets/svg/front-pages/landing-page/Pilot'
import Bag from '@/assets/svg/front-pages/landing-page/Bag'
import Money from '@/assets/svg/front-pages/landing-page/Money'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Data
const marketOpt = [
  {
    icon: <Pilot />,
    title: '',
    description: '4.7B+ global airline passengers annually (IATA, 2023)​'
  },
  {
    icon: <AirPlane />,
    title: '',
    description: '500+ major international airports​​'
  },
  {
    icon: <Bag />,
    title: '',
    description: 'Growing demand for tech-enhanced travel experiences​​'
  },
  {
    icon: <Money />,
    title: '',
    description: 'The market for this app is estimated $1.2B+​​'
  }
]

const Opportunity = () => {
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
    <section id='opportunity' ref={ref} className='bg-backgroundPaper'>
      <div className={classnames('flex flex-col gap-12 plb-[100px]', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center flex-wrap gap-2 mbe-2 sm:mbe-1'>
            <Typography variant='h4' className='font-bold'>
              Market Opportunity​
            </Typography>
          </div>
          <Typography className='font-medium text-center'>
            Estimated 8.7B global air passengers by 2040 – no app that solves this at scale​ ​
          </Typography>
        </div>
        <div>
          <Grid container columnSpacing={6} rowSpacing={12}>
            {marketOpt.map((item, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <div className={classnames('mbe-2', styles.featureIcon)}>
                    <div className='flex items-center border-2 rounded-full p-5 is-[82px] bs-[82px]'>{item.icon}</div>
                  </div>
                  <Typography variant='h5'>{item.title}</Typography>
                  <Typography className='max-is-[364px] text-center'>{item.description}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default Opportunity

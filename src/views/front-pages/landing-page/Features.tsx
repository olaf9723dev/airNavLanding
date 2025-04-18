// React Imports
import { useEffect, useRef } from 'react'
// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
// Third-party Imports
import classnames from 'classnames'
// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'
// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
// SVG Imports
import Lines from '@assets/svg/front-pages/landing-page/Lines'

type FeatureDataTypes = {
  id: string
  title: string
  active?: boolean
  description: string
}

const FeatureData: FeatureDataTypes[] = [
  {
    id: 'panel1',
    title: 'Turn-by-Turn Airport Navigation',
    description:
      'Search and navigate to gates, restrooms, customs, lounges, ticket counters, baggage claim, restaurants, and more—with step-by-step walking directions, distance, and estimated time.'
  },
  {
    id: 'panel2',
    title: 'Search Anything Inside the Airport',
    active: true,
    description:
      'Type in “Gate C19,” “Starbucks,” “Delta check-in,” or “Baggage Claim,” and instantly find where it is and how to get there.'
  },
  {
    id: 'panel3',
    title: 'Live Flight Tracking & Alerts',
    description:
      'Integrate your itinerary to get real-time arrival/departure updates, delays, and gate changes—no more scrambling for screens or missing announcements.'
  },
  {
    id: 'panel4',
    title: 'Transportation Integrations',
    description: 'Book a taxi, Uber, or rental car from the app once you land—no jumping between multiple apps.'
  },
  {
    id: 'panel5',
    title: 'Full Itinerary Sync',
    description:
      'Input your trip details and AirNav will automatically guide you through each airport in your journey—from departure to layovers to final arrival.'
  }
]

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
          <Lines />
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
          {FeatureData.map((data, index) => {
            return (
              <Accordion key={index} defaultExpanded={data.active}>
                <AccordionSummary aria-controls={data.id + '-content'} id={data.id + '-header'}>
                  {data.title}
                </AccordionSummary>
                <AccordionDetails>{data.description}</AccordionDetails>
              </Accordion>
            )
          })}
        </Grid>
      </Grid>
    </section>
  )
}
export default Features

// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// SVG Imports
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'
import Lines from '@assets/svg/front-pages/landing-page/Lines'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const Problem = () => {
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
    <section
      id='problem'
      ref={ref}
      className={classnames('flex flex-col gap-16 plb-[100px]', frontCommonStyles.layoutSpacing)}
    >
      <div className='flex flex-col items-center justify-center'>
        <div className='flex is-full justify-center items-center relative'>
          <ElementOne className='absolute inline-end-0' />
          <div className='flex items-center justify-center mbe-6 gap-3'>
            <Lines />
            <Typography color='text.primary' className='font-medium' variant='h4'>
              Problem
            </Typography>
          </div>
        </div>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={5} className='text-center items-center flex'>
          <img
            src='/images/front-pages/landing-page/problem.png'
            className='is-[80%] max-is-[320px]'
            style={{ margin: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Grid item lg={12} className='my-6'>
            <Card variant='outlined' className='border-2 border-primary'>
              <CardContent className='flex flex-row gap-8 p-8 items-center'>
                <Typography variant='h4'>
                  Airports are stressful. Whether you’re navigating a massive international hub or rushing for a tight
                  connection, it’s easy to get lost or overwhelmed. ​
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12} className='my-6'>
            <Card variant='outlined' className='border-2 border-primary'>
              <CardContent className='flex flex-row gap-8 p-8 items-center'>
                <Typography variant='h4'>
                  Signs are confusing, time is tight, and there’s no clear way to know where you’re going - or how long
                  it’ll take to get there. ​
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default Problem

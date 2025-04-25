// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { TimelineProps } from '@mui/lab/Timeline'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// SVG Imports
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'
import Lines from '@assets/svg/front-pages/landing-page/Lines'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root:nth-of-type(even) .MuiTimelineContent-root': {
    textAlign: 'left'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiTimelineItem-root': {
      width: '100%',
      '&:before': {
        display: 'none'
      }
    }
  }
}))

const TimelineCenter = () => {
  // Hooks
  const theme = useTheme()
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))

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
      id='timeline'
      ref={ref}
      className={classnames('flex flex-col gap-16 plb-[100px]', frontCommonStyles.layoutSpacing)}
    >
      <div className='flex flex-col items-center justify-center'>
        <div className='flex is-full justify-center items-center relative'>
          <ElementOne className='absolute inline-end-0' />
          <div className='flex items-center justify-center mbe-6 gap-3'>
            <Lines />
            <Typography color='text.primary' className='font-medium uppercase' variant='h4'>
              Traction & Timeline​
            </Typography>
          </div>
        </div>
      </div>

      <Timeline position={isBelowMdScreen ? 'right' : 'alternate'}>
        <TimelineItem>
          {!isBelowMdScreen && (
            <TimelineOppositeContent color='text.disabled'>
              <Typography variant='caption' component='div' className='mbs-3'>
                June, 2025
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color='error' variant='tonal'>
              <i className='ri-file-text-line text-xl' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {isBelowMdScreen && (
              <Typography variant='caption' component='div' className='mbs-3'>
                June, 2025
              </Typography>
            )}
            <Card>
              <CardContent>
                <Typography variant='h5' className='mbe-4'>
                  Q2 2025
                </Typography>
                <Typography className='mbe-3'>Complete MVP, soft beta launch​</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          {!isBelowMdScreen && (
            <TimelineOppositeContent color='text.disabled'>
              <Typography variant='caption' component='div' className='mbs-3'>
                July, 2025
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color='success' variant='tonal'>
              <i className='ri-image-line text-xl' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {isBelowMdScreen && (
              <Typography variant='caption' component='div' className='mbs-3'>
                July, 2025
              </Typography>
            )}
            <Card>
              <CardContent>
                <Typography variant='h5' className='mbe-4'>
                  Q3 2025
                </Typography>
                <Typography className='mbe-3'>Airport partnerships and UX refinement​</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          {!isBelowMdScreen && (
            <TimelineOppositeContent color='text.disabled'>
              <Typography variant='caption' component='div' className='mbs-3'>
                August, 2025
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color='warning' variant='tonal'>
              <i className='ri-star-line text-xl' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {isBelowMdScreen && (
              <Typography variant='caption' component='div' className='mbs-3'>
                August, 2025
              </Typography>
            )}
            <Card>
              <CardContent>
                <Typography variant='h5' className='mbe-4'>
                  Q4 2025
                </Typography>
                <Typography>Full launch with 10+ airport maps​</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          {!isBelowMdScreen && (
            <TimelineOppositeContent color='text.disabled'>
              <Typography variant='caption' component='div' className='mbs-3'>
                2026
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color='info' variant='tonal'>
              <i className='ri-pie-chart-line text-xl' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {isBelowMdScreen && (
              <Typography variant='caption' component='div' className='mbs-3'>
                2026
              </Typography>
            )}
            <Card>
              <CardContent>
                <Typography>Expansion to 100+ airports and premium tier rollout​</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  )
}

export default TimelineCenter

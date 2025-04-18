// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const Team = () => {
  return (
    <section id='team' className='relative py-5'>
      <img
        src='/images/front-pages/landing-page/get-started-bg.png'
        alt='background-image'
        className='absolute is-full flex -z-1 pointer-events-none bs-full block-end-0'
      />
      <div
        className={classnames(
          'flex items-center flex-wrap justify-center lg:justify-between gap-y-4 gap-x-28',
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className='flex flex-col items-start gap-y-8 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1'>
            <Typography color='primary' className='font-bold text-[32px]'>
              Development Team
            </Typography>
            <Link href={'https://prowebtechnologies.com'} target='_blank'>
              <Typography className='font-medium' color='text.secondary'>
                https://prowebtechnologies.com
              </Typography>
            </Link>
          </div>
        </div>
        <div className='flex pbs-4 lg:pbs-[60px] md:pie-4 z-[1]'>
          <Link href={'https://prowebtechnologies.com'} target='_blank'>
            <img
              src='/images/front-pages/landing-page/team_logo.png'
              alt='dashboard-image'
              className='max-is-[600px] is-full'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Team

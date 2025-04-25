// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
import Lines from '@assets/svg/front-pages/landing-page/Lines'
import Curve from '@assets/svg/front-pages/landing-page/Curve'
import Arrow from '@assets/svg/front-pages/landing-page/Arrow'

const pricingPlans = [
  {
    title: 'Basic membership',
    price: 9.95,
    features: ['All features'],
    supportType: 'Basic',
    current: false
  },
  {
    title: 'Premium Membership',
    price: 39.95,
    features: ['All features', 'Plus exclusive discounts from travel related businesses and airport stores'],
    supportType: 'Premium',
    current: true
  }
]

const PricingPlan = () => {
  return (
    <section
      id='pricing-plans'
      className={classnames('flex flex-col gap-12 lg:gap-12 plb-[100px] bg-backgroundPaper', '')}
    >
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col items-center justify-center mb-10'>
          <div className='flex items-baseline flex-wrap gap-2 mbe-3 sm:mbe-1'>
            <Lines />
            <Typography variant='h4' className='font-bold'>
              Memberships
            </Typography>
          </div>
        </div>
        <Grid container spacing={12}>
          {pricingPlans.map((plan, index) => (
            <Grid item key={index} xs={12} lg={6}>
              <Card
                variant='outlined'
                {...(plan.current && { className: 'border-2 border-primary' })}
                style={{ height: '100%' }}
              >
                <CardContent className='flex flex-col gap-8 p-8'>
                  <div className='is-full flex flex-col gap-3'>
                    <Typography className='text-center' variant='h4'>
                      {plan.title}
                    </Typography>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-start'>
                        <Typography variant='h5' component='sup' className='text-lg font-medium'>
                          $
                        </Typography>
                        <Typography color='text.primary' className='font-bold text-5xl'>
                          {plan.price}
                        </Typography>
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <Typography variant='h6'>Per year</Typography>
                      </div>
                    </div>
                    <Curve />
                  </div>
                  <div>
                    <div className='flex flex-col gap-3'>
                      {plan.features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-[12px]'>
                          <Arrow />
                          <Typography variant='h5'>{feature}</Typography>
                        </div>
                      ))}
                    </div>
                    <Divider className='border mlb-4' />
                    <div className='flex gap-1 items-center justify-between'>
                      <div className='flex flex-col gap-0.25'>
                        <Typography color='text.primary' className='font-medium'>
                          {plan.supportType} Support
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Button variant={plan.current ? 'contained' : 'outlined'}>Get Started</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default PricingPlan

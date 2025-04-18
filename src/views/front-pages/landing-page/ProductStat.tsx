// React Imports
import { useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@/@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Type
type StatData = {
  title: string
  value: string
  icon: string
  color: ThemeColor
  isHover: boolean
}

// Data
const statData: StatData[] = [
  {
    title: 'Year',
    value: '2025',
    icon: 'ri-layout-line',
    color: 'primary',
    isHover: false
  },
  {
    title: 'Revenue',
    value: '$500k',
    icon: 'ri-time-line',
    color: 'success',
    isHover: false
  },
  {
    title: 'Users',
    value: '50k',
    icon: 'ri-user-smile-line',
    color: 'warning',
    isHover: false
  },
  {
    title: 'Partner Airports',
    value: '10',
    icon: 'ri-award-line',
    color: 'info',
    isHover: false
  }
]

// Data
const statData2026: StatData[] = [
  {
    title: 'Year',
    value: '2026',
    icon: 'ri-layout-line',
    color: 'primary',
    isHover: false
  },
  {
    title: 'Revenue',
    value: '$4.5M',
    icon: 'ri-time-line',
    color: 'success',
    isHover: false
  },
  {
    title: 'Users',
    value: '300K',
    icon: 'ri-user-smile-line',
    color: 'warning',
    isHover: false
  },
  {
    title: 'Partner Airports',
    value: '50',
    icon: 'ri-award-line',
    color: 'info',
    isHover: false
  }
]
// Data
const statData2027: StatData[] = [
  {
    title: 'Year',
    value: '2027',
    icon: 'ri-layout-line',
    color: 'primary',
    isHover: false
  },
  {
    title: 'Revenue',
    value: '$15M+​',
    icon: 'ri-time-line',
    color: 'success',
    isHover: false
  },
  {
    title: 'Users',
    value: '1M+​',
    icon: 'ri-user-smile-line',
    color: 'warning',
    isHover: false
  },
  {
    title: 'Partner Airports',
    value: '100+',
    icon: 'ri-award-line',
    color: 'info',
    isHover: false
  }
]

const ProductStat = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <section className='plb-[84px] bg-backgroundPaper'>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center items-center relative'>
            <div className='flex items-center justify-center mbe-6 gap-3'>
              <Typography color='text.primary' className='font-medium uppercase' variant='h4'></Typography>
            </div>
          </div>
        </div>
        <Grid container spacing={6}>
          {statData.map((stat, index) => (
            <Grid item key={index} xs={6} md={3}>
              <div className='flex flex-col items-center justify-center gap-6'>
                <CustomAvatar
                  onMouseEnter={() => {
                    setHoverIndex(index)
                  }}
                  onMouseLeave={() => {
                    setHoverIndex(null)
                  }}
                  skin={hoverIndex === index ? 'filled' : 'light'}
                  color={stat.color}
                  size={82}
                  className='cursor-pointer'
                >
                  <i className={classnames(stat.icon, 'text-[2.625rem]')} />
                </CustomAvatar>
                <div className='text-center'>
                  <Typography color='text.primary' className='font-bold text-[34px]'>
                    {stat.value}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={6}>
          {statData2026.map((stat, index) => (
            <Grid item key={index} xs={6} md={3}>
              <div className='flex flex-col items-center justify-center gap-6'>
                <div className='text-center'>
                  <Typography color='text.primary' className='font-bold text-[34px]'>
                    {stat.value}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={6}>
          {statData2027.map((stat, index) => (
            <Grid item key={index} xs={6} md={3}>
              <div className='flex flex-col items-center justify-center gap-6'>
                <div className='text-center'>
                  <Typography color='text.primary' className='font-bold text-[34px]'>
                    {stat.value}
                  </Typography>
                  <Typography className='font-medium'>{stat.title}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default ProductStat

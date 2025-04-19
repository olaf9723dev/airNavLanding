// React Imports
import type { ImgHTMLAttributes } from 'react'

// Type Imports
import type { Mode } from '@core/types'
// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  mode?: Mode
}

const Logo = ({ mode, ...rest }: LogoProps) => {
  const logoSrc = '/images/logos/dark-logo.png'

  return <img src={logoSrc} alt='Logo' width={80} height={80} {...rest} />
}

export default Logo

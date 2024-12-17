import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import colors from '../../theme/colors'
import { SVGProps } from '../../types/propTypes'

const ChartIcon = ({fill, height, width}: SVGProps) => (
  <Svg
    width={width || 10}
    height={height || 12}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
  <Path
    d="M224,200H40V163.6l56.4-49.3,58.8,44.1a8,8,0,0,0,10.1-.4l64-56a8,8,0,1,0-10.6-12l-59.1,51.7L100.8,97.6a8,8,0,0,0-10.1.4L40,142.4V48a8,8,0,0,0-16,0V208a8,8,0,0,0,8,8H224a8,8,0,0,0,0-16Z"
    fill={fill || colors.brandBlue}
  />

  </Svg>
)

export default ChartIcon

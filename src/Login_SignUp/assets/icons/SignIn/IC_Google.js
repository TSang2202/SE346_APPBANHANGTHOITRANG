import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={40} height={40} rx={8} fill="#65AAEA" />
    <Path
      d="M28.572 19v-3h-1.5v3h-3v1.5h3v3h1.5v-3h3V19h-3ZM15.072 18v3h4.243a4.509 4.509 0 0 1-4.244 3 4.505 4.505 0 0 1-4.5-4.5c0-2.481 2.02-4.5 4.5-4.5 1.076 0 2.111.386 2.915 1.086l1.971-2.262A7.433 7.433 0 0 0 15.071 12c-4.135 0-7.5 3.364-7.5 7.5s3.365 7.5 7.5 7.5c4.136 0 7.5-3.364 7.5-7.5V18h-7.5Z"
      fill="#fff"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo

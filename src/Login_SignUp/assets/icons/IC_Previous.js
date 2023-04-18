import * as React from "react"
import Svg, { Circle } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={24} cy={24} r={23.5} stroke="#BEBAB3" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
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
      d="M20.888 16.576v-2.755c0-.76.617-1.377 1.377-1.377h1.378V9h-2.755a4.132 4.132 0 0 0-4.133 4.133v3.444H14v3.443h2.755v11.02h4.133V20.02h2.755l1.377-3.444h-4.132Z"
      fill="#fff"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo

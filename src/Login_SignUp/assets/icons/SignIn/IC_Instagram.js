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
      d="M24.45 20.98a3.97 3.97 0 1 1-7.941 0 3.97 3.97 0 0 1 7.942 0Z"
      fill="#fff"
    />
    <Path
      d="M27.185 8.98H13.774a5.3 5.3 0 0 0-5.295 5.294v13.412a5.3 5.3 0 0 0 5.295 5.294h13.411a5.3 5.3 0 0 0 5.295-5.294V14.274a5.3 5.3 0 0 0-5.295-5.294ZM20.48 27.597a6.625 6.625 0 0 1-6.618-6.617 6.625 6.625 0 0 1 6.618-6.618 6.625 6.625 0 0 1 6.617 6.618 6.625 6.625 0 0 1-6.617 6.617Zm7.588-12.882a1.323 1.323 0 1 1 0-2.647 1.323 1.323 0 0 1 0 2.647Z"
      fill="#fff"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo

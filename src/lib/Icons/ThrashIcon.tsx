import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';

type ThrashIconProps = {
  width: number
  height: number
  color: string
  colorFill: string
}

export function ThrashIcon({
  width, 
  height,
  color,
  colorFill
}: ThrashIconProps) {
  return (
    <>
      <Svg width={`${width}`} height={`${height}`} viewBox={`0 0 24 24`} fill="none">
        <G clip-path="url(#clip0_1_2836)">
        <Path d="M19.1085 15.6335C18.8152 18.2884 18.6686 19.6158 17.9192 20.5322C17.6572 20.8526 17.347 21.1304 16.9997 21.3557C16.0066 22 14.6711 22 12.0001 22C9.32905 22 7.99354 22 7.0004 21.3557C6.65314 21.1304 6.34295 20.8526 6.08091 20.5322C5.3315 19.6158 5.18489 18.2883 4.89166 15.6335L3.76476 5.43042L20.2354 5.43042L19.1085 15.6335Z" fill={colorFill}/>
        <Path d="M3 6.12201H21" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
        <Path d="M14 11.2152V16.2152" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <Path d="M10 11.2152V16.2152" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <Path d="M8 6.14239L8 4.4709C8 3.30611 8 2.72371 8.34942 2.36186C8.69883 2 9.26121 2 10.386 2L13.614 2C14.7388 2 15.3012 2 15.6506 2.36186C16 2.72371 16 3.30611 16 4.4709V6.14239" stroke={color} stroke-width="1.5"/>
        </G>
        <Defs>
        <ClipPath id="clip0_1_2836">
        <Rect width="24" height="24" fill="white"/>
        </ClipPath>
        </Defs>
      </Svg>

    </>
  )
}
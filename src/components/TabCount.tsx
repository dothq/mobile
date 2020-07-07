import * as React from 'react'
import Svg, { Rect, Text } from 'react-native-svg';

export function TabCountSingleNumber({ style, number }: { style: any; number: number }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#000000" strokeWidth={2}></Rect>
      <Text text-anchor="start" font-family="-apple-system, 'Inter', sans-serif" font-size="12" id="svg_2" x="9" y="16" stroke-width="0" stroke="#000" fill="#000000" font-weight="bold">{number}</Text>
    </Svg>
  )
}

export function TabCountDualNumber({ style, number }: { style: any; number: number }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#000000" strokeWidth={2}></Rect>
      <Text text-anchor="start" font-family="-apple-system, 'Inter', sans-serif" font-size="10" id="svg_2" x="5" y="16" stroke-width="0" stroke="#000" fill="#000000" font-weight="bold">{number}</Text>
    </Svg>
  )
}
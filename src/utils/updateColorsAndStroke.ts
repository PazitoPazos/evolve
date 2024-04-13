import { ServerUsageDetails } from '@/types/types.d'
import { getColor } from './getColor'
import { RefObject } from 'react'

export const updateColorsAndStroke = (serverUsage: ServerUsageDetails, circleRef: RefObject<SVGCircleElement>) => {
  const { cpuUsage, usedMem } = serverUsage
  const newColorCpu = getColor(cpuUsage)
  const newColorRam = getColor((usedMem / 6) * 100)

  const circle = circleRef.current
  if (circle) {
    const circumference = circle.getTotalLength()
    circle.style.strokeDasharray = `${circumference}px`
    circle.style.strokeDashoffset = `${((100 - cpuUsage) / 100) * circumference}px`
  }

  return { strokeColor: newColorCpu, borderColor: newColorRam }
}

function getColor(percentage: number): string {
  const green = [0, 137, 111]
  const yellow = [251, 191, 36]
  const red = [195, 74, 54]

  let color: number[]

  if (percentage <= 50) {
    color = interpolateColor(green, yellow, percentage / 50)
  } else {
    color = interpolateColor(yellow, red, (percentage - 50) / 50)
  }

  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

function interpolateColor(
  color1: number[],
  color2: number[],
  factor: number
): number[] {
  const result = []
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(color1[i] + factor * (color2[i] - color1[i]))
  }
  return result
}
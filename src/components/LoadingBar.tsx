interface LoadingBarProps {
  barsNumber: number
}

function LoadingBar({ barsNumber }: LoadingBarProps) {
  const rects = []
  for (let i = 0; i < barsNumber; i++) {
    rects.push(
      <div
        key={i}
        className="animate-loader ml-1 h-full w-[3%] bg-indigo-500"
      />
    )
  }

  return (
    <div className="flex h-[90%] w-full items-center overflow-hidden p-0">
      {rects}
    </div>
  )
}

export default LoadingBar

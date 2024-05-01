function CircleArrowUpIcon({
  height,
  width,
}: {
  height?: string
  width?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-circle-arrow-up"
      width={width ?? '24'}
      height={height ?? '24'}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#00896F"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 8l-4 4" />
      <path d="M12 8v8" />
      <path d="M16 12l-4 -4" />
    </svg>
  )
}

export default CircleArrowUpIcon

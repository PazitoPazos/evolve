function CrownIcon({ height, width }: { height?: string; width?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-crown"
      width={width ?? '24'}
      height={height ?? '24'}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
    </svg>
  )
}

export default CrownIcon

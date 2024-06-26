function PencilIcon({ height, width }: { height?: string; width?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-pencil"
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
      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
      <path d="M13.5 6.5l4 4" />
    </svg>
  )
}

export default PencilIcon

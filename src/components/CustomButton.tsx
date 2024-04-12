'use client'

interface CustomButtonProps {
  id: string
  value: string
  onClick?: () => void
}

function CustomButton({ id, value, onClick = () => {} }: CustomButtonProps) {
  return (
    <div className="">
      <button
        className="rounded bg-neutral-500 px-2 py-1 text-sm"
        id={id}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  )
}

export default CustomButton

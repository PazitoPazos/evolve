'use client'

import { ButtonHTMLAttributes, MouseEventHandler } from 'react'

interface CustomButtonProps {
  id: string
  value: string
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function CustomButton({
  id,
  value,
  type,
  onClick = undefined,
}: CustomButtonProps) {
  return (
    <div className="">
      <button
        className="rounded bg-accent px-2 py-1 text-xl font-bold text-[#ddd] hover:bg-accent-dark"
        id={id}
        type={type}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  )
}

export default CustomButton

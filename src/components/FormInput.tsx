import { ChangeEvent, useState } from 'react'
import { removeDash } from '../utils/removeDash'

interface FormInputProps {
  inputName: string
  inputType: string
  icon: React.ReactNode
  id: string
  required?: boolean
  value?: string
  placeholder?: string
  focus?: boolean
  label?: boolean
  onChange?: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined
}

function FormInput({
  inputName,
  inputType,
  icon,
  id,
  required = false,
  placeholder = '',
  focus = false,
  label = true,
  onChange = undefined,
}: FormInputProps) {
  return (
    <div className="text-xl">
      {label ? (
        <label className="mb-2 block text-left capitalize" htmlFor={inputName}>
          {removeDash(inputName)}
        </label>
      ) : (
        <></>
      )}
      <div className="mb-4 flex gap-2">
        {icon}
        <input
          className="w-full rounded p-2 text-lg outline outline-1 outline-neutral-500 focus-visible:outline-2 focus-visible:outline-white"
          id={id}
          name={inputName}
          type={inputType}
          required={required}
          placeholder={placeholder}
          autoFocus={focus}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default FormInput

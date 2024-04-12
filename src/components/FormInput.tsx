import { ChangeEvent, useState } from 'react'
import { removeDash } from '../utils/removeDash'

interface FormInputProps {
  inputName: string
  inputType: string // Proporciona un tipo explícito para inputType
  icon: React.ReactNode
  id: string
  value?: string
  placeholder?: string
  focus?: boolean
  label?: boolean
}

function FormInput({
  inputName,
  inputType,
  icon,
  id,
  value = '',
  placeholder = '',
  focus = false,
  label = true,
}: FormInputProps) {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="">
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
          className="w-full rounded outline outline-1 outline-neutral-500 focus-visible:outline-2 focus-visible:outline-white"
          id={id}
          type={inputType}
          value={inputValue}
          placeholder={placeholder}
          autoFocus={focus}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default FormInput

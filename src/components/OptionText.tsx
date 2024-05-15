'use client'
import { ChangeEvent, useState } from 'react'

interface OptionTextProps {
  optionId: string
  optionDesc: string
  optionKey: string
  optionValue: string
}

function OptionText({
  optionId,
  optionDesc,
  optionKey,
  optionValue,
}: OptionTextProps) {
  const [value, setValue] = useState(optionValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="text-[#b3b3b3] md:col-span-2">
      <div className="flex flex-grow flex-wrap items-center gap-4 border-4 border-solid border-secondary-light px-3 py-3 text-lg md:justify-between md:gap-0 md:text-xl">
        <label htmlFor={optionId}>{optionDesc}</label>
        <input
          className="w-3/4 rounded bg-primary-light px-1 text-lg"
          type="text"
          value={value}
          name={optionId}
          id={optionId}
          onChange={handleChange}
        />
      </div>
      <div className="text-md flex border-4 border-t-0 border-solid border-secondary-light p-1 pl-3">
        <span className="font-bold">{optionKey}</span>=
        <span className="">{optionValue}</span>
      </div>
    </div>
  )
}

export default OptionText

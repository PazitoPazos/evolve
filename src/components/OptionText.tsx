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
    <div className="col-span-2 border-2 border-solid border-white p-4">
      <div className="flex flex-grow flex-wrap items-center justify-between border-2 border-solid border-white px-4 py-3 text-lg">
        <label htmlFor={optionId}>{optionDesc}</label>
        <input
          className="w-3/4 text-lg"
          type="text"
          value={value}
          name={optionId}
          id={optionId}
          onChange={handleChange}
        />
      </div>
      <div className="flex border-2 border-t-0 border-solid border-white p-1 text-sm">
        <span className="font-bold">{optionKey}</span>=
        <span className="">{optionValue}</span>
      </div>
    </div>
  )
}

export default OptionText

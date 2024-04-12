'use client'
import { useState } from 'react'

interface OptionCheckboxProps {
  optionId: string
  optionDesc: string
  optionKey: string
  optionValue: string
}

function OptionCheckbox({
  optionId,
  optionDesc,
  optionKey,
  optionValue,
}: OptionCheckboxProps) {
  const [value, setValue] = useState(optionValue)

  const handleChange = () => {
    setValue(value === 'true' ? 'false' : 'true')
  }

  return (
    <div className="border-2 border-solid border-white p-4">
      <div className="flex flex-grow flex-wrap items-center justify-between border-2 border-solid border-white px-4 py-3 text-lg">
        <div className="">
          <label htmlFor={optionId}>{optionDesc}</label>
        </div>
        <div className="">
          <input
            className="h-6 w-6"
            type="checkbox"
            checked={value === 'true'}
            onChange={handleChange}
            name={optionId}
            id={optionId}
          />
        </div>
      </div>
      <div className="flex border-2 border-t-0 border-solid border-white p-1 text-sm">
        <span className="font-bold">{optionKey}</span>=
        <span className="">{optionValue}</span>
      </div>
    </div>
  )
}

export default OptionCheckbox

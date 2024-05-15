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
    <div className="text-[#b3b3b3]">
      <div className="flex flex-grow flex-wrap items-center gap-4 border-4 border-solid border-secondary-light px-3 py-3 text-lg md:justify-between md:gap-0 md:text-xl">
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
      <div className="text-md flex border-4 border-t-0 border-solid border-secondary-light p-1 pl-3">
        <span className="font-bold">{optionKey}</span>=
        <span className="">{optionValue}</span>
      </div>
    </div>
  )
}

export default OptionCheckbox

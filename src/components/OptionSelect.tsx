'use client'
import { FormEventHandler, useState } from 'react'

interface Option {
  value: string
  label: string
}

interface OptionSelectProps {
  optionId: string
  optionDesc: string
  optionKey: string
  optionValue: string
  selectOptions: Option[]
}

function OptionSelect({
  optionId,
  optionDesc,
  optionKey,
  optionValue,
  selectOptions = [],
}: OptionSelectProps) {
  const [value, setValue] = useState(optionValue)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="text-[#b3b3b3]">
      <div className="flex flex-grow flex-wrap items-center gap-4 border-4 border-solid border-secondary-light px-3 py-3 text-lg md:justify-between md:gap-0 md:text-xl">
        <div className="">
          <label htmlFor={optionId}>{optionDesc}</label>
        </div>
        <div className="">
          <select
            className="w-32 rounded bg-primary-light px-1 text-left text-lg"
            name={optionId}
            id={optionId}
            value={value}
            onChange={handleChange}
          >
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-md flex border-4 border-t-0 border-solid border-secondary-light p-1 pl-3">
        <span className="font-bold">{optionKey}</span>=
        <span className="">{optionValue}</span>
      </div>
    </div>
  )
}

export default OptionSelect

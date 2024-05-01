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
    <div className="border-2 border-solid border-white p-4">
      <div className="flex flex-grow flex-wrap items-center justify-between border-2 border-solid border-white px-3 py-3 text-xl">
        <div className="">
          <label htmlFor={optionId}>{optionDesc}</label>
        </div>
        <div className="">
          <select
            className="w-32 text-left text-lg"
            name={optionId}
            id={optionId}
            value={value}
            onChange={handleChange}
          >
            {selectOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex border-2 border-t-0 border-solid border-white p-1 pl-3 text-md">
        <span className="font-bold">{optionKey}</span>=
        <span className="">{optionValue}</span>
      </div>
    </div>
  )
}

export default OptionSelect

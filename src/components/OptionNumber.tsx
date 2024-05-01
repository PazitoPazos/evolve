'use client'
import { useState, ChangeEvent } from 'react'

interface OptionNumberProps {
  optionId: string
  optionDesc: string
  optionKey: string
  optionValue: number
  minValue: number
  maxValue: number
}

function OptionNumber({
  optionId,
  optionDesc,
  optionKey,
  optionValue,
  minValue,
  maxValue,
}: OptionNumberProps) {
  const [value, setValue] = useState(optionValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value))
  }

  return (
    <div className="border-2 border-solid border-white p-4">
      <div className="flex flex-grow flex-wrap items-center justify-between border-2 border-solid border-white px-3 py-3 text-xl">
        <div className="">
          <label htmlFor={optionId}>{optionDesc}</label>
        </div>
        <div className="">
          <input
            className="w-16 text-left text-lg"
            type="number"
            value={value}
            min={minValue}
            max={maxValue}
            name={optionId}
            id={optionId}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex border-2 border-t-0 border-solid border-white p-1 pl-3 text-md">
        <span className="font-bold">{optionKey}</span>=
        <span className="">{optionValue}</span>
      </div>
    </div>
  )
}

export default OptionNumber

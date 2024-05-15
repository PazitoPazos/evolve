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
    <div className="text-[#b3b3b3]">
      <div className="flex flex-grow flex-wrap items-center gap-4 border-4 border-solid border-secondary-light px-3 py-3 text-lg md:justify-between md:gap-0 md:text-xl">
        <div className="">
          <label htmlFor={optionId}>{optionDesc}</label>
        </div>
        <div className="">
          <input
            className="rounded bg-primary-light px-1 text-left md:w-16 md:text-lg"
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
      <div className="md:text-md flex border-4 border-t-0 border-solid border-secondary-light p-1 pl-3 text-sm">
        <span className="font-bold">{optionKey}</span>=
        <span className="">{optionValue}</span>
      </div>
    </div>
  )
}

export default OptionNumber

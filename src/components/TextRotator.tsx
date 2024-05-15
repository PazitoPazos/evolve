import React, { useState, useEffect } from 'react'

const TextRotator: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = [
    'environment and unlock new possibilities',
    'features with our customizable solutions',
    'management with our user-friendly panel',
    'options and your gaming experience',
    'with our premium hosting solutions',
  ]

  const interval = 5000

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, interval)

    return () => {
      clearInterval(timer)
    }
  }, [texts, interval])

  return (
    <div className="relative lg:ml-1 lg:mt-2">
      <p className="text-center font-bold md:text-left md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        {texts.map((text, index) => (
          <span
            key={index}
            className={`absolute left-1/2 w-full -translate-x-1/2 transform text-wrap transition-all duration-700 lg:text-nowrap ${
              currentTextIndex === index
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0 lg:translate-y-24'
            }`}
          >
            {text}
          </span>
        ))}
      </p>
    </div>
  )
}

export default TextRotator

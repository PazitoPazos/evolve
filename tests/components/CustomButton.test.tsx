import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CustomButton from '@/components/CustomButton'

test('renders button with label', () => {
  render(<CustomButton id='custom-button-1' value='Click me' />)
  const buttonElement = screen.getByText(/click me/i)
  expect(buttonElement).toBeInTheDocument()
})

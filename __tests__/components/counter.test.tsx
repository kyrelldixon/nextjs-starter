import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Counter } from '~/components/counter'

describe('Counter', () => {
  it('renders the counter', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('increments the counter', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByText('+'))

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrements the counter', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByText('+'))

    expect(screen.getByText('1')).toBeInTheDocument()
  })
})

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('render the home page', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})

import { render, screen } from '@testing-library/react'
import { CardItem } from '@/components'

describe('CardItem', () => {
  it('should render the card with the name and description', () => {
    render(
      <CardItem
        name="John Doe" 
        description="Software Developer" 
        url="https://example.com/avatar.jpg"
      />
    )
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    
    expect(screen.getByText('Software Developer')).toBeInTheDocument()
  })

  it('should render the card without description if not provided', () => {
    render(
      <CardItem
        name="Jane Doe" 
        url="https://example.com/avatar.jpg" 
      />
    )
    
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    
    const description = screen.queryByText(/Software Developer/i)
    expect(description).toBeNull()
  })

  it('should have correct styles applied', () => {
    render(
      <CardItem 
        name="Test Name" 
        description="Test Description" 
        url="https://example.com/avatar.jpg"
      />
    )
    
    const boxElement = screen.getByTestId('card-item-box')
    expect(boxElement).toHaveStyle('display: flex')
    expect(boxElement).toHaveStyle('justify-content: start')
    expect(boxElement).toHaveStyle('width: 100%')
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import { BoxComponent } from '.'

describe('BoxComponent', () => {
  it('applies space, layout, flexbox, position, textAlign, and background props', () => {
    const { container } = render(
      <BoxComponent
        p={4}
        m={2}
        width="100px"
        height="200px"
        display="flex"
        justifyContent="center"
        position="absolute"
        top="10px"
        left="20px"
        textAlign="center"
        bg="blue"
      />
    )

    const box = container.firstChild
    if (!(box instanceof HTMLElement)) {
      throw new Error('First child is not an HTMLElement')
    }

    expect(box).toHaveStyle('padding: 32px')
    expect(box).toHaveStyle('margin: 8px') 
    expect(box).toHaveStyle('width: 100px')
    expect(box).toHaveStyle('height: 200px')
    expect(box).toHaveStyle('display: flex')
    expect(box).toHaveStyle('justify-content: center')
    expect(box).toHaveStyle('position: absolute')
    expect(box).toHaveStyle('top: 10px')
    expect(box).toHaveStyle('left: 20px')
    expect(box).toHaveStyle('text-align: center')
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BoxComponent } from '.'

describe('BoxComponent', () => {
  it('renders correctly with provided props', () => {
    render(
      <BoxComponent 
        activeBg="rgba(169, 169, 169, 0.1)" 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        width={200} 
        height={100} 
        data-testid="box-component"
      />
    )

    const box = screen.getByTestId('box-component')

    expect(box).toBeInTheDocument()

    expect(box).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '200px',
      height: '100px',
    })
  })

  it('applies activeBg on :active state', async () => {
    render(
      <BoxComponent 
        activeBg="rgba(169, 169, 169, 0.1)" 
        data-testid="box-component"
      />
    )

    const box = screen.getByTestId('box-component')
    const user = userEvent.setup()

    // Simula o estado ativo
    await user.pointer({ target: box, keys: '[MouseLeft]' })

    // Verifica se a cor de fundo do :active foi aplicada
    expect(box).toHaveStyleRule('background-color', 'rgba(169, 169, 169, 0.1)', {
      modifier: ':active',
    })
  })
})

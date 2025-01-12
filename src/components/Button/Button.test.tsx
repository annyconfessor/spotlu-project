import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from '..'

describe('ButtonComponent', () => {
  it('deve renderizar o texto do botão', () => {
    render(<Button width={100} onClick={() => {}}>Clique aqui</Button>);

    const button = screen.getByText(/Clique aqui/i);
    expect(button).toBeInTheDocument()
  });

  it('deve chamar a função onClick quando clicado', () => {
    const handleClick = jest.fn();
    render(<Button width={100} onClick={handleClick}>Clique aqui</Button>);

    const button = screen.getByText(/Clique aqui/i)
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('deve aplicar a largura correta', () => {
    const width = 150;
    render(<Button width={width} onClick={() => {}}>Clique aqui</Button>);

    const button = screen.getByText(/Clique aqui/i)
    expect(button).toHaveStyle(`width: ${width}px`)
  });
});

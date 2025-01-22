import { render, screen } from '@testing-library/react';
import { Avatar } from '@/components';

describe('AvatarComponent', () => {
  it('should render the avatar with the correct properties', () => {
    const props = {
      width: '100%',
      height: '100%',
      url: 'https://example.com/avatar.jpg',
      borderRadius: '50%',
      alt: 'Avatar'
    };

    render(<Avatar {...props} />);

    const imageElement = screen.getByAltText('Avatar')
    expect(imageElement).toHaveAttribute('src', props.url)
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveStyle(`border-radius: ${props.borderRadius}`)
    expect(imageElement).toHaveStyle(`width: ${props.width}`)
    expect(imageElement).toHaveStyle(`height: ${props.height}`)
  });
});
import { render, screen } from '@testing-library/react';
import { CardItem } from '@/components';
import { images } from '@/assets';

describe('CardItem', () => {
  it('should render with the correct styles and content', () => {
    render(
        <CardItem 
          name="John Doe" 
          description="Software Developer"
          url="https://example.com/avatar.jpg"
          borderRadius={10}
        />
    );

    const cardBox = screen.getByTestId('card-item-box');
    expect(cardBox).toHaveStyle('display: flex');
    expect(cardBox).toHaveStyle('justify-content: start');
    expect(cardBox).toHaveStyle('width: 100%');
    expect(cardBox).toHaveStyle('padding: 10px');

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });

  it('should render default image if url is not provided', () => {
    render(
        <CardItem
          name="Jane Doe" 
          description="Designer"
          borderRadius={20}
        />
    );

    const avatarImage = screen.getByRole('img'); 
    expect(avatarImage).toHaveAttribute('src', images['defaultCoverImage']);
  });

  it('should not render description if not provided', () => {
    render(
        <CardItem
          name="No Description User"
          url="https://example.com/avatar.jpg"
        />
    );

    expect(screen.getByText('No Description User')).toBeInTheDocument();
    expect(screen.queryByText('Software Developer')).toBeNull();
  });
});

import styled from 'styled-components';
import { variant, space, color, layout } from 'styled-system';

interface TextProps {
  variant?: 'title' | 'heading' | 'subheading' | 'subtitle' | 'paragraph' | 'subParagraph' | 'footer';
  padding?: number;
  isHover?: boolean;
}

export const TextComponent = styled.span<TextProps>`
  ${variant({
    variants: {
      title: {
        fontSize: 28,
        fontWeight: 600,
        color: '#FFFFFF',
      },
      heading: {
        fontSize: 26,
        fontWeight: 700,
        color: '#FFFFFF',
      },
      subheading: {
        fontSize: 21,
        fontWeight: 700,
        color: '#949EA2',
      },
      subtitle: {
        fontSize: 20,
        fontWeight: 400,
        color: '#D3DADD',
        bold: {
          fontWeight: 700,
          color: '#FFFFFF',
        },
      },
      paragraph: {
        fontSize: 18,
        fontWeight: 500,
        color: '#FFFFFF',
        bold: {
          fontWeight: 500,
        },
      },
      subParagraph: {
        fontSize: 16,
        fontWeight: 400,
        color: '#FFFFFF',
        bold: {
          fontWeight: 500,
        }
      }
    },
  })}
  ${space}
  ${color}
  ${layout}

  ${({ variant, isHover }) =>
    variant === 'subheading' &&
    `
      color: ${isHover ? '#FFFFFF' : '#949EA2'};
      &:hover {
        color: #FFFFFF; 
      }
    `}
`;

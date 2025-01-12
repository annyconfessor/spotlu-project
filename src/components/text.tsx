import styled from 'styled-components'
import { variant } from 'styled-system'

interface TextProps {
  variant?: 'title' | 'heading' | 'subheading' | 'subtitle' | 'paragraph' | 'subParagraph';
}

// TODO: configurar theme
const Text = styled.span<TextProps>`
    ${variant({
      variants: {
        title: {
          fontSize: 28,
          fontWeight: 600,
          color: '##FFFFFF',
        },
        heading: {
          fontSize: 24, 
          fontWeight: 700,
          color: '#FFFFFF',
        },
        subheading: {
          fontSize: 19 ,
          fontWeight: 700, 
          color: '#FFFFFF',
          disable: {
            color: "#949EA2"
          }
        },
        subtitle: {
          fontSize: 16,  
          fontWeight: 400,
          color: '#D3DADD',
          bold: {
            fontWeight: 700,
            color: '#FFFFFF',
          },
        },
        paragraph: {
          fontSize: 14,
          fontWeight: 400,
          color: '#FFFFFF',
          bold: {
            fontWeight: 500
          }
        },
        subParagraph: {
          fontSize: 12,
          fontWeight: 400,
          color: '#FFFFFF',
          bold: {
            fontWeight: 500
          }
        }
      }
    })}
`

export default Text

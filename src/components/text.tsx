import styled, { css } from 'styled-components'
import { variant } from 'styled-system'

// TODO: configurar theme
const Text = styled.span`
  ${() => css`
      ${variant({
        variants: {
          title: {
            fontSize: 28,
            fontWeight: 600,
            color: '##FFFFFF',
            // Grey/tom-color-grey-000
            // color: theme.colors.support.white,
            lineHeight: 32
          },
          heading: {
            fontSize: 24, 
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 20,
          },
          subheading: {
            fontSize: 19 ,
            fontWeight: 700, 
            color: '#FFFFFF',
            disable: {
              color: "#949EA2"
              // Grey/tom-color-grey-500
            }
          },
          subtitle: {
            fontSize: 16,  
            fontWeight: 400,
            color: '#D3DADD',
            // Grey/tom-color-grey-300
            lineHeight: 18,
            bold: {
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 20
            },
          },
          paragraph: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 20,
            color: '#FFFFFF',
            bold: {
              fontWeight: 500
            }
          }
        }
      })}
  `}
`

export default Text

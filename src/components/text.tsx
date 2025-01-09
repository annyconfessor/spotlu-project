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
              // Grey/tom-color-grey-500
            }
          },
          subtitle: {
            fontSize: 16,  
            fontWeight: 400,
            color: '#D3DADD',
            // Grey/tom-color-grey-300
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
          }
        }
      })}
  `}
`

export default Text

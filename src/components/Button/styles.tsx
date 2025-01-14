import styled from "styled-components"
import { ButtonProps } from "./types"

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => `${width}px`};
  height: 42px;
  background-color: #57B660;
  color: #181414;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  margin: 10px;
`
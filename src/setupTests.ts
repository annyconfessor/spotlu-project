import { TextEncoder, TextDecoder } from "util"
import '@testing-library/jest-dom'
import 'jest-styled-components'

global.TextEncoder = TextEncoder as typeof globalThis.TextEncoder
global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder
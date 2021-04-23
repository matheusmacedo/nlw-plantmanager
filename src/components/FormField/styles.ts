import { TextInput } from 'react-native'
import styled from 'styled-components'

export const Input = styled(TextInput)<{ isFocused: boolean; isFilled: any }>`
  width: 100%;
  border-bottom-width: 1px;
  color: #52665a;
  font-size: 18px;
  text-align: center;
  padding: 10px;
  border-bottom-color: ${(props) =>
    props.isFocused || props.isFilled ? '#32B768' : '#cfcfcf'};
`

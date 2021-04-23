import styled from 'styled-components'
import { View, SafeAreaView, KeyboardAvoidingView } from 'react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ButtonArea = styled(View)`
  padding: 0 16px;
  margin-top: 48px;
`

export const KeyboardContainer = styled(KeyboardAvoidingView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

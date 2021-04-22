import React from 'react'
import { Text, TouchableOpacityProps } from 'react-native'
import { Button } from './styles'

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, ...rest }) => {
  return (
    <Button activeOpacity={0.8} {...rest}>
      <Text>{text}</Text>
    </Button>
  )
}

export default PrimaryButton

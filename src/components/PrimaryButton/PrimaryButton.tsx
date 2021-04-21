import React from 'react'
import { Text } from 'react-native'
import { Button } from './styles'

interface PrimaryButtonProps {
  text: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  return (
    <Button activeOpacity={0.8}>
      <Text>{text}</Text>
    </Button>
  )
}

export default PrimaryButton

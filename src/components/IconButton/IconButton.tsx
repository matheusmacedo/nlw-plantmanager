import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Button } from './styles'

interface IconButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({ children, ...rest }) => {
  return (
    <Button activeOpacity={0.8} {...rest}>
      {children}
    </Button>
  )
}

export default IconButton

import React from 'react'
import { Button } from './styles'

interface IconButtonProps {
  children: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return <Button activeOpacity={0.8}>{children}</Button>
}

export default IconButton

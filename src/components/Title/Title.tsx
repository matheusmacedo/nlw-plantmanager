import React from 'react'
import  { Heading } from './styles'

interface TitleProps {
  styles?: {}
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ styles, children }) => {
  return <Heading style={styles}>{children}</Heading>
}

export default Title

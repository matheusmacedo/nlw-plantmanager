import React from 'react'
import { Heading } from './styles'

interface DescriptionProps {
  styles?: {}
  children: React.ReactNode
}

const Description: React.FC<DescriptionProps> = ({ styles, children }) => {
  return <Heading style={styles}>{children}</Heading>
}

export default Description

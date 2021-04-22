import React from 'react'
import { ImageProps, Dimensions } from 'react-native'
import { ImageElement } from './styles'

interface DynamicImageProps extends ImageProps {
  multiplier?: number
}

const DynamicImage: React.FC<DynamicImageProps> = ({
  source,
  multiplier = 0.7,
  ...rest
}) => {
  const height: number = Dimensions.get('window').width * multiplier

  return (
    <ImageElement
      source={source}
      height={height}
      resizeMode="contain"
      {...rest}
    />
  )
}

export default DynamicImage

import React from 'react'
import { Image } from 'react-native'
import WateringImg from 'assets/watering.png'
import { Description, IconButton, Title } from 'components'
import { Container } from './styles'

export default function Welcome() {
  return (
    <Container>
      <Title styles={{ textAlign: 'center' }}>
        Gerencie{'\n'}suas plantas de{'\n'}forma fácil
      </Title>
      <Image source={WateringImg} style={{ marginVertical: 48 }} />
      <Description styles={{ textAlign: 'center' }}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Description>
      <IconButton>{'>'}</IconButton>
    </Container>
  )
}

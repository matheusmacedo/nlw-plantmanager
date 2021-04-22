import React from 'react'
import { Image } from 'react-native'
import WateringImg from 'assets/watering.png'
import { Description, IconButton, Title } from 'components'
import { Container } from './styles'
import { Feather } from '@expo/vector-icons'

export default function Welcome() {
  return (
    <Container>
      <Title styles={{ textAlign: 'center' }}>
        Gerencie{'\n'}suas plantas de{'\n'}forma fácil
      </Title>
      <Image source={WateringImg} style={{ marginVertical: 48 }} />
      <Description styles={{ textAlign: 'center', marginBottom: 24 }}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Description>
      <IconButton>
        <Feather name="chevron-right" style={{ color: '#fff', fontSize: 24 }} />
      </IconButton>
    </Container>
  )
}

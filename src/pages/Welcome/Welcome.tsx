import React from 'react'
import { Image } from 'react-native'
import WateringImg from 'assets/watering.png'
import { Description, IconButton, Title } from 'components'
import { Container } from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

export default function Welcome() {
  const navigation = useNavigation()

  function handleClick() {
    navigation.navigate('UserIdentification')
  }
  return (
    <Container>
      <Title styles={{ textAlign: 'center' }}>
        Gerencie{'\n'}suas plantas de{'\n'}forma fácil
      </Title>
      <Image source={WateringImg} />
      <Description styles={{ textAlign: 'center' }}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Description>
      <IconButton onPress={handleClick}>
        <Feather name="chevron-right" style={{ color: '#fff', fontSize: 24 }} />
      </IconButton>
    </Container>
  )
}

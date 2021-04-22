import React from 'react'
import { Text } from 'react-native'
import { FormField, Title } from 'components'
import { Container } from './styles'

export default function UserIdentification() {
  return (
    <Container>
      <Text style={{ marginBottom: 32, fontSize: 24 }}>😀</Text>
      <Title styles={{ textAlign: 'center', marginBottom: 32 }}>
        Como podemos chamar você?
      </Title>
      <FormField />
    </Container>
  )
}

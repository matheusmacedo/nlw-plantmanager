import React from 'react'
import { Platform, Text } from 'react-native'
import { FormField, PrimaryButton, Title } from 'components'
import { Container, ButtonArea, KeyboardContainer } from './styles'

export default function UserIdentification() {
  const [name, setName] = React.useState('')

  return (
    <Container>
      <KeyboardContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={{ marginBottom: 32, fontSize: 24 }}>
          {name ? '🤩' : '😀'}
        </Text>
        <Title
          styles={{
            textAlign: 'center',
            marginBottom: 32,
            paddingHorizontal: 24,
          }}
        >
          Como podemos chamar você?
        </Title>
        <FormField
          value={name}
          setValue={setName}
          placeholder="Digite um nome"
        />
        <ButtonArea>
          <PrimaryButton text="Confirmar" />
        </ButtonArea>
      </KeyboardContainer>
    </Container>
  )
}

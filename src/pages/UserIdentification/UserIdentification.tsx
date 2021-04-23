import React from 'react'
import {
  Keyboard,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import { FormField, PrimaryButton, Title } from 'components'

import { Container, ButtonArea, KeyboardContainer } from './styles'
import { useNavigation } from '@react-navigation/core'

export default function UserIdentification() {
  const [name, setName] = React.useState('')
  const navigation = useNavigation()

  function handleClick() {
    navigation.navigate('PlantSelect')
  }

  return (
    <Container>
      <KeyboardContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
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
              <PrimaryButton text="Confirmar" onPress={handleClick} />
            </ButtonArea>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardContainer>
    </Container>
  )
}

import React from 'react'
import { TextInputProps } from 'react-native'
import { Input } from './styles'

interface FormFieldProps extends TextInputProps {
  value: string
  setValue: (text: string) => any
  isFocused?: boolean
}

const FormField: React.FC<FormFieldProps> = ({ value, setValue, ...rest }) => {
  const [isFocused, setIsFocused] = React.useState(false)

  function handleBlur() {
    setIsFocused(false)
  }

  function handleFocus() {
    setIsFocused(true)
  }

  function handleChange(e: string) {
    setValue(e)
  }

  return (
    <Input
      onChangeText={(e) => handleChange(e)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocused={isFocused}
      isFilled={!!value}
      {...rest}
    />
  )
}

export default FormField

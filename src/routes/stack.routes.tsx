import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { UserIdentification, Welcome } from 'pages'

const stackRoutes = createStackNavigator()

const StackRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <stackRoutes.Screen name="Welcome" component={Welcome} />
      <stackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
    </stackRoutes.Navigator>
  )
}

export default StackRoutes

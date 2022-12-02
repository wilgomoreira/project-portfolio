import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Title, Screen1, ScreenArea } from './styles'

import screen1 from '../../assets/screens-ecommerce/screen1.jpeg'
import screen2 from '../../assets/screens-ecommerce/screen2.jpeg'
import screen3 from '../../assets/screens-ecommerce/screen3.jpeg'
import screen4 from '../../assets/screens-ecommerce/screen4.jpeg'

export default function ProjectEcommerce() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <ScreenArea>
          <Title> Sign In </Title>
          <Screen1 source={screen1} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Sign Up </Title>
          <Screen1 source={screen2} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Shop </Title>
          <Screen1 source={screen3} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Cart </Title>
          <Screen1 source={screen4} resizeMode="contain" />
        </ScreenArea>

      </ScrollView>
    </Container>
  )
}
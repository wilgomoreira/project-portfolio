import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Title, Screen1, ScreenArea } from './styles'

import screen1 from '../../assets/screens-quotes/AppScreen1.jpeg'
import screen2 from '../../assets/screens-quotes/AppScreen2.jpeg'


export default function ProjectQuotes() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <ScreenArea>
          <Title> Book Closed </Title>
          <Screen1 source={screen1} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Book Opened </Title>
          <Screen1 source={screen2} resizeMode="contain" />
        </ScreenArea>

      </ScrollView>
    </Container>
  )
}
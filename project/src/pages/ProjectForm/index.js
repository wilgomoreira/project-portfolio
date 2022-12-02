import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Title, Screen1, ScreenArea } from './styles'

import screen1 from '../../assets/screens-form/screen1.jpeg'
import screen2 from '../../assets/screens-form/screen2.jpeg'
import screen3 from '../../assets/screens-form/screen3.jpeg'


export default function ProjectEcommerce() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <ScreenArea>
          <Title> Form </Title>
          <Screen1 source={screen1} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Salved in the Database </Title>
          <Screen1 source={screen2} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> List of saved data </Title>
          <Screen1 source={screen3} resizeMode="contain" />
        </ScreenArea>

      </ScrollView>
    </Container>
  )
}
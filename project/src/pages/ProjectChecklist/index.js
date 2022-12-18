import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Title, Screen1, ScreenArea } from './styles'

import screen1 from '../../assets/screens-checklist/screen1.jpeg'
import screen2 from '../../assets/screens-checklist/screen2.jpeg'
import screen3 from '../../assets/screens-checklist/screen3.jpeg'
import screen4 from '../../assets/screens-checklist/screen4.jpeg'
import screen5 from '../../assets/screens-checklist/screen5.jpeg'
import screen6 from '../../assets/screens-checklist/screen6.jpeg'
import screen7 from '../../assets/screens-checklist/screen7.jpeg'
import screen8 from '../../assets/screens-checklist/screen8.jpeg'
import screen9 from '../../assets/screens-checklist/screen9.jpeg'
import screen10 from '../../assets/screens-checklist/screen10.jpeg'

export default function ProjectEcommerce() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <ScreenArea>
          <Title> Checklist Screen </Title>
          <Screen1 source={screen1} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Checklist Screen </Title>
          <Screen1 source={screen2} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Checklist Screen </Title>
          <Screen1 source={screen3} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Checklist Screen </Title>
          <Screen1 source={screen4} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Questions Screen </Title>
          <Screen1 source={screen5} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Print Screen </Title>
          <Screen1 source={screen6} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Print Screen </Title>
          <Screen1 source={screen7} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Pdf Screen </Title>
          <Screen1 source={screen8} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Mobile Screen </Title>
          <Screen1 source={screen9} resizeMode="contain" />
        </ScreenArea>

        <ScreenArea>
          <Title> Pdf Screen </Title>
          <Screen1 source={screen10} resizeMode="contain" />
        </ScreenArea>

      </ScrollView>
    </Container>
  )
}
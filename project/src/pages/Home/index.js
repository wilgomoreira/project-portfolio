import React, { useState } from 'react'
import { Modal} from 'react-native'
import { Container, Title, ImageMine, Description, ButtonMySkills, ButtonText } from './styles'

import myPhoto from '../../assets/myPhoto.png'
import DetailsModal from '../../components/DetailsModal'

export default function Home() {

  const [modalVisible, setModalVisible] = useState(false)

  function openModal() {
    setModalVisible(true)
  }

  function closeModal() {
    setModalVisible(false)
  }

  return (
    <Container>
          <ImageMine source={myPhoto} resizeMode="contain" />
          <Title> {`I am Wilgo,`} </Title>
          <Title> {`Mobile Developer`} </Title>
      

      <Description> I am currently working on developing applications for Android / IOS using React Native according to customer demand</Description>

      <ButtonMySkills onPress={openModal} >
        <ButtonText> My Skills </ButtonText>
      </ButtonMySkills>

        <Modal visible={modalVisible} animationType='slide' transparent={true}>
          <DetailsModal close={closeModal} />
        </Modal>
      
    </Container>
  )
}
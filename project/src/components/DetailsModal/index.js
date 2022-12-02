import React from "react";
import { ScrollView } from 'react-native'
import { Container, TitleModal, TitleArea, SkillsArea, SubTitle, Item, CloseButton } from './styles'
import Feather from 'react-native-vector-icons/Feather';

export default function DetailsModal({ close }) {
    return (
        <Container >
            <ScrollView showsVerticalScrollIndicator={false}>
                <TitleArea>
                    <CloseButton>
                        <Feather name='x' size={20} onPress={close}></Feather>
                    </CloseButton>
                    <TitleModal> Skills </TitleModal>
                </TitleArea>

                <SkillsArea>
                    <SubTitle>I've worked for 3 years with software development:</SubTitle>
                    <Item>- Software in the petroleum area and</Item>
                    <Item>- Other software for use in patient physiotherapy</Item>
                </SkillsArea>

                <SkillsArea>
                    <SubTitle>I also have knowledge in: </SubTitle>
                    <Item>- Frontend: HTML, CSS, Javascript, ReactJS and NextJS </Item>
                    <Item>- Backend: REST API, Relational (MySQL, SQLite, PostgreSQL) and non-relational (Firebase, MongoDB databases)</Item>
                    <Item>- Code Versioning: Git and GitHub</Item>
                    <Item>- Other languages: Java, C++ and Python</Item>
                </SkillsArea>

                <SkillsArea>
                    <SubTitle>In addition to HardSkills, I have the following SoftSkills: </SubTitle>
                    <Item>- Self-taught to seek knowledge </Item>
                    <Item>- Adaptation to various scenarios and sudden changes in companies. </Item>
                    <Item>- Practical and objective in solving problems.</Item>
                    <Item>- Teamwork, as I've worked with several people in several different teams. for 10 years. </Item>
                </SkillsArea>
            </ScrollView>
        </Container>
    );
}

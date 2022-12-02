import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #e5e5e5;
    width: 100%;
    height: 32%;
    position: absolute;
    bottom: 0;
`;

export const TitleModal = styled.Text`
	font-size: 32px;
	color: #21243D;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
`;

export const TitleArea = styled.View`
    align-items: center;
`;

export const SkillsArea = styled.View`
    padding: 5px;
    margin: 8px;
    border-radius: 10px;
    background-color: #eee;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
	color: #21243D;
`;

export const Item = styled.Text`
    font-size: 16px;
    font-style: italic;
	color: #21243D;
    margin-left: 15px;
    margin-top: 5px;
`;

export const CloseButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
    background-color: #FF6464 ;
    border-radius: 5px;
    height: 25px;
    width: 25px;
    position: absolute;
    right: 30px;
    top: 20px;
`;
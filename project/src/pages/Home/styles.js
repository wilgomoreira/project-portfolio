import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #e5e5e5;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 32px;
	color: #21243D;
	font-weight: bold;
`;

export const ImageMine = styled.Image`
	width: 200px;
	height: 200px;
    border-radius: 100px;
	margin: 30px;
`;

export const Description = styled.Text`
	font-size: 16px;
	color: #21243D;
	margin: 20px;
	text-align: center;
`;

export const ButtonMySkills = styled.TouchableOpacity`
	background-color: #FF6464;
	padding: 5px;
	border-radius: 5px;
	width: 200px;
	justify-content: center;
	align-items: center;
	height: 50px;
`;

export const ButtonText = styled.Text`
	font-size: 20px;
	color: #fff;
`;


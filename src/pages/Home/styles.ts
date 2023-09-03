import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const ContentScroll = styled.ScrollView`
  flex: 1;
`;

export const ContentKeyboard = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Icon = styled.TouchableHighlight`
  margin: 0 auto;
  width: 60px;
  margin-bottom: 20px;
`;

export const HeaderContainer = styled.View`
  padding-bottom: 30px;
`;

export const ContentContainer = styled.View`
  padding-left: 25px;
  padding-right: 25px;
`;

export const NoTask = styled.View`
  padding-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.View`
  position: relative;
  bottom: 0;
  padding-top: 15px;
`;

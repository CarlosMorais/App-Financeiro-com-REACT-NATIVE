import styled from 'styled-components/native';

export const TitleBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 5px;
`;

export const Bottom = styled.TouchableOpacity`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-top: 14px;
    margin: 5px;
    min-width: ${props => props.width || 75}px;
    min-height: ${props => props.height || 75}px;
    border-radius: 5px;
    background-color: ${props => props.backgroundColor || '#fff'};
    border-bottom-width: 3px;
    border-bottom-color: ${props => props.borderBottomColor || 'transparent'};
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    margin-top: 15px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border-radius: 50px;
    background-color: rgba(255,255,255,0.2);
`;

export const BoxUserLeft = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    padding-left: 4px;
    padding-right: 4px;
    margin-left: 3px;
`;

export const BoxUserRight = styled.View`
    display: flex;
    flex-direction: row;
`;

export const BoxUserRightButton = styled.TouchableOpacity`
    margin-right: 5px;
    border-radius: 10px;
    padding: 5px;
`;

export const BoxUserImage = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`;

export const UserImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 50px;
`;
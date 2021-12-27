import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 5px;
    background-color: #f9f9f9;
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Top = styled.View`
    margin-top: 25px;
`;

export const BoxBars = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 40px;;
`;

export const BoxBarLeft = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;
    justify-content: flex-end;
`;

export const BoxBarRight = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin-left: 10px;
`;

export const RecipeBar = styled.View`
    background-color: blue;
    height: ${props => props.percentRecept || 100}%;
    width: 55%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

export const ExpenseBar = styled.View`
    background-color: red;
    height: ${props => props.percentExpense || 100}%;
    width: 55%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

export const RecipeLabel = styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: #065164;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const ExpenseLabel = styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: #7e2d07;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const Footer = styled.View`
    display: flex; 
    flex-direction: row;
`;

export const FooterLeft = styled.View`
    padding: 10px;
    min-height: 50px;
    background-color: #f38349;
    flex: 1;
    margin-right: 5px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`;

export const FooterRight = styled.View`
    padding: 10px;
    min-height: 50px;
    background-color: #f6e7e0;
    flex: 1;
    margin-left: 5px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
`;
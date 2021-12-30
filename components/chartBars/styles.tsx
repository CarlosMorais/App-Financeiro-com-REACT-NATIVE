import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 5px;
    background-color: #fff;
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Top = styled.View`
    margin-top: 0px;
    margin-bottom: 25px;
    width: 100%;
    text-align: center;
`;

export const BoxBars = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 30px;
`;

export const BoxBarsChild = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 10px;
    margin: 1px;
`;

export const BoxBarLeft = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: ${props => props.spaceBetweenBars || 10}px;
`;

export const BoxBarRight = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin-left: ${props => props.spaceBetweenBars || 10}px;
`;

export const RecipeBar = styled.View`
    background-color: blue;
    height: ${props => props.percentRecept || 100}%;
    width: ${props => props.percentWidth || 55}%;
    border-top-left-radius: ${props => props.barRadius || 15}px;
    border-top-right-radius: ${props => props.barRadius || 15}px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

export const ExpenseBar = styled.View`
    background-color: red;
    height: ${props => props.percentExpense || 100}%;
    width: ${props => props.percentWidth || 55}%;
    border-top-left-radius: ${props => props.barRadius || 15}px;
    border-top-right-radius: ${props => props.barRadius || 15}px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

export const RecipeLabel = styled.Text`
    font-size: ${props => props.labelFontSize || 23}px;
    font-weight: bold;
    color: #065164;
    margin-top: 5px;
    margin-bottom: 5px;
    min-width: 120px;
    text-align: right;
`;

export const ExpenseLabel = styled.Text`
    font-size: ${props => props.labelFontSize || 23}px;
    font-weight: bold;
    color: #7e2d07;
    margin-top: 5px;
    margin-bottom: 5px;
    min-width: 120px;
    text-align: left;
`;

export const Footer = styled.View`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-color: #444;
    border-top-width: 1px;
    width: 100%;
    background-color: rgba(100, 100, 100, 0.1);
`;

export const BoxFooterLabels = styled.View`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const BoxFooterLabelText = styled.Text`
    transform: rotate(-0deg);
    padding: 5px;
    font-weight: bold;
    font-size: ${props => props.fontSize || 13}px;
`;

export const LegendColor = styled.View`
    height: 15px;
    width: 15px;
    align-self: center;
    background-color: ${props => props.legendColor || 'red'};
    margin-right: 5px;
`;

export const LegendText = styled.Text`
    font-size: 15px;
    color: #333;
    margin-right: 18px;
`;

export const BoxLegend = styled.View`
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BoxLegendChild = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px;
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
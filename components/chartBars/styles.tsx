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
    margin-top: 40px;
`;

export const BalanceNavigationButton = styled.TouchableOpacity`
    width: 40px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 10px;
    border-top-left-radius: ${props => props.isLeft ? 5 : 0}px;
    border-top-right-radius: ${props => !props.isLeft ? 5 : 0}px;
    border-bottom-left-radius: ${props => props.isLeft ? 5 : 0}px;
    border-bottom-right-radius: ${props => !props.isLeft ? 5 : 0}px;
    background-color: #fff;
`;

export const WidgetBalance = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin: 0px;
    margin-top: -2px;
    margin-bottom: 0px;
    border-radius: 7px;
    background-color: #c9c9c9b5;
`;

export const BoxWidget = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: -10px;
    margin-right: -10px;
`;

export const BoxBarsInner = styled.View`
    margin-left: ${props => props.isVertical ? 0 : 15}px;
    margin-right: ${props => props.isVertical ? 0 : 15}px;
    flex: 1;
    flex-direction: row;
    /* background-color: rgba(100, 100, 100, 0.1); */
`;

export const BoxBarsChild = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 10px;
    margin: 2px;
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
    min-width: 120px;
    margin-bottom: ${props => props.isVertical ? 25 : 5}px;
    margin-right: ${props => props.isVertical ? -25 : 0}px;
    align-self: ${props => props.isVertical ? 'center' : 'flex-end'};
    text-align: ${props => props.isVertical ? 'center' : 'right'};
    transform: rotate(-${props => props.isVertical ? 90 : 0}deg);
`;

export const ExpenseLabel = styled.Text`
    font-size: ${props => props.labelFontSize || 23}px;
    font-weight: bold;
    color: #7e2d07;
    margin-top: 5px;
    min-width: 120px;
    margin-bottom: ${props => props.isVertical ? 25 : 5}px;
    margin-right: ${props => props.isVertical ? -10 : 0}px;
    align-self: ${props => props.isVertical ? 'center' : 'flex-start'};
    text-align: ${props => props.isVertical ? 'center' : 'left'};
    transform: rotate(-${props => props.isVertical ? 90 : 0}deg);
`;

export const Footer = styled.View`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-color: rgba(100, 100, 100, 0.2);
    border-top-width: 1px;
    width: 100%;
    /* background-color: rgba(100, 100, 100, 0.1); */
`;

export const FooterInner = styled.View`
    margin-left: ${props => props.isVertical ? 0 : 15}px;
    margin-right: ${props => props.isVertical ? 0 : 15}px;
    width: 100%;
    /* background-color: rgba(100, 100, 100, 0.1); */
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
    margin-bottom: 5px;
`;

export const LegendColor = styled.View`
    height: 12px;
    width: 12px;
    align-self: center;
    background-color: ${props => props.legendColor || 'red'};
    margin-right: 5px;
`;

export const LegendText = styled.Text`
    font-size: 14px;
    color: #333;
    margin-right: ${props => props.marginRight || 0}px;
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
    margin-top: 15px;
    margin-bottom: ${props => props.isVertical ? 50 : 0}px;
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
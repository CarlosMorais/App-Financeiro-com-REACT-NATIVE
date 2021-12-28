import React, { useRef } from "react";
import { Container, Top, BoxBars, BoxBarsChild, BoxBarLeft, BoxBarRight, RecipeBar, RecipeLabel, BoxLegend, BoxLegendChild, ExpenseLabel, ExpenseBar, Footer, LegendColor, LegendText, BoxFooterLabels, BoxFooterLabelText, FooterLeft, FooterRight } from "./styles";
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import util from '../../util';



export default function ChartBars(props) {
    const { data = [] } = props;

    function renderBars(data, isFooter = false) {

        function getBigger(data) {
            let valueBigger = 0;
            data.map((item, index) => {
                if (item.recept > valueBigger)
                    valueBigger = item.recept;
                if (item.expense > valueBigger)
                    valueBigger = item.expense;
            })
            return valueBigger;
        }

        function labelFontSize(data) {
            if (data && data.length == 1)
                return 23;
            else if (data && data.length == 2)
                return 18;
            else
                return 13;
        }

        function barRadius(data) {
            if (data && data.length == 1)
                return 15;
            else if (data && data.length == 2)
                return 7;
            else
                return 4;
        }

        function percentWidth(data) {
            if (data && data.length == 1)
                return 55;
            else if (data && data.length == 2)
                return 65;
            else
                return 80;
        }

        function handleNumber(number, data) {
            if (data && data.length > 1) {
                while (number.indexOf('R$') > -1)
                    number = number.replace('R$', '');
                while (number.indexOf(' ') > -1)
                    number = number.replace(' ', '');
                while (number.indexOf('-') > -1)
                    number = number.replace('-', '');
            }

            return number;
        }

        function spaceBetweenBars(data) {
            if (data && data.length == 1)
                return 10;
            else if (data && data.length == 2)
                return 5;
            else
                return 1;
        }

        if (data && data.length) {
            return data.map((item, index) => {
                const valueBigger = getBigger(data);
                let recept = util.clearNumber(item.recept).toFixed(2);
                let expense = util.clearNumber(item.expense).toFixed(2);

                let percentRecept = recept >= valueBigger ? 100 : ((recept / valueBigger) * 100).toFixed(2);
                let percentExpense = expense >= valueBigger ? 100 : ((expense / valueBigger) * 100).toFixed(2);

                if (recept == 0)
                    percentRecept = 0.8;
                if (expense == 0)
                    percentExpense = 0.8;

                return (
                    <BoxBarsChild
                        key={index}
                        style={{
                            width: (100 / data.length) + '%',
                            backgroundColor: isFooter && item.label && item.label.length > 0 ? 'rgba(0,0,0,0.05)' : 'transparent',
                            justifyContent: 'center',
                        }}>

                        {!isFooter && (
                            <>
                                <BoxBarLeft spaceBetweenBars={spaceBetweenBars(data)}>
                                    <RecipeLabel labelFontSize={labelFontSize(data)}>{handleNumber(util.numberFormat(recept), data)}</RecipeLabel>
                                    <RecipeBar percentRecept={percentRecept} barRadius={barRadius(data)} percentWidth={percentWidth(data)} />
                                </BoxBarLeft>
                            </>
                        )}
                        {isFooter && item.label && item.label.length > 0 && <BoxFooterLabelText>{item.label}</BoxFooterLabelText>}
                        {!isFooter && (
                            <>
                                <BoxBarRight spaceBetweenBars={spaceBetweenBars(data)}>
                                    <ExpenseLabel labelFontSize={labelFontSize(data)}>{handleNumber('-' + util.numberFormat(expense), data)}</ExpenseLabel>
                                    <ExpenseBar percentExpense={percentExpense} barRadius={barRadius(data)} percentWidth={percentWidth(data)} />
                                </BoxBarRight>
                            </>
                        )}
                    </BoxBarsChild>
                )
            })
        }
    }


    return (
        <Container>
            <Top>

            </Top>
            <BoxBars>
                {renderBars(data)}
            </BoxBars>
            <Footer>
                <BoxFooterLabels>
                    {renderBars(data, true)}
                </BoxFooterLabels>
                <BoxLegend>
                    <BoxLegendChild>
                        <LegendColor legendColor={'blue'} />
                        <LegendText>Receitas</LegendText>
                    </BoxLegendChild>
                    <BoxLegendChild>
                        <LegendColor legendColor={'red'} />
                        <LegendText>Despesas</LegendText>
                    </BoxLegendChild>
                </BoxLegend>
                {/* <FooterLeft>

                </FooterLeft>
                <FooterRight>

                </FooterRight> */}
            </Footer>
        </Container>
    )
}
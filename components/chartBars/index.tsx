import React, { useRef } from "react";
import { Container, WidgetBalance, BalanceNavigationButton, Top, BoxBars, BoxWidget, BoxBarsInner, BoxBarsChild, BoxBarLeft, BoxBarRight, RecipeBar, RecipeLabel, BoxLegend, BoxLegendChild, ExpenseLabel, ExpenseBar, Footer, FooterInner, LegendColor, LegendText, BoxFooterLabels, BoxFooterLabelText, FooterLeft, FooterRight } from "./styles";
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import util from '../../util';



export default function ChartBars(props) {
    const { data = [], handleNext = () => { }, handlePrevious = () => { } } = props;

    function isVertical(data) {
        if (data && data.length > 3)
            return true;
        else
            return false;
    }

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
                return 12;
            else if (data && data.length == 3)
                return 10;
            else if (data && data.length == 4)
                return 7;
            else
                return 5;
        }

        function percentWidth(data) {
            if (data && data.length == 1)
                return 55;
            else if (data && data.length == 2)
                return 65;
            else if (data && data.length == 3)
                return 80;
            else if (data && data.length == 4)
                return 80;
            else if (data && data.length == 5)
                return 80;
            else
                return 61;
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

        function footerLabelTextFontSize(data) {
            if (data && data.length == 1)
                return 16;
            else if (data && data.length == 2)
                return 14;
            else if (data && data.length == 3)
                return 13;
            else if (data && data.length == 4)
                return 12;
            else
                return 10;
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
                            backgroundColor: isFooter && item.label && item.label.length > 0 ? 'rgba(0,0,0,0.0)' : 'transparent',
                            justifyContent: 'center',
                        }}>

                        {!isFooter && (
                            <>
                                <BoxBarLeft spaceBetweenBars={spaceBetweenBars(data)}>
                                    <RecipeLabel isVertical={isVertical(data)} labelFontSize={labelFontSize(data)}>{handleNumber(util.numberFormat(recept), data)}</RecipeLabel>
                                    <RecipeBar isVertical={isVertical(data)} percentRecept={percentRecept} barRadius={barRadius(data)} percentWidth={percentWidth(data)} />
                                </BoxBarLeft>
                            </>
                        )}
                        {isFooter && item.label && item.label.length > 0 && <BoxFooterLabelText fontSize={footerLabelTextFontSize(data)}>{item.label}</BoxFooterLabelText>}
                        {!isFooter && (
                            <>
                                <BoxBarRight spaceBetweenBars={spaceBetweenBars(data)}>
                                    <ExpenseLabel isVertical={isVertical(data)} labelFontSize={labelFontSize(data)}>{handleNumber('-' + util.numberFormat(expense), data)}</ExpenseLabel>
                                    <ExpenseBar isVertical={isVertical(data)} percentExpense={percentExpense} barRadius={barRadius(data)} percentWidth={percentWidth(data)} />
                                </BoxBarRight>
                            </>
                        )}
                    </BoxBarsChild>
                )
            })
        }
    }

    function renderNavigationButton(icon, isLeft = true) {
        return (
            <BalanceNavigationButton isLeft={isLeft} onPress={() => { isLeft ? handlePrevious() : handleNext() }}>
                <FontAwesomeIcon icon={icon} size={25} color={'#000'} style={{ opacity: 0.9, }} />
            </BalanceNavigationButton>
        )
    }

    function renderBalance(balance, data) {
        return (
            <WidgetBalance>
                <FontAwesomeIcon icon={faDollarSign} size={45} color={'#000'} style={{ opacity: 0.5, marginLeft: -10, marginRight: -10, }} />
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: '#243027' }}>{balance}</Text>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', alignSelf: 'center', color: '#919090', marginTop: 3, }}>SALDO {data && data.length > 1 ? 'DESTES MESES' : 'DESTE MÊS'}</Text>
                </View>
            </WidgetBalance>
        )
    }


    return (
        <Container>
            <Top>
                <BoxLegend>
                    <BoxLegendChild isVertical={isVertical(data)}>
                        <LegendColor legendColor={'blue'} />
                        <LegendText marginRight={5}>Receitas</LegendText>
                    </BoxLegendChild>
                    <BoxLegendChild isVertical={isVertical(data)}>
                        <LegendColor legendColor={'red'} />
                        <LegendText>Despesas</LegendText>
                    </BoxLegendChild>
                </BoxLegend>
            </Top>
            <BoxBars>
                <BoxBarsInner isVertical={isVertical(data)}>
                    {renderBars(data)}
                </BoxBarsInner>
            </BoxBars>
            <Footer>
                <FooterInner isVertical={isVertical(data)}>
                    <BoxFooterLabels>
                        {renderBars(data, true)}
                    </BoxFooterLabels>
                    <BoxWidget>
                        {renderNavigationButton(faChevronLeft)}
                        {renderBalance(util.numberFormat(transactions.totalReceipt() - transactions.totalExpenditure()), data)}
                        {renderNavigationButton(faChevronRight, false)}
                    </BoxWidget>
                </FooterInner>
            </Footer>
        </Container>
    )
}
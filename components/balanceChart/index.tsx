import React, { useRef } from "react";
import { Container, Top, BoxBars, BoxBarLeft, BoxBarRight, RecipeBar, RecipeLabel, ExpenseLabel, ExpenseBar, Footer, FooterLeft, FooterRight } from "./styles";
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import util from '../../util';



export default function BalanceChart(props) {
    const { Recept = 0, Expense = 0 } = props;
    let recept = util.clearNumber(Recept);
    let expense = util.clearNumber(Expense);

    let percentRecept = recept >= expense ? 100 : ((recept / expense) * 100);
    let percentExpense = expense >= recept ? 100 : ((expense / recept) * 100);

    if(percentRecept==0)
        percentRecept = 0.1;
    if(percentExpense==0)
        percentExpense = 0.1;

    console.log('percentRecept:',percentRecept)
    console.log('percentExpense:',percentExpense)

    return (
        <Container>
            <Top>

            </Top>
            <BoxBars>
                <BoxBarLeft>
                    <RecipeLabel>{util.numberFormat(Recept)}</RecipeLabel>
                    <RecipeBar percentRecept={percentRecept}/>
                </BoxBarLeft>
                <BoxBarRight>
                    <ExpenseLabel>-{util.numberFormat(Expense)}</ExpenseLabel>
                    <ExpenseBar percentExpense={percentExpense}/>
                </BoxBarRight>
            </BoxBars>
            {/* <Footer>
                <FooterLeft>

                </FooterLeft>
                <FooterRight>

                </FooterRight>
            </Footer> */}
        </Container>
    )
}
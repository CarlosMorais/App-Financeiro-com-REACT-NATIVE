import React, { useRef, useState } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, Animated, Platform } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import util from '../../util';
import ChartBars from "../../components/chartBars";

export default function DFC(props) {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <View style={{ 
            flexDirection: 'column', 
            display: 'flex', 
            justifyContent: 'flex-start',
            height: '100%', }}>
            <View style={{ flexDirection: 'row', }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>DFC - DEMONSTRATIVO DE FLUXO DE CAIXA</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>Relatório de receitas e despesas</Text>
                </View>
            </View>
            <View style={{flex: 1, padding: 3, flexDirection: 'column', marginLeft: -20, marginRight: -20}}>
                <ChartBars 
                data={[
                    {
                        recept: transactions.totalReceipt() + util.getRandomInt(0, 20000),
                        expense: transactions.totalExpenditure() + util.getRandomInt(0, 20000),
                        label: `${util.monthInAcronyms(month - 2 < 0 ? (month - 2 + 12) : month - 2).toUpperCase()} ${month - 2 < 0 ? year - 1 : year}`,
                    },
                    {
                        recept: transactions.totalReceipt() + util.getRandomInt(0, 20000),
                        expense: transactions.totalExpenditure() + util.getRandomInt(0, 20000),
                        label: `${util.monthInAcronyms(month - 1 < 0 ? (month - 1 + 12) : month - 1).toUpperCase()} ${month - 1 < 0 ? year - 1 : year}`,
                    },
                    {
                        recept: transactions.totalReceipt() + util.getRandomInt(0, 20000),
                        expense: transactions.totalExpenditure() + util.getRandomInt(0, 20000),
                        label: `${util.monthInAcronyms(month).toUpperCase()} ${year}`,
                    }
                ]}
                handleNext={()=>{
                    setYear(month == 11 ? year + 1 : year);
                    setMonth(month >= 11 ? 0 : month + 1);
                }}
                handlePrevious={()=>{
                    setYear(month == 0 ? year - 1 : year);
                    setMonth(month == 0 ? 11 : month - 1)
                }}
                />
            </View>
        </View>

    )
}
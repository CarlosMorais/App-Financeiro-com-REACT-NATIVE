import React, { useRef } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, Animated, Platform } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import util from '../../util';
import ChartBars from "../../components/chartBars";

export default function DFC(props) {
    const monName = new Array ("JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ")

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
                        label: `${monName[new Date().getMonth() - 2 + (new Date().getMonth() - 2 < 0 ? 11 : 0)]} ${new Date().getFullYear() + (new Date().getMonth() - 2 < 0 ? 11 : 0)}`,
                    },
                    {
                        recept: transactions.totalReceipt() + util.getRandomInt(0, 20000),
                        expense: transactions.totalExpenditure() + util.getRandomInt(0, 20000),
                        label: `${monName[new Date().getMonth() - 1 + (new Date().getMonth() - 1 < 0 ? 11 : 0)]} ${new Date().getFullYear() + (new Date().getMonth() - 1 < 0 ? 11 : 0)}`,
                    },
                    {
                        recept: transactions.totalReceipt() + util.getRandomInt(0, 20000),
                        expense: transactions.totalExpenditure() + util.getRandomInt(0, 20000),
                        label: `${monName[new Date().getMonth() - 0 + (new Date().getMonth() - 0 < 0 ? 11 : 0)]} ${new Date().getFullYear() + (new Date().getMonth() - 0 < 0 ? 11 : 0)}`,
                    }
                ]}
                />
            </View>
        </View>

    )
}
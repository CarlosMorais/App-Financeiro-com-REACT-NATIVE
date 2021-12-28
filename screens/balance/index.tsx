import React, { useRef } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, Animated, Platform } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import util from '../../util';
import ChartBars from "../../components/chartBars";

export default function Balance(props) {
    const monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

    return (
        <View style={{ 
            flexDirection: 'column', 
            display: 'flex', 
            justifyContent: 'flex-start',
            height: '100%', }}>
            <View style={{ flexDirection: 'row', }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>SALDO DE {new Date().getMonth() + 1}/{new Date().getFullYear()}</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>Receitas e Despesas do Mês</Text>
                </View>
            </View>
            <View style={{flex: 1, padding: 3, flexDirection: 'column', marginLeft: -20, marginRight: -20}}>
                <ChartBars 
                data={[
                    {
                        recept: transactions.totalReceipt(),
                        expense: transactions.totalExpenditure()
                    }
                ]}
                />
            </View>
        </View>

    )
}
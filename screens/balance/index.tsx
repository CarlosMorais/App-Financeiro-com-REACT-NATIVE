import React, { useRef } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, Animated, Platform } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import { styles, COLORS, FONTS, SIZES, icons, images, categories } from '../../constants';

export default function Balance(props) {
    const monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{monName[new Date().getMonth()].toUpperCase()} DE {new Date().getFullYear()}</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>Receitas e Despesas do Mês</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 25, marginLeft: -20, marginRight: -20}}>
                
            </View>
        </View>

    )
}
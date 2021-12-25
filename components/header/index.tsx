import React, { useRef } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import { styles, COLORS, FONTS, SIZES, icons, images, categories } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faDollarSign, faChartPie, faChartBar, faList } from '@fortawesome/free-solid-svg-icons'



export default function Header() {
console.log("styles:",styles)
    const [pageActive, setPageActive] = React.useState(1)

    function renderButton(label, icon, indexPage = 1) {
        const width = (Dimensions.get('window').width - 120) / 4;
        const height = width;
    
        return (
            <TouchableOpacity
                onPress={() => { setPageActive(indexPage) }}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    paddingTop: 10,
                    margin: 5,
                    minWidth: width,
                    minHeight: height,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow,
                    borderBottomWidth: 3,
                    borderBottomColor: indexPage === pageActive ? COLORS.secondary : 'transparent',
                }}>
                <FontAwesomeIcon icon={icon} size={35} color={COLORS.secondary} />
                <View style={{ width: '100%', minHeight: 27, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 11, minWidth: 30, marginTop: 3, textAlign: 'center', width: '100%' }}>{label}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ paddingHorizontal: SIZES.padding, backgroundColor: COLORS.white }}>
            <View style={{
                flexDirection: 'row',
                marginTop: 0,
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                    <View style={{
                        backgroundColor: COLORS.lightGray,
                        height: 45,
                        width: 45,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={images.shake}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 40,
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Finance</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>Luiz Carlos</Text>
                    </View>
                </View>
                <View>
                    <FontAwesomeIcon icon={faBell} size={25} color={COLORS.primary} />
                </View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20, marginBottom: 0, }}>
                <Text style={{ ...FONTS.h4, color: COLORS.darkgray }}>Saldo do mês</Text>
                <Text style={{ color: COLORS.primary, ...FONTS.h1 }}>R$ 7.654,32</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25, marginBottom: 15, }}>
                {renderButton('Saldo', faDollarSign, 1)}
                {renderButton('Categorias', faChartPie, 2)}
                {renderButton('Histórico', faList, 4)}
                {renderButton('Fluxo De Caixa', faChartBar, 3)}
            </View>
        </View>
    )
}
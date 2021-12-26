import React, { useRef } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { styles, COLORS, FONTS, SIZES, icons, images, categories } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faDollarSign, faChartPie, faChartBar, faList } from '@fortawesome/free-solid-svg-icons'



export default function Header(props) {
    const { pageActive, setPageActive } = props;

    function renderButton(label, icon, page = 'balance') {
        const width = (Dimensions.get('window').width - 120) / 4;
        const height = width;

        return (
            <TouchableOpacity
                onPress={() => { setPageActive(page) }}
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
                    borderBottomColor: page === pageActive ? COLORS.secondary : 'transparent',
                }}>
                <FontAwesomeIcon icon={icon} size={35} color={COLORS.secondary} />
                <View style={{ width: '100%', minHeight: 27, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 11, minWidth: 30, marginTop: 3, textAlign: 'center', width: '100%' }}>{label}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (

        <View style={{
            paddingHorizontal: SIZES.padding,
            marginBottom: SIZES.borderRadiusBody + 15,
        }}>
            <View style={{
                    flexDirection: 'row',
                    marginTop: 0,
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                        <View style={{
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
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>My Finance</Text>
                            <Text style={{ ...FONTS.body3, color: COLORS.white }}>Luiz Carlos</Text>
                        </View>
                    </View>
                    <View>
                        <FontAwesomeIcon icon={faBell} size={25} color={COLORS.white} />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20, marginBottom: 0, }}>
                    <Text style={{ ...FONTS.h4, color: COLORS.white }}>Saldo do mês</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>R$ 7.654,32</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25, marginBottom: 15, }}>
                    {renderButton('Saldo', faDollarSign, 'balance')}
                    {renderButton('Categorias', faChartPie, 'categories')}
                    {renderButton('Histórico', faList, 'historic')}
                    {renderButton('Fluxo De Caixa', faChartBar, 'DFC')}
                </View>
        </View>
    )
}
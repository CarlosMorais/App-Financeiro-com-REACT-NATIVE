import React, { useRef } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faDollarSign, faChartPie, faChartBar, faList, faBars, faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons'
import util from "../../util";



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
            marginHorizontal: 0,
        }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 5,
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => { }}>
                        <FontAwesomeIcon icon={faBars} size={35} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold', marginLeft: 15 }}>Controle Financeiro</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end' }}>

                    <TouchableOpacity
                        onPress={() => { }}>
                        <FontAwesomeIcon icon={faPlus} size={22} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                borderRadius: 25,
                backgroundColor: 'rgba(255,255,255,0.2)',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 2,
                    paddingVertical: 3,
                    marginLeft: 7,
                }}>
                    <View style={{
                        height: 35,
                        width: 35,
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
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Luiz Carlos</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Bem-vindo!</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', }}>
                    <TouchableOpacity
                        style={{
                            marginRight: 5,
                            borderRadius: 10,
                            padding: 5,
                        }}
                        onPress={() => { }}>
                        <FontAwesomeIcon icon={faSortDown} size={30} color={COLORS.white}
                            style={{
                                marginTop: -12,
                                opacity: 0.8,
                            }
                            } />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 15, marginBottom: 0, }}>
                <Text style={{ ...FONTS.h4, color: COLORS.white }}>Saldo Do Mês</Text>
                <Text style={{ color: COLORS.white, ...FONTS.h1 }}>{util.numberFormat(transactions.totalReceipt() - transactions.totalExpenditure())}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 15, }}>
                {renderButton('Saldo', faDollarSign, 'balance')}
                {renderButton('Categorias', faChartPie, 'categories')}
                {renderButton('Histórico', faList, 'history')}
                {renderButton('Fluxo De Caixa', faChartBar, 'DFC')}
            </View>
        </View>
    )
}
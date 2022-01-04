import React from "react";
import { TitleBar, Bottom, HeaderContainer, BoxUserLeft, BoxUserRight, BoxUserRightButton, BoxUserImage, UserImage } from "./styles";
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { styles, COLORS, FONTS, SIZES, images } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDollarSign, faHome, faChartPie, faChartBar, faList, faBars, faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons'
import util from "../../util";



export default function Header(props) {
    const { pageActive, setPageActive, balanceMonth } = props;

    function renderButton(label, icon, page = 'balance', fongSize = 11) {
        const width = (Dimensions.get('window').width - 120) / 4;
        const height = width + 10;

        return (
            <Bottom
                onPress={() => { setPageActive(page) }}
                width={width}
                height={height}
                backgroundColor={COLORS.white}
                borderBottomColor={page === pageActive ? COLORS.secondary : 'transparent'}
                style={{ ...styles.shadow, }}>
                <FontAwesomeIcon icon={icon} size={30} color={COLORS.secondary} />
                <View style={{ width: '100%', minHeight: 27, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: fongSize, minWidth: 30, marginTop: 3, textAlign: 'center', width: '100%' }}>{label}</Text>
                </View>
            </Bottom>
        )
    }

    function renderTitleBar() {
        return (
            <>
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
            </>
        )
    }

    return (
        <View style={{ paddingHorizontal: SIZES.padding, marginBottom: SIZES.borderRadiusBody + 15, marginHorizontal: 0, }}>
            <TitleBar>
                {renderTitleBar()}
            </TitleBar>
            {pageActive == 'balance' && (
                <>
                    <HeaderContainer>
                        <BoxUserLeft>
                            <BoxUserImage>
                                <UserImage source={images.profile} />
                            </BoxUserImage>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Luiz Carlos</Text>
                                <Text style={{ ...FONTS.body4, color: COLORS.white }}>Bem-vindo!</Text>
                            </View>
                        </BoxUserLeft>
                        <BoxUserRight>
                            <BoxUserRightButton onPress={() => { }}>
                                <FontAwesomeIcon icon={faSortDown} size={30} color={COLORS.white} style={{ marginTop: -12, opacity: 0.8, }} />
                            </BoxUserRightButton>
                        </BoxUserRight>
                    </HeaderContainer>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 18, marginBottom: 5, }}>
                        <Text style={{ ...FONTS.h4, color: COLORS.white }}>Saldo Do Mês Atual</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h1 }}>{util.numberFormat(balanceMonth[0].receipt - balanceMonth[0].expense)}</Text>
                    </View>
                </>
            )}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: pageActive == 'balance' ? 25 : 15, }}>
                {renderButton(pageActive == 'balance' ? 'Saldo' : 'Início', pageActive == 'balance' ? faDollarSign : faHome, 'balance')}
                {renderButton('Categorias', faChartPie, 'categories')}
                {renderButton('Histórico', faList, 'history')}
                {renderButton('Fluxo \nDe Caixa', faChartBar, 'DFC', 10.5)}
            </View>
        </View>
    )
}
import React, { useRef, useState } from "react";
import { Container, Row, Column1, ColumnDescription, ColumnButton, RowPrice, BoxIcon, BoxData, DataMonth, DataDayWeek, DataDay } from "./styles";
import { Text, View, TouchableOpacity, Image, Animated, Platform } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faEye, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import util from "../../util";
import LightButton from '../../components/Buttons/LightButton';
import HeaderPage from "../../components/HeaderPage";

export default function History(props) {
    const [limit, setLimit] = useState(15);
    const [rowCount, setRowCount] = useState(0);
    const monName = new Array("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

    function renderList(data) {
        let list = data && data.length && data.map((item, index) => {
            const dataCategory = transactions.dataCategory(item.idCategory);
            if (index < limit + 1)
                return (
                    <TouchableOpacity key={`${index}`}>
                        <Row index={index} backgroundColor={(index + 1) % 2 == 0 ? '#fff' : '#c0c0c01d'}>
                            <Column1>
                                <BoxIcon>
                                    <FontAwesomeIcon icon={dataCategory.icon} size={21} color={'#020403'} style={{ opacity: 0.95, }} />
                                </BoxIcon>
                                <BoxData>
                                    <DataDay >{util.getDay(item.date)}</DataDay>
                                    <DataMonth>{util.monthInAcronyms(util.getMonth(item.date) - 1)}</DataMonth>
                                    {/* <DataDayWeek>Sábado</DataDayWeek> */}
                                </BoxData>
                            </Column1>
                            <ColumnDescription>
                                <Text style={{ color: '#020202', fontSize: 14 }}>{item.description}</Text>
                                <Text style={{ color: '#76767e', fontSize: 13, opacity: 0.75, marginTop: 5, }}>{dataCategory.name}</Text>
                            </ColumnDescription>
                            <ColumnButton>
                                <RowPrice style={{ color: '#020202', opacity: 0.8, }}>{util.numberFormat(item.total)}</RowPrice>
                                <TouchableOpacity
                                    onPress={() => { }}>
                                    <FontAwesomeIcon icon={faChevronRight} size={22} color={'#c9c9c9'} style={{ opacity: 0.9, marginLeft: 5, }} />
                                </TouchableOpacity>
                            </ColumnButton>
                        </Row>
                    </TouchableOpacity>
                );
        })

        return list;
    }
    return (
        <View style={{ flexDirection: 'column' }}>
            <HeaderPage
                title={`HISTÓRICO DE ${util.monthInAcronyms(new Date().getMonth())} ${new Date().getFullYear()}`}
                subtitle={`Histórico de receitas e despesas`}
            />
            <View style={{ flexDirection: 'column', marginTop: 25, marginLeft: -30, marginRight: -30 }}>
                {renderList(transactions.expensesList())}
            </View>
            <View style={{ marginLeft: -5, marginRight: -5, marginTop: 30, marginBottom: 70, }}>
                <LightButton icon={faEye} label={'VER MAIS'} onPress={() => { setLimit(limit + 15) }} />
            </View>
        </View >

    )
}
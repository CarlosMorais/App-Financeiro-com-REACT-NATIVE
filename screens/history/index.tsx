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

export default function History(props) {
    const [limit, setLimit] = useState(15);
    const [rowCount, setRowCount] = useState(0);
    const monName = new Array("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

    function renderList(data) {
        let thisRowCount = 0;
        let list = data && data.length && data.map((item, index) => {
            return item.expenses && item.expenses.length && item.expenses.map((ex, index2) => {
                thisRowCount++;

                if (thisRowCount < limit + 1)
                    return (
                        <TouchableOpacity key={`${index - index2}`}>
                            <Row backgroundColor={thisRowCount %2 == 0 ? '#fff' : '#f9f9f9c1'}>
                                <Column1>
                                    <BoxIcon>
                                        <FontAwesomeIcon icon={faCalendarAlt} size={21} color={'#333'} style={{ opacity: 0.75, }} />
                                    </BoxIcon>
                                    <BoxData>
                                        <DataDay>01</DataDay>
                                        <DataMonth>JAN</DataMonth>
                                        {/* <DataDayWeek>Sábado</DataDayWeek> */}
                                    </BoxData>
                                </Column1>
                                <ColumnDescription>
                                    <Text style={{ color: '#333', fontSize: 14}}>{ex.description}</Text>
                                    <Text style={{ color: '#333', fontSize: 13, opacity: 0.35, marginTop: 5, }}>{util.dateFormat(ex.date, 3)}</Text>
                                </ColumnDescription>
                                <ColumnButton>
                                    <RowPrice style={{ color: '#333', }}>{util.numberFormat(ex.total)}</RowPrice>
                                    <TouchableOpacity
                                        onPress={() => { }}>
                                        <FontAwesomeIcon icon={faChevronRight} size={22} color={'#c9c9c9'} style={{ opacity: 0.9, marginLeft: 5, }} />
                                    </TouchableOpacity>
                                </ColumnButton>
                            </Row>
                        </TouchableOpacity>
                    );
            })
        })

        // setRowCount(thisRowCount);
        return list;
    }
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>HISTÓRICO DE {new Date().getMonth() + 1}/{new Date().getFullYear()}</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>Histórico de receitas e despesas</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 25, marginLeft: -20, marginRight: -20 }}>
                {renderList(transactions.expenses)}
            </View>
            <View style={{
                marginLeft: -5,
                marginRight: -5,
                marginTop: 30,
                marginBottom: 70,
            }}>
                <LightButton icon={faEye} label={'VER MAIS'} onPress={() => { setLimit(limit + 15) }} />
            </View>
        </View >

    )
}
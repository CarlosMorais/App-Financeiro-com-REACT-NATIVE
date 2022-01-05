import React, { useEffect, useState } from "react";
import { Container, } from "./styles";
import { Text, View, } from 'react-native';
import { transactions } from '../../constants';
import ChartBars from "../../components/chartBars";
import HeaderPage from "../../components/HeaderPage";
 
export default function Balance(props) {
    const { balanceMonth, setBalanceMonth } = props;
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setBalanceMonth(transactions.balanceMonth())
    }, [month])

    return (
        <Container>
            <HeaderPage
                title={'SALDO DO MÊS'}
                subtitle={'Resultado das Receitas e Despesas'}
            />
            <View style={{ flex: 1, padding: 3, flexDirection: 'column', marginLeft: -20, marginRight: -20 }}>
                <ChartBars
                    data={balanceMonth}
                    handleNext={() => {
                        if (`${year}${month}` < `${new Date().getFullYear()}${new Date().getMonth()}`) {
                            setYear(month == 11 ? year + 1 : year);
                            setMonth(month >= 11 ? 0 : month + 1);
                        }
                    }}
                    handlePrevious={() => {
                        setYear(month == 0 ? year - 1 : year);
                        setMonth(month == 0 ? 11 : month - 1)
                    }}
                />
            </View>
        </Container>

    )
}
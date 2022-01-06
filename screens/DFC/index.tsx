import React, { useState } from "react";
import { Container, BoxChart } from "./styles";
import { transactions } from '../../constants';
import ChartBars from "../../components/chartBars";
import HeaderPage from "../../components/HeaderPage";

export default function DFC(props) {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <Container>
            <HeaderPage
                title={`DFC - FLUXO DE CAIXA`}
                subtitle={`Relatório de Demonstrativo de Fluxo de Caixa`}
            />
            <BoxChart>
                <ChartBars
                    data={transactions.DFC(month, year)}
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
            </BoxChart>
        </Container>
    )
}
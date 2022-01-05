import React, { useRef, useEffect } from "react";
import { View, Animated, Platform } from 'react-native';
import util from '../../util';
import { COLORS, SIZES, icons, transactions } from '../../constants';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import HeaderPage from "../../components/HeaderPage";
import {renderButtons , renderCategoryList, renderIncomingExpenses, renderExpenseSummary, renderChart } from "./renders";

export default function Categories(props) {
    const transactionListHeightAnimationValue = useRef(new Animated.Value(70)).current;
    const [categoryList, setCategoryList] = React.useState(transactions.categories)
    const [transactionList, setTransactionList] = React.useState(transactions.expensesList())
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)

    useEffect(() => {
        selectedCategory == null && setSelectCategoryByName(null);
    }, []);

    useEffect(() => {
    }, [selectedCategory]);

    

    function processCategoryDataToDisplay() {
        // Filter expenses with "Confirmed" status
        let chartData = categoryList.map((item) => {
            let items = transactionList.filter(a => a.idCategory !== item.id)
            var total = transactions.totalExpensesTheCategory(item.id)
            // var total = items.reduce((a, b) => a + (b.total || 0), 0)

            return {
                name: item.name,
                y: total,
                expenseCount: items.length,
                color: item.color,
                id: item.id
            }
        })

        // filter out transactionList with no data/expenses
        let filterChartData = chartData.filter(a => a.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        // Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: Number(item.y),
                expenseCount: item.expenseCount,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })

        return finalChartData
    }

    function setSelectCategoryByName(id) {
        setSelectedCategory(id == null ? categoryList[0] : transactions.dataCategory(id))
    }

    return (
        <View style={{ flexDirection: 'column' }}>
            <HeaderPage
                title={`CATEGORIAS EM ${util.monthInAcronyms(new Date().getMonth())} ${new Date().getFullYear()}`}
                subtitle={`${transactionList.length} Total`}
                buttons={renderButtons(viewMode, COLORS, setViewMode, icons, SIZES)} />
            <View style={{ flexDirection: 'column', marginTop: 25, marginLeft: -20, marginRight: -20 }}>
                {viewMode == 'list' &&
                    <View>
                        {renderCategoryList(setSelectedCategory, transactionListHeightAnimationValue, categoryList, showMoreToggle, setShowMoreToggle) }
                        {renderIncomingExpenses(transactionList, selectedCategory, faExclamation) }
                    </View>}
                {viewMode == 'chart' &&
                    <View>
                        {renderChart(processCategoryDataToDisplay, Platform, selectedCategory, setSelectCategoryByName)}
                        {renderExpenseSummary(processCategoryDataToDisplay, selectedCategory, setSelectCategoryByName)}
                    </View>}
            </View>
        </View>
    )
}
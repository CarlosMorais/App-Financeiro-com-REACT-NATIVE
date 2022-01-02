import React, { useRef, useEffect } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, ScrollView, Animated, Platform } from 'react-native';
import { VictoryPie } from 'victory-native';
import util from '../../util';
import { Svg } from 'react-native-svg';
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

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

    function renderTransactionList() {

        const renderItem = (item, index) => (
            <TouchableOpacity
                key={'renderTransactionList' + index}
                onPress={() => setSelectedCategory(item)}
                style={{
                    flexDirection: 'row',
                    margin: '1%',
                    marginBottom: 7,
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    width: '48%',
                    maxHeight: 50,
                    ...styles.shadow
                }}>
                <FontAwesomeIcon icon={item.icon} size={21} color={item.color} style={{ opacity: 0.75, }} />
                <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{
                    height: transactionListHeightAnimationValue,
                    flexDirection: 'row', flexWrap: 'wrap',
                }}>
                    <ScrollView style={{ width: '100%', flexDirection: 'column',  }} horizontal={false}>
                        <View style={{ minWidth: '100%', flexDirection: 'row', flexWrap: 'wrap',}}>
                            {categoryList && categoryList.length && categoryList.map((item, index) => {
                                return renderItem(item, index)
                            })}
                        </View>
                    </ScrollView>
                </Animated.View>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.base,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 45,
                        backgroundColor: '#fff',
                        height: 50,
                        marginHorizontal: -5,
                        marginBottom: -0,
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(transactionListHeightAnimationValue, {
                                toValue: 70,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(transactionListHeightAnimationValue, {
                                toValue: 130,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        }

                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "MENOS" : "MAIS"}</Text>
                    <Image
                        source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        style={{ marginLeft: 5, width: 15, height: 15, alignSelf: 'center' }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderIncomingExpensesTitle() {
        return (
            <View style={{ height: 80, backgroundColor: COLORS.lightGray2, padding: SIZES.padding }}>
                {/* Title */}
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>RECEITAS E DESPESAS</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
            </View>
        )
    }

    function renderIncomingExpenses() {
        let allExpenses = transactionList && transactionList.length ? transactionList : []
        let incomingExpenses = transactionList.filter(a => a.idCategory === selectedCategory.id)

        const renderItem = (item, index) => (
            <View
                key={'renderIncomingExpenses' + index + item.id}
                style={{
                    width: 300,
                    marginRight: SIZES.padding,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginVertical: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow,
                    paddingBottom: 0,
                }}>
                {/* Title */}
                <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
                    <View
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: SIZES.base
                        }}>
                        <FontAwesomeIcon icon={selectedCategory.icon || faExclamation} size={21} color={selectedCategory.color} style={{ opacity: 0.95, }} />
                    </View>

                    <Text style={{ ...FONTS.h3, color: selectedCategory.color, }}>{selectedCategory.name}</Text>
                </View>

                {/* Expense Description */}
                <View style={{ paddingHorizontal: SIZES.padding, marginTop: -15, }}>
                    {/* Title and description */}
                    <Text style={{ ...FONTS.h2, }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>
                        {item.description}
                    </Text>

                    {/* Location */}
                    <Text style={{ marginTop: 15, ...FONTS.h4, }}>Location</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={icons.pin}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray,
                                marginRight: 5
                            }}
                        />
                        <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}>{item.location}</Text>
                    </View>
                </View>

                {/* Price */}
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomStartRadius: SIZES.radius,
                        borderBottomEndRadius: SIZES.radius,
                        backgroundColor: selectedCategory.color,
                        padding: 12,
                        marginTop: 10,
                        maxHeight: 50,
                        marginBottom: 0,
                    }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body3, }}>{util.numberFormat(item.total)}</Text>
                </View>
            </View>
        )

        return (
            <View>
                {renderIncomingExpensesTitle()}

                <ScrollView style={{ width: '100%', flexDirection: 'row' }} horizontal={true}>
                    <View style={{ minWidth: '105%', flexDirection: 'row' }}>
                        {incomingExpenses && incomingExpenses.length && incomingExpenses.map((item, index) => {
                            return renderItem(item, index)
                        })}
                    </View>
                </ScrollView>

                {
                    incomingExpenses.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
                    </View>
                }

            </View>

        )
    }

    function renderExpenseSummary() {
        let data = processCategoryDataToDisplay()

        const renderItem = (item, index) => (
            <TouchableOpacity
                key={'renderExpenseSummary' + index + item.id}
                style={{
                    flexDirection: 'row',
                    height: 40,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white
                }}
                onPress={() => {
                    let categoryID = item.id
                    setSelectCategoryByName(categoryID)
                }}
            >
                {/* Name/Category */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : item.color,
                            borderRadius: 5
                        }}
                    />

                    <Text style={{ marginLeft: SIZES.base, color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.name}</Text>
                </View>

                {/* Expenses */}
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{util.numberFormat(transactions.totalExpensesTheCategory(item.id))} - {item.label}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ padding: SIZES.padding }}>
                {data && data.length && data.map((item, index) => {
                    return renderItem(item, index)
                })}
            </View>

        )
    }

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

    function renderChart() {

        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.y || 0), 0)

        function selectedCategoryTotal(selectedCategory) {
            return selectedCategory && selectedCategory.id ? transactions.totalExpensesTheCategory(selectedCategory.id) : 0;
        }

        if (Platform.OS == 'ios') {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <VictoryPie

                        data={chartData}
                        labels={(datum) => `${util.dateFormat(datum.y)}`}
                        radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                        innerRadius={90}
                        labelRadius={({ innerRadius }) => ((SIZES.width * 0.4) + innerRadius) / 2.5}
                        style={{
                            labels: { fill: "white", },
                            parent: {
                                ...styles.shadow
                            },
                        }}
                        width={SIZES.width * 0.8}
                        height={SIZES.width * 0.8}
                        colorScale={colorScales}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPress: () => {
                                    return [{
                                        target: "labels",
                                        mutation: (props) => {
                                            let categoryId = chartData[props.index].id
                                            setSelectCategoryByName(categoryId)
                                        }
                                    }]
                                }
                            }
                        }]}

                    />
                    <View style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h2, textAlign: 'center' }}>{util.numberFormat(selectedCategoryTotal(selectedCategory))}</Text>
                        <Text style={{ ...FONTS.body3, textAlign: 'center' }}>{selectedCategory && selectedCategory.name}</Text>
                    </View>
                </View>

            )
        }
        else {
            // Android workaround by wrapping VictoryPie with SVG
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Svg width={SIZES.width} height={SIZES.width} style={{ width: "100%", height: "auto" }}>

                        <VictoryPie
                            standalone={false} // Android workaround
                            data={chartData}
                            labels={(datum) => `${util.numberFormat(datum.y)}`}
                            radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                            innerRadius={90}
                            labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                            style={{
                                labels: { fill: "white" },
                                parent: {
                                    ...styles.shadow
                                },
                            }}
                            width={SIZES.width}
                            height={SIZES.width}
                            colorScale={colorScales}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onPress: () => {
                                        return [{
                                            target: "labels",
                                            mutation: (props) => {
                                                let categoryId = chartData[props.index].id
                                                setSelectCategoryByName(categoryId)
                                            }
                                        }]
                                    }
                                }
                            }]}

                        />
                    </Svg>
                    <View style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h2, textAlign: 'center' }}>{util.numberFormat(selectedCategoryTotal(selectedCategory))}</Text>
                        <Text style={{ ...FONTS.body3, textAlign: 'center' }}>{selectedCategory && selectedCategory.name}</Text>
                    </View>
                </View>
            )
        }

    }

    function renderContent(viewMode) {
        switch (viewMode) {
            case 'list':
                return (
                    <View>
                        {renderTransactionList()}
                        {renderIncomingExpenses()}
                    </View>
                )
            case 'chart':
                return (
                    <View>
                        {renderChart()}
                        {renderExpenseSummary()}
                    </View>
                )
            default:
                return <></>;
        }
    }


    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIAS EM {new Date().getMonth() + 1}/{new Date().getFullYear()}</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{transactionList.length} Total</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("chart")}
                    >
                        <Image
                            source={icons.chart}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "list" ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            marginLeft: SIZES.base
                        }}
                        onPress={() => setViewMode("list")}>
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 25, marginLeft: -20, marginRight: -20 }}>
                {renderContent(viewMode)}
            </View>
        </View>

    )
}
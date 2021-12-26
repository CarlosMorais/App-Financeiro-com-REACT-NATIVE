import React, { useRef, useEffect } from "react";
import { Container } from "./styles";
import { Text, View, TouchableOpacity, Image, ScrollView, Animated, Platform } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import { styles, COLORS, FONTS, SIZES, icons, images, categories } from '../../constants';

export default function Categories(props) {
    const categoryListHeightAnimationValue = useRef(new Animated.Value(69)).current;
    const [categoryList, setCategoryList] = React.useState(categories.categories)
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)

    useEffect(() => {
        selectedCategory == null && setSelectCategoryByName(null);
    }, []);

    function renderCategoryList() {

        const renderItem = ( item, index ) => (
            <TouchableOpacity
                key={'renderCategoryList' + index}
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
                    ...styles.shadow
                }}
            >
                <Image
                    source={item.icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.color
                    }}
                />
                <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue,
                flexDirection: 'row', flexWrap: 'wrap',}}>
                    {categoryList && categoryList.length && categoryList.map((item, index)=>{
                        return renderItem(item, index)
                    })}
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
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 69,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 125,
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
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpenses = allExpenses.filter(a => a.status == "P")

        const renderItem = ( item, index ) => (
            <View 
            key={'renderIncomingExpenses' + index}
            style={{
                width: 300,
                marginRight: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...styles.shadow
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
                        }}
                    >
                        <Image
                            source={selectedCategory.icon}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: selectedCategory.color
                            }}
                        />
                    </View>

                    <Text style={{ ...FONTS.h3, color: selectedCategory.color, }}>{selectedCategory.name}</Text>
                </View>

                {/* Expense Description */}
                <View style={{ paddingHorizontal: SIZES.padding }}>
                    {/* Title and description */}
                    <Text style={{ ...FONTS.h2, }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>
                        {item.description}
                    </Text>

                    {/* Location */}
                    <Text style={{ marginTop: SIZES.padding, ...FONTS.h4, }}>Location</Text>
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
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomStartRadius: SIZES.radius,
                        borderBottomEndRadius: SIZES.radius,
                        backgroundColor: selectedCategory.color,
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>CONFIRM {item.total.toFixed(2)} USD</Text>
                </View>
            </View>
        )

        return (
            <View>
                {renderIncomingExpensesTitle()}

                <ScrollView style={{width: '100%', flexDirection: 'row'}} horizontal={true}>
                    <View style={{minWidth: '105%', flexDirection: 'row'}}>
                        {incomingExpenses && incomingExpenses.length && incomingExpenses.map((item, index)=>{
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

        const renderItem = ( item , index) => (
            <TouchableOpacity
                key={'renderExpenseSummary' + index}
                style={{
                    flexDirection: 'row',
                    height: 40,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white
                }}
                onPress={() => {
                    let categoryName = item.name
                    setSelectCategoryByName(categoryName)
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
                    <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.y} USD - {item.label}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ padding: SIZES.padding }}>
                {data && data.length && data.map((item, index)=>{
                    return renderItem(item, index)
                })}
            </View>

        )
    }


    function processCategoryDataToDisplay() {
        // Filter expenses with "Confirmed" status
        let chartData = categoryList.map((item) => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

            return {
                name: item.name,
                y: total,
                expenseCount: confirmExpenses.length,
                color: item.color,
                id: item.id
            }
        })

        // filter out categoryList with no data/expenses
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

    function setSelectCategoryByName(name) {
        let category = name === null ? categoryList : categoryList.filter(a => a.name == name)
        setSelectedCategory(category[0])
    }

    function renderChart() {

        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

        if (Platform.OS == 'ios') {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <VictoryPie

                        data={chartData}
                        labels={(datum) => `${datum.y}`}
                        radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                        innerRadius={70}
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
                                            let categoryName = chartData[props.index].name
                                            setSelectCategoryByName(categoryName)
                                        }
                                    }]
                                }
                            }
                        }]}

                    />

                    <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                        <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                        <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Expenses</Text>
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
                            labels={(datum) => `${datum.y}`}
                            radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                            innerRadius={70}
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
                                                let categoryName = chartData[props.index].name
                                                setSelectCategoryByName(categoryName)
                                            }
                                        }]
                                    }
                                }
                            }]}

                        />
                    </Svg>
                    <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                        <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                        <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Expenses</Text>
                    </View>
                </View>
            )
        }

    }

    function renderContent(viewMode){
        switch(viewMode){
            case 'list':
                return (
                    <View>
                        {renderCategoryList()}
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
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{categoryList.length} Total</Text>
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
            <View style={{ flexDirection: 'column', marginTop: 25, marginLeft: -20, marginRight: -20}}>
                {renderContent(viewMode)}
            </View>
        </View>

    )
}
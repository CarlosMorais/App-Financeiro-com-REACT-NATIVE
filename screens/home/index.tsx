import React, { useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform,
    Dimensions,
} from 'react-native';
import Header from "../../components/header";
import BodyApp from "../../components/bodyApp";
import { styles, COLORS, FONTS, SIZES, icons, images, categories } from '../../constants';

const Home = () => {
    // dummy data
    const [pageActive, setPageActive] = React.useState('categories')

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#40c1f5' }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#40c1f5' }}>
                <ScrollView contentContainerStyle={{}}>
                    {/* Nav bar section */}
                    {/* <NavBar/> */}

                    {/* Header section */}
                    <Header 
                    pageActive={pageActive}
                    setPageActive={setPageActive}
                    />

                    {/* BodyApp Section */}
                    <BodyApp 
                    pageActive={pageActive}
                    />

                </ScrollView>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.white }} />
        </>

    )
}

export default Home;

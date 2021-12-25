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
   

    return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                    {/* Nav bar section */}
                    {/* <NavBar/> */}

                    
                    {/* Header section */}
                    <Header/>

                    {/* BodyApp Section */}
                    <BodyApp/>
                    
                </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

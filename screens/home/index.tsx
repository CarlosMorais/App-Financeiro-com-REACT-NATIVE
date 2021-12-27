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
    Animated,
    Platform,
    Dimensions,
} from 'react-native';
import Header from "../../components/header";
import BodyApp from "../../components/bodyApp";
import { styles, COLORS, FONTS, SIZES, icons, images, transactions } from '../../constants';

const Home = () => {
    // dummy data
    const [pageActive, setPageActive] = React.useState('balance')

    return (
        <ImageBackground source={images.bgHeader} resizeMode="cover" style={styles.imageBgHeader}>
            <ScrollView contentContainerStyle={{ 
                // minHeight: SIZES.height * 1
                }}>
                <SafeAreaView style={{ flex: 0 }} />
                <SafeAreaView style={{ 
                    flex: 1, 
                    minHeight: '100%',
                    }}>


                    <View style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100%',
                        }}>
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
                    </View>

                </SafeAreaView>
            </ScrollView>
            {/* <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.white }} /> */}
        </ImageBackground>
    )
}

export default Home;

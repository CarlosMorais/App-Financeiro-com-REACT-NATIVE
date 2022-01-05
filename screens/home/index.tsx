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
    const [pageActive, setPageActive] = React.useState('balance');
    const [balanceMonth, setBalanceMonth] = React.useState(transactions.balanceMonth());

    return (

        <ImageBackground source={images.bgHeader} resizeMode="cover" style={styles.imageBgHeader}>
            <SafeAreaView style={{ flex: 0, }} />
            <ScrollView contentContainerStyle={{
                // flex: 1,
                minHeight: (SIZES.height * 1) + (Platform.OS == 'ios' ? 0 :  + 30),
                paddingTop: Platform.OS == 'ios' ? 0 : 35,
            }}>
                {/* <SafeAreaView style={{ flex: 0 }} /> */}
                <View style={{
                    flex: 1,
                    minHeight: '100%',
                }}>


                    <View style={{
                        flex: 1,
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
                            balanceMonth={balanceMonth}
                        />

                        {/* BodyApp Section */}
                        <BodyApp
                            pageActive={pageActive}
                            balanceMonth={balanceMonth}
                            setBalanceMonth={setBalanceMonth}
                        />
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Home;

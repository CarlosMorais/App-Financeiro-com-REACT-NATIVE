import React from "react";
import { SafeAreaView, ScrollView, ImageBackground, Platform, } from 'react-native';
import Header from "../../components/header";
import BodyApp from "../../components/bodyApp";
import { styles, SIZES, images, transactions } from '../../constants';
import { ContentPage, ContentPageInner } from './styles';

const Home = () => {
    const [pageActive, setPageActive] = React.useState('balance');
    const [balanceMonth, setBalanceMonth] = React.useState(transactions.balanceMonth());

    return (
        <ImageBackground source={images.bgHeader} resizeMode="cover" style={styles.imageBgHeader}>
            <SafeAreaView style={{ flex: 0, }} />
            <ScrollView contentContainerStyle={{
                minHeight: (SIZES.height * 1) + (Platform.OS == 'ios' ? 0 : + 30),
                paddingTop: Platform.OS == 'ios' ? 0 : 35,
            }}>
                <ContentPage>
                    <ContentPageInner>
                        <Header
                            pageActive={pageActive}
                            setPageActive={setPageActive}
                            balanceMonth={balanceMonth}
                        />
                        <BodyApp
                            pageActive={pageActive}
                            balanceMonth={balanceMonth}
                            setBalanceMonth={setBalanceMonth}
                        />
                    </ContentPageInner>
                </ContentPage>
            </ScrollView>
        </ImageBackground>
    )
}

export default Home;

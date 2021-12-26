import React, { useRef } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SIZES, theme } from '../../constants';
import Categories from "../../screens/categories";
import Balance from "../../screens/balance";
import DFC from "../../screens/DFC";
import History from "../../screens/history";

export default function BodyApp(props) {
    const { pageActive } = props;

    function renderBody(pageActive) {
        switch (pageActive) {
            case 'balance':
                return <Balance/>;
            case 'categories':
                return <Categories />;
            case 'DFC':
                return <DFC />;
            case 'history':
                return <History />;
            default:
                return null;
        }
    }

    return (
        <View style={{
            marginTop: (SIZES.borderRadiusBody + 5) * -1 ,
            borderTopLeftRadius: SIZES.borderRadiusBody,
            borderTopRightRadius: SIZES.borderRadiusBody,
            backgroundColor: '#fff',
            minHeight: '100%',
            flexDirection: 'column', 
            padding: SIZES.padding, 
        }}>
            {renderBody(pageActive)}
        </View>
    )
}
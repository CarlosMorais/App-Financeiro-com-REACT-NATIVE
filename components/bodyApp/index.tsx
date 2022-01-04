import React from "react";
import { View } from 'react-native';
import { SIZES } from '../../constants';
import Categories from "../../screens/categories";
import Balance from "../../screens/balance";
import DFC from "../../screens/DFC";
import History from "../../screens/history";

export default function BodyApp(props) {
    const { pageActive, balanceMonth } = props;

    function renderBody(pageActive, balanceMonth) {
        switch (pageActive) {
            case 'balance':
                return <Balance balanceMonth={balanceMonth} />;
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
            flex: 1,
            paddingHorizontal: SIZES.padding,
            marginBottom: 0,
            backgroundColor: '#fff',
            marginTop: (SIZES.borderRadiusBody + 20) * -1,
            borderTopLeftRadius: SIZES.borderRadiusBody,
            borderTopRightRadius: SIZES.borderRadiusBody,
            flexDirection: 'column',
            width: '100%',
            display: "flex",
            padding: 20,
        }}>
            {renderBody(pageActive, balanceMonth)}
        </View>
    )
}
import React, { useRef } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import Categories from "../../screens/categories";

export default function BodyApp(props) {
    const { pageActive } = props;

    function renderBody(pageActive) {
        switch (pageActive) {
            case 'balance':
                return null;
            case 'categories':
                return <Categories />;
            default:
                return null;
        }
    }

    return (
        <View style={{
            marginTop: 10,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#fff'
        }}>
            {renderBody(pageActive)}
        </View>
    )
}
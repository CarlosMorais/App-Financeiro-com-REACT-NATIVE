import React from "react";
import { View, Text } from "react-native";
import { Container, BoxHeader } from "./styles";
import { COLORS, FONTS } from "../../constants"

export default function HeaderPage(props) {
    const { title, subtitle, buttons = <></> } = props;
    return (
        <Container style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <BoxHeader>
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{title}</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{subtitle}</Text>
                </View>
            </BoxHeader>
            {buttons}
        </Container>
    )
}
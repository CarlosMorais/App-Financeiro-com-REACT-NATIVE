import React, { useRef } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import { styles, COLORS, FONTS, SIZES, icons, images, categories } from '../../constants';
import { faBell, faDollarSign, faChartPie, faChartBar, faList } from '@fortawesome/free-solid-svg-icons'



export default function renderNavBar() {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white,
            }}
        >
            <TouchableOpacity
                style={{ justifyContent: 'center', width: 50, }}
                onPress={() => console.log('Go Back')}
            >
                <Image
                    source={icons.back_arrow}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                onPress={() => console.log('More')}
            >
                <Image
                    source={icons.more}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}
import { StyleSheet } from "react-native";
import { UtilityFunctions } from "../UtilityFunctions/UtilityFunctions";
import { ThemeLightColors } from "./Colors";


var textStyleCommon = {
    includeFontPadding: false,
    color: ThemeLightColors.ColorBlack,
}


var TextStyle = StyleSheet.create({
    h1: {
        ...textStyleCommon,
        fontSize: UtilityFunctions.getFontSizeWithScale(24),
        lineHeight: UtilityFunctions.getFontSizeWithScale(30),
        fontWeight: '600'
    },
    h2: {
        ...textStyleCommon,
        fontSize: UtilityFunctions.getFontSizeWithScale(22),
        lineHeight: UtilityFunctions.getFontSizeWithScale(28),
        fontWeight: '500',
    },
    h3: {
        ...textStyleCommon,
        fontSize: UtilityFunctions.getFontSizeWithScale(20),
        lineHeight: UtilityFunctions.getFontSizeWithScale(25),
        fontWeight: '500',
    },
    h4: {
        ...textStyleCommon,
        fontSize: UtilityFunctions.getFontSizeWithScale(18),
        lineHeight: UtilityFunctions.getFontSizeWithScale(23),
        fontWeight: '400',
    },
    h5: {
        ...textStyleCommon,
        fontSize: UtilityFunctions.getFontSizeWithScale(16),
        lineHeight: UtilityFunctions.getFontSizeWithScale(20),
        fontWeight: '400',
    },
    h6: {
        ...textStyleCommon,
        fontSize: UtilityFunctions.getFontSizeWithScale(14),
        lineHeight: UtilityFunctions.getFontSizeWithScale(18),
        fontWeight: '300',
    },

    textPrimary: {
        ...textStyleCommon,
        fontSize: UtilityFunctions.getFontSizeWithScale(12),
        lineHeight: UtilityFunctions.getFontSizeWithScale(16),
    },
    textSecondary: {
        ...textStyleCommon,
        fontSize: UtilityFunctions.getFontSizeWithScale(10),
        lineHeight: UtilityFunctions.getFontSizeWithScale(16),
    }
});


export { TextStyle }
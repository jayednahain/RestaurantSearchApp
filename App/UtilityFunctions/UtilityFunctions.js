import { PixelRatio } from "react-native";

const UtilityFunctions = {
    getFontSizeWithScale(fontSize){
        var fontScale = PixelRatio.getFontScale();
        var updatedFontSize = fontSize * fontScale;
        // var updatedFontSize = fontSize;
        return updatedFontSize;
    }
    ,

    getUpperCaseFirstLetter(stringParam) {
        return stringParam[0].toUpperCase() + stringParam.substring(1, stringParam.length)
    }
    ,
    getSentenceWithUpperCaseFirstLetter(stringParam){
        let value = stringParam.split(" ");
        let temValue = []
        for (let i = 0; i < value.length; i++) {
            let element = this.getUpperCaseFirstLetter(value[i])
            temValue.push(element)
        }

        return temValue.join(" ")
    }
}


export { UtilityFunctions} ;
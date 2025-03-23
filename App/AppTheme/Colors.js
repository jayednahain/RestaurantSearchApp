
// var ColorPrimary = {

//     ColorPrimaryDark:  '#1B34AA',
//     ColorPrimary: '#2342DA',
//     ColorPrimary200:'#9BABF8',
//     ColorPrimary700:   '#1B34AA',
//     ColorPrimary500:   '#2649F0',
// }

// var ThemeLightColors = {

//     ColorWhite:     '#FFFFFF',
//     ColorBlack: '#000',
    
//     ColorGrayDark:  '#101828',
//     ColorGrayLight: '#667085',
//     ColorGray300:   '#D0D5DD',

    
//     ...ColorPrimary,

//     ColorBlueLight: '#9BABF8',
//     ColorBlue50:    '#E9EDFE',
//     ColorRedLight:  '#F04438',
    
//     ColorGray50: '#F9FAFB',
//     ColorGray300: '#D0D5DD',
//     ColorGray700:   '#344054',
//     ColorGray500: '#667085'
    

// }

// export {
//     ThemeLightColors
// }


const CommonTheme = {
    backgroundColor: '',
    borderColor: '',
    navbarColor: '',
    textColor: '',
    buttonColor: '',  // New button color property

    primaryColor: '#2342DA',
    primaryDark: '#1B34AA',
    primaryLight: '#9BABF8',

    errorColor: '#F04438',
};

const LightTheme = {
    ...CommonTheme,
    backgroundColor: '#FFFFFF',
    borderColor: '#D0D5DD',
    navbarColor: '#2342DA',
    textColor: '#101828',
    buttonColor: '#2649F0', // Blue button for light mode
};

const DarkTheme = {
    ...CommonTheme,
    backgroundColor: '#101828',
    borderColor: '#344054',
    navbarColor: '#1B34AA',
    textColor: '#FFFFFF',
    buttonColor: '#9BABF8', // Light blue button for dark mode
};




export { LightTheme, DarkTheme };
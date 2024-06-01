const blockColors = {
    motion: {
        primary: '#FF0000',
        secondary: '#880808',
        tertiary: '#FF0000',
        quaternary: '#880808'
    },
    looks: {
        primary: '#FFA500',
        secondary: '#CC5500',
        tertiary: '#FFA500',
        quaternary: '#CC5500'
    },
    sounds: {
        primary: '#FDDA0D',
        secondary: '#DAA520',
        tertiary: '#FDDA0D',
        quaternary: '#DAA520'
    },
    control: {
        primary: '#228B22',
        secondary: '#4F7942',
        tertiary: '#4F7942',
        quaternary: '#228B22'
    },
    event: {
        primary: '#0047AB',
        secondary: '#0096FF',
        tertiary: '#0047AB',
        quaternary: '#0047AB'
    },
    sensing: {
        primary: '#BF40BF',
        secondary: '#9F2B68',
        tertiary: '#BF40BF',
        quaternary: '#BF40BF'
    },
    pen: {
        primary: '#0fBD8C',
        secondary: '#0DA57A',
        tertiary: '#0B8E69',
        quaternary: '#0B8E69'
    },
    operators: {
        primary: '#89CFF0',
        secondary: '#7393B3',
        tertiary: '#89CFF0',
        quaternary: '#89CFF0'
    },
    data: {
        primary: '#FF69B4',
        secondary: '#FFB6C1',
        tertiary: '#FF69B4',
        quaternary: '#FF69B4'
    },
    // This is not a new category, but rather for differentiation
    // between lists and scalar variables.
    data_lists: {
        primary: '#FF661A',
        secondary: '#FF5500',
        tertiary: '#E64D00',
        quaternary: '#E64D00'
    },
    more: {
        primary: '#FF6680',
        secondary: '#FF4D6A',
        tertiary: '#FF3355',
        quaternary: '#FF3355'
    },
    addons: {
        primary: '#29beb8',
        secondary: '#3aa8a4',
        tertiary: '#3aa8a4',
        quaternary: '#3aa8a4'
    },
    text: '#FFFFFF',
    workspace: '#F9F9F9',
    toolboxHover: '#4C97FF',
    toolboxSelected: '#E9EEF2',
    toolboxText: '#575E75',
    toolbox: '#FFFFFF',
    blackText: '#575E75',
    flyout: '#F9F9F9',
    scrollbar: '#CECDCE',
    scrollbarHover: '#CECDCE',
    textField: '#FFFFFF',
    textFieldText: '#575E75',
    insertionMarker: '#000000',
    insertionMarkerOpacity: 0.2,
    dragShadowOpacity: 0.6,
    stackGlow: '#FFF200',
    stackGlowSize: 4,
    stackGlowOpacity: 1,
    replacementGlow: '#FFFFFF',
    replacementGlowSize: 2,
    replacementGlowOpacity: 1,
    colourPickerStroke: '#FFFFFF',
    // CSS colours: support RGBA
    fieldShadow: 'rgba(255, 255, 255, 0.3)',
    dropDownShadow: 'rgba(0, 0, 0, .3)',
    numPadBackground: '#547AB2',
    numPadBorder: '#435F91',
    numPadActiveBackground: '#435F91',
    numPadText: 'white', // Do not use hex here, it cannot be inlined with data-uri SVG
    valueReportBackground: '#FFFFFF',
    valueReportBorder: '#AAAAAA',
    valueReportForeground: '#000000',
    menuHover: 'rgba(0, 0, 0, 0.2)',
    contextMenuBackground: '#ffffff',
    contextMenuBorder: '#cccccc',
    contextMenuForeground: '#000000',
    contextMenuActiveBackground: '#d6e9f8',
    contextMenuDisabledForeground: '#cccccc',
    flyoutLabelColor: '#575E75',
    checkboxInactiveBackground: '#ffffff',
    checkboxInactiveBorder: '#c8c8c8',
    checkboxActiveBackground: '#4C97FF',
    checkboxActiveBorder: '#3373CC',
    checkboxCheck: '#ffffff',
    buttonBorder: '#c6c6c6',
    buttonActiveBackground: '#ffffff',
    buttonForeground: '#575E75',
    zoomIconFilter: 'none',
    gridColor: '#dddddd'
};

const customExtensionColors = {
    primary: primary => {
        const hsv = hex2hsv(primary);
        hsv[2] = Math.max(hsv[2] - 70, 20);
        return hsv2hex(hsv);
    },
    secondary: () => '#4C4C4C',
    tertiary: primary => primary,
    quaternary: primary => primary,
    categoryIconBackground: primary => customExtensionColors.primary(primary),
    categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};

const extensions = {};

export {
    blockColors,
    customExtensionColors,
    extensions
};

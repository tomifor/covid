export const lightTheme = {
    body: '#E2E2E2',
    title: '#ffffff',
    background: '#fff',
    border: '1px solid rgba(0,0,0,.125)',
    headerBorder: 'rgba(0,0,0,.125)',
    headerBackground: '#ffffff',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    nav: {
        title: '#ffffff',
        subtitle: '#fff',
        background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)'
    },
    footer: {
        background: '#767676',
        title: '#fff'
    },
    card: {
        header: 'rgba(0,0,0,.03);',
        body: '#fff',
        border: '1px solid rgba(0,0,0,.125)'
    },
    inputSwitch: {
        color: '#fff',
        background: '#000',
    },
    modal: {
        background: '#ffffff',
        color: '#454545',
    }
}

export const darkTheme = {
    body: '#363537',
    title: '#FAFAFA',
    background: '#000',
    border: '1px solid #454545',
    headerBorder: '#454545',
    headerBackground: '#000',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    nav: {
        title: '#11998e',
        subtitle: '#38ef7d',
        background: '#1D1D1D'
    },
    footer: {
        background: '#1D1D1D',
        title: '#FAFAFA',
    },
    card: {
        header: '#454545',
        body: '#000',
        border: '1px solid #454545'
    },
    inputSwitch: {
        color: '#222223',
        background: '#000',
    },
    modal: {
        color: '#ffffff',
        background: '#1D1D1D',
        border: '#454545'
    }
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme);
export default theme;

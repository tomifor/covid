export const lightTheme = {
    body: '#E2E2E2',
    title: '#ffffff',
    background: '#fff',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    nav: {
        title: '#ffffff',
        subtitle: '#fff',
        background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)'
    },
    footer: {
        background: '#11998e',
        title: '#fff'
    },
    card: {
        header: 'rgba(0,0,0,.03);',
        body: '#fff'
    }
}

export const darkTheme = {
    body: '#363537',
    title: '#FAFAFA',
    background: '#000',
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
        header: '#222223',
        body: '#000'
    }
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme);
export default theme;

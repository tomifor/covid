import React from 'react';
import './App.scss';
import NavHeader from "./components/nav/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/footer";
import SmTab from "./components/tabs/sm-tab";
import {useTheme} from "./theme/ThemeContext";
import styled from "@emotion/styled";
import {Tab, Nav} from "react-bootstrap";
import ArgentinaTab from "./components/tabs/argentina-tab";


const App = () => {
    const themeState = useTheme();
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('Esta en darkmode');
    }
    return (
        <StyleWrapper>
            <div className="app-container">
                <NavHeader onChangeMode={() => themeState.toggle()}/>
                <div className={'body'}>
                    <Tab.Container defaultActiveKey="city">
                        <Nav variant="pills" className="flex-row">
                            <Nav.Item>
                                <Nav.Link eventKey="city">San Miguel</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="country">Argentina</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="city">
                                <SmTab/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="country">
                                <ArgentinaTab/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
                <Footer/>
            </div>
        </StyleWrapper>
    );
}

export default App;


const StyleWrapper = styled("div")`
background: ${props => props.theme.background};
.last-update {
color: ${props => props.theme.text};
};
.section-title {
color: ${props => props.theme.text};
}
.cards-container, .test-container {
.card-header {
background-color: ${props => props.theme.card.header};
}
.card-body {
background-color: ${props => props.theme.card.body};
}
.card {
border: ${props => props.theme.card.border};
}
h3.title {
color: ${props => props.theme.text};
}
p.value {
color: ${props => props.theme.text};
}
}
p.source {
color: ${props => props.theme.text};
a {
color: ${props => props.theme.text};
}
a.nav-link { color: ${props => props.theme.text} !important; }
}
`;

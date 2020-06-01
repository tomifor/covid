import React from 'react';
import './App.scss';
import NavHeader from "./components/nav/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/footer";
import SmTab from "./components/tabs/SmTab";
import {useTheme} from "./theme/ThemeContext";
import styled from "@emotion/styled";
import {Tab, Nav} from "react-bootstrap";
import ArTab from "./components/tabs/ArTab";


const App = () => {
    const themeState = useTheme();
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // onsole.log('Esta en darkmode');
    }
    return (
        <StyleWrapper>
            <div className="app-container">
                <NavHeader onChangeMode={() => themeState.toggle()}/>
                <div className={'body'}>
                    <Tab.Container defaultActiveKey="country">
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
                                <ArTab/>
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
p.source {
color: ${props => props.theme.text};
a {
color: ${props => props.theme.text};
}
a.nav-link { color: ${props => props.theme.text} !important; }
}
.last-update h3 { color: ${props => props.theme.text} }
.day-cases, .total-cases, .lethality-chart, .ar-chart { 
    tspan { fill: ${props => props.theme.text} !important;} 
    line: { stroke: ${props => props.theme.text} !important;}
 }
 #chart-legend-1-title-all, #chart-legend-1-labels-0, #chart-legend-1-labels-1, #chart-legend-1-labels-2, 
 #chart-legend-1-labels-3, #chart-legend-1-labels-4, #chart-legend-1-labels-5 {
    tspan { fill: ${props => props.theme.text} !important;} 
 }
`;

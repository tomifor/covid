import React, {useEffect, useState} from 'react';
import './nav.scss';
import DarkModeSwitch from "../dark-mode/switch/dark-mode-switch";
import styled from "@emotion/styled";
import EmergencyAlert from "../shared/alert/EmergencyAlert";
import {useTheme} from "../../theme/ThemeContext";
import SmMap from "../modals/SmMap/SmMap";

export const NavHeader = (props) => {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showMap, setShowMap] = useState(false);
    const themeState = useTheme();

    useEffect(() => {
        if (themeState.dark) {
            setDarkMode(true);
        }
        setLoading(false);
    }, [themeState.dark]);

    return (
        <StyleWrapper>
            <div className={'nav-container'}>
                <div className={'nav'}>
                    <div className={'left-section'}>
                        <div className={'logo-container'}>
                            <h1 className={'title'}><a href={'https://tomifor.github.io/covid/'}>Covid-19</a></h1>
                            <h2 className={'subtitle'} onClick={() => setShowMap(true)}>San Miguel</h2>
                        </div>
                        <div className={'nav-alert'}>
                            <EmergencyAlert/>
                        </div>
                    </div>
                    {!loading ? <DarkModeSwitch
                        selected={darkMode}
                        onChange={(value) => props.onChangeMode ? props.onChangeMode(value) : null}/> : null
                    }
                </div>
                <SmMap show={showMap} onClose={() => setShowMap(false)}/>
            </div>
        </StyleWrapper>
    )
}

const StyleWrapper = styled("div")`
  background: ${props => props.theme.nav.background};
  font-family: "Oxygen", sans-serif;
  h1 a {
    color: ${props => props.theme.nav.title};
  }
  h2 {
    color: ${props => props.theme.nav.subtitle};
  }
  h2:hover {
    color: ${props => props.theme.nav.subtitle};
  }
`;

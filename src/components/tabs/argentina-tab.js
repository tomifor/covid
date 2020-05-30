import React from "react";
import styled from "@emotion/styled";


export default class ArgentinaTab extends React.Component {


    render() {
        return (
            <StyleWrapper>
                <div id={'argentina-tab'}>
                    <p className={'soon'}>Próximamente</p>
                </div>
            </StyleWrapper>
        )
    }

}

const StyleWrapper = styled("div")`
  .soon {
    color: ${props => props.theme.text};
  }
`;

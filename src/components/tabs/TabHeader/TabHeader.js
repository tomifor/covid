import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import filter from "../../../assets/filtrar.svg";
import './tab-header.scss';
import styled from "@emotion/styled";

class TabHeader extends React.Component {

    render() {
        const {lastUpdate} = this.props;
        return (
            <StyleWrapper>
                <div className={'tab-header-container'}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={'tab-header'}>
                                    <div className={'last-update'}>
                                        <h3>Última actualización: {lastUpdate ? lastUpdate : '-'}</h3>
                                    </div>
                                    {this.props.filterActive ?
                                        <div className={'filter-button'}>
                                            <img src={filter} alt={'filter'}/>
                                        </div>
                                        : null
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </StyleWrapper>
        )
    }
}

export default TabHeader;

TabHeader.defaultProps = {
    filterActive: true
}


const StyleWrapper = styled("div")`
  .tab-header {
    border-color: ${props => props.theme.headerBorder};
    background-color: ${props => props.theme.headerBackground};
  }
`;

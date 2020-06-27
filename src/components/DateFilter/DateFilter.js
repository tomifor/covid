import React from "react";
import './date-filter.scss';
import {Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";

class DateFilter extends React.Component {


    handleDropdown = (value) => {
        console.log(value);

        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    render() {
        return (
            <div className={'date-filter-container'}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={'date-filter'}>
                                <p className={'label'}>Filtrar gráfico</p>
                                <DropdownButton title={'Total'} id={'filter-dropdown'}>
                                    <Dropdown.Item onClick={this.handleDropdown(15)}>Últimos 15 días</Dropdown.Item>
                                    <Dropdown.Item onClick={this.handleDropdown(30)}>Últimos 30 días</Dropdown.Item>
                                    <Dropdown.Item onClick={this.handleDropdown(60)}>Últimos 60 días</Dropdown.Item>
                                    <Dropdown.Item onClick={this.handleDropdown()}>Todos los días</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DateFilter;

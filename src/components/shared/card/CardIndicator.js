import React from "react";
import './card.scss';
import {Card} from "react-bootstrap";
import styled from "@emotion/styled";


export default class CardIndicator extends React.Component {

    render() {
        return (
            <StyleWrapper>
                <div className={'card-container ' + this.props.customClass}>
                    <Card className="text-center">
                        <Card.Header>
                            <h2 className={'title'}>{this.props.title}</h2>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <p className={'value'}>{this.props.value !== null ? this.props.value : '-'}</p>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </StyleWrapper>
        )
    }
}


const StyleWrapper = styled("div")`
    .card-container {
        .card-header {
           background-color: ${props => props.theme.card.header};
        }
        .card-body {
            background-color: ${props => props.theme.card.body};
        }
        .card {
            border: ${props => props.theme.card.border};
        }
        h2.title {
            color: ${props => props.theme.text};
        }
        p.value {
            color: ${props => props.theme.text};
        }
    }
`;

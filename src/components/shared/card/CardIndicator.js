import React from "react";
import './card.scss';
import {Card} from "react-bootstrap";
import styled from "@emotion/styled";


export default class CardIndicator extends React.Component {

    render() {
        const {positive, title, customClass, value, extraValue} = this.props;
        return (
            <StyleWrapper>
                <div className={'card-container ' + customClass}>
                    <Card className="text-center">
                        <Card.Header>
                            <h2 className={'title'}>{title}</h2>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <p className={'value'}>{value !== null ? value : '-'}</p>
                                {extraValue ?
                                    <p className={positive ? 'extra positive' : ' extra negative'}>{`(${extraValue > 0 ? '+' : ''}${extraValue})`}</p> : null}
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

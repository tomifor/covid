import React from "react";
import './card.scss';
import {Card} from "react-bootstrap";


export default class CardIndicator extends React.Component {

    render() {
        return (
            <div className={'card-container'}>
                <Card className="text-center">
                    <Card.Header>
                        <h2 className={'title'}>{this.props.title}</h2>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <p className={'value'}>{this.props.value}</p>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

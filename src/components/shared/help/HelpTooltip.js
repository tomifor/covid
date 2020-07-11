import React, {useState} from "react";
import './HelpTooltip.scss';
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Info from '../../../assets/informacion.svg';


export const HelpTooltip = ({text}) => {
    const placement = 'bottom';

    return (
        <div className={'help-tooltip-container'}>
            <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                        {text ? text : ''}
                    </Tooltip>
                }
            >
                <img className={'info-icon'} src={Info} alt={'Información'}/>
            </OverlayTrigger>
        </div>
    )
}

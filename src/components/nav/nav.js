import React from 'react';
import './nav.scss';

export default class Nav extends React.Component {

    render() {
        return (
            <div className={'nav-container'}>
                <div className={'nav'}>
                    <div className={'logo-container'}>
                        <h1 className={'title'}>Covid-19</h1>
                        <h2 className={'subtitle'}><a href={'https://goo.gl/maps/3fTbwqhnmosFQ3VG8'} target={'_blank'}
                                                      rel="noopener noreferrer">San Miguel</a></h2>
                    </div>
                </div>
            </div>
        )
    }

}

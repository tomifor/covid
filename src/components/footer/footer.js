import React from "react";
import './footer.scss';
import styled from "@emotion/styled";

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            version: 'v 0.5.6',
            tag: '#QuedateEnCasa',
            twitterUrl: 'https://twitter.com/hashtag/QuedateEnCasa',
            githubUrl: 'https://github.com/tomifor/covid',
            linkedinUrl: 'https://www.linkedin.com/in/tomasforman/',
            year: '2020',
            name: '@tomifor'
        }
    }

    render() {
        const {version, tag, twitterUrl, githubUrl, linkedinUrl, year, name} = this.state;
        return (
            <StyleWrapper>
                <div className={'footer-container'}>
                    <div className={'hashtag'}>
                        <a href={twitterUrl} rel={'noopener noreferrer'}
                           target={'_blank'}>{tag}</a>
                    </div>
                    <div className={'social'}>
                        <a className={'icon'}
                           href={githubUrl}
                           rel={'noopener noreferrer'}
                           name={'github'}
                           aria-label={'Github'}
                           role={'button'} target={'_blank'}>
                            <svg className="icon-github" height="32" viewBox="0 0 16 16"
                                 version="1.1" width="32" aria-hidden="true">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"/>
                            </svg>
                        </a>
                        <a className={'icon'}
                           href={linkedinUrl}
                           name={'linkedin'}
                           role={'button'}
                           aria-label={'Github'} rel={'noopener noreferrer'}
                           target={'_blank'}>
                            <svg className={'icon-linkedin'} xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                            </svg>
                        </a>
                    </div>
                    <p className={'made-by'}>Made by <a href={'https://twitter.com/tomifor'} rel={'noopener noreferrer'}
                                                        target={'_blank'}>{name}</a> - {year}</p>
                    <p className={'version'}>{version}</p>
                </div>
            </StyleWrapper>
        )
    }
}


const StyleWrapper = styled("div")`
  background: ${props => props.theme.footer.background};
  font-family: "Oxygen", sans-serif;
  a, p {
    color: ${props => props.theme.title};
  }
`;

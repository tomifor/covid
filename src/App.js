import React from 'react';
import './App.scss';
import Nav from "./components/nav/nav";
import Cards from "./components/cards/cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DATA} from "./data";
import Charts from "./components/charts/charts";
import TestSection from "./components/test-section/TestSection";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="app-container">
            <Nav/>
            <div className={'body'}>
                <div className={'last-update'}>
                    <h3>Última actualización: {new Date(DATA[0].date).toLocaleString()}</h3>
                </div>
                <div>
                    <Cards/>
                </div>
                <div>
                    <Charts/>
                </div>
                <div>
                    {/*<TestSection/>*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

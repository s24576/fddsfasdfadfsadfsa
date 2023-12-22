import React, { Component } from 'react';
import Footer from "./footer.js";
import Header from './header.js';
import Navbar from './navbar.js';
import Article from './article.js';
import Section from './section.js';
import przegladarki from '../przegladarki.json';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Article />
                <Section data={przegladarki}/>
                <Footer />
            </div>
        )
    }
}

export default App;
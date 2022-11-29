import React, { Component } from 'react';
import Product_cards_index from './components/Product_cards_index';



class Index extends Component {

    render() {

        return (
            <div className="page-warapper">
                <div className="background">
                    <div style={{ width: '100%', textAlign: 'right', backgroundImage: 'url("{{ asset("images/background.jpg") }}")', height: '500px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', marginRight: '40px' }} className="background-image" />
                    <div style={{ width: '100%', background: 'blue', textAlign: 'right' }}>
                        <h1 style={{ color: 'white', fontSize: '25px', marginRight: '2%', paddingBlock: '10px' }}>
                            <i className="fas fa-phone" />+966 568199827
                        </h1>
                    </div>
                </div>
                <div className="container text-center">
                    < Product_cards_index />
                </div>
            </div>
        );
    }
}

export default Index;



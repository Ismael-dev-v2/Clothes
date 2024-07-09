import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carrusel.css'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className='Carrusel'>
                    <img className='img' src="https://nikearprod.vtexassets.com/arquivos/ids/587695-800-800?v=638168493693970000&width=800&height=800&aspect=true" />
                    <p className="legend">Nike Therma-FIT</p>
                </div>
                <div className='Carrusel'>
                    <img className='img' src="https://nikearprod.vtexassets.com/arquivos/ids/210132-800-800?v=638098199186430000&width=800&height=800&aspect=true" />
                    <p className="legend">Nike Sportswear Air</p>
                </div>
                <div className='Carrusel'>
                    <img className='img' src="https://nikearprod.vtexassets.com/arquivos/ids/210190-800-800?v=638098200003770000&width=800&height=800&aspect=true" />
                    <p className="legend">Nike Sportswear Circa</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel
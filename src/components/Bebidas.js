import React from "react";
import Miel from "../img/Miel.png";
import Cajon from "../img/Cajon.png";
import Chocolatada from '../img/Cafeteria/Chocolatada.jpg';

const Bebidas = () => {
    return(
            <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>


            <div className="carousel-inner">
                <div className="carousel-item active ">
                <img src={Chocolatada} className="d-block mx-auto" alt="..."/>
                <div className="carousel-caption">
                    <div className="carousel-text">
                        <h5 className="carousel-h5">Chocolatada</h5>
                        <p className="carousel-p">Chocolatada a base de cacao</p>
                        <p className="price">$500</p>
                    </div>
                </div>
                </div>


                <div className="carousel-item">
                <img src={Cajon} className="d-block mx-auto" alt="..." />
                <div className="carousel-caption">
                    <div className="carousel-text">
                        <h5 className="carousel-h5">Second slide label</h5>
                        <p className="carousel-p">Some representative placeholder content for the second slide.</p>
                        <p className="price">$500</p>
                    </div>
                </div>
                </div>


                <div className="carousel-item">
                <img src={Miel} className="d-block mx-auto" alt="..." />
                <div className="carousel-caption">
                    <div className="carousel-text">
                        <h5 className="carousel-h5">Third slide label</h5>
                        <p className="carousel-p">Some representative placeholder content for the third slide.</p>
                        <p className="price">$500</p>
                    </div>
                </div>
                </div>
                




            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
                )
            }

export default Bebidas;
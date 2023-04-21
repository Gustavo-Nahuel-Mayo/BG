import React from "react";
import Alfajores from "../img/Cafeteria/Cafeteria-Alfajores.jpg";
import HojaldresDeQueso from "../img/Cafeteria/Cafeteria-HojaldresDeQueso.jpg";
import Scones from "../img/Cafeteria/Cafeteria-Scones.jpg";
import Medialunas from "../img/Cafeteria/Medialunas.JPG";
import Galletitas from "../img/Cafeteria/CafeteriaGalletitas.jpg"



const Imperdibles = () => {
    return(
        <div id="carouselExampleDark1" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="4" aria-label="Slide 5"></button>

        </div>


        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={Alfajores} className="d-block" alt="..." />
            <div className="carousel-caption" id="container-text">
                <div className="carousel-text">
                    <h5 className="carousel-h5">Alfajores</h5>
                    <p className="carousel-p">Rellenos de Dulce de leche y cubiertos con Chocolate</p>
                    <p className="price">$500</p>
                </div>
            </div>
            </div>


            <div className="carousel-item">
            <img src={HojaldresDeQueso} className="d-block" alt="..." />
            <div className="carousel-caption">
                <div className="carousel-text">
                    <h5 className="carousel-h5">Hojaldres de queso</h5>
                    <p className="carousel-p">Masa hojaldrada con queso</p>
                    <p className="price">$500</p>
                </div>
            </div>
            </div>


            <div className="carousel-item">
            <img src={Scones} className="d-block" alt="..." />
            <div className="carousel-caption">
                <div className="carousel-text">
                    <h5 className="carousel-h5">Scones</h5>
                    <p className="carousel-p">Some representative placeholder content for the third slide.</p>
                    <p className="price">$500</p>
                </div>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Medialunas} className="d-block" alt="..." />
            <div className="carousel-caption">
                <div className="carousel-text">
                    <h5 className="carousel-h5">Medialunas</h5>
                    <p className="carousel-p">Some representative placeholder content for the Four slide.</p>
                    <p className="price">$500</p>
                </div>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Galletitas} className="d-block" alt="..." />
            <div className="carousel-caption">
                <div className="carousel-text">
                    <h5 className="carousel-h5">Galletitas</h5>
                    <p className="carousel-p">Some representative placeholder content for the Four slide.</p>
                    <p className="price">$500</p>
                </div>
            </div>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
    }
export default Imperdibles;
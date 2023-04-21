import React from "react";
import MousseDDLyAlmendras from "../img/Cafeteria/Torta-MousseDDLyAlmendras.jpg";
import TortaMoca from "../img/Cafeteria/Torta-Moca.jpg";
import TortaJostaberryCrema from "../img/Cafeteria/Torta-JostaberryCrema.jpg";
import TortaFrutilla from "../img/Cafeteria/Torta-Frutilla.jpg";
import TortaExtreme from "../img/Cafeteria/Torta-ExtremeChocolate.jpg";
import Torta3Colores from "../img/Cafeteria/Torta-3Colores.jpg";
import TartaManzanaMora from "../img/Cafeteria/Tarta-ManzanayMora.jpg";




const Tortas = () => {
    return(

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>

                </div>



                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={TortaMoca} className="d-block" alt="..." />
                    <div className="carousel-caption">
                        <div className="carousel-text">
                            <h5 className="carousel-h5">Crema Mocca</h5>
                            <p className="carousel-p">Some representative placeholder content for the first slide.</p>
                            <p className="price">$500</p>
                        </div>
                    </div>
                    </div>



                    <div className="carousel-item" >
                    <img src={TortaJostaberryCrema} className="d-block" alt="..." />
                    <div className="carousel-caption">
                        <div className="carousel-text">
                            <h5 className="carousel-h5">Crema y Jostaberry</h5>
                            <p className="carousel-p">Some representative placeholder content for the second slide.</p>
                            <p className="price">$500</p>
                        </div>
                    </div>
                    </div>


                    <div className="carousel-item">
                    <img src={MousseDDLyAlmendras} className="d-block" alt="..." />
                    <div className="carousel-caption">
                        <div className="carousel-text">
                            <h5 className="carousel-h5">Mousse Dulce de Leche</h5>
                            <p className="carousel-p">Some representative placeholder content for the third slide.</p>
                            <p className="price">$500</p>
                        </div>
                    </div>
                    </div>


                    <div className="carousel-item">
                    <img src={TortaFrutilla} className="d-block" alt="..." />
                    <div className="carousel-caption">
                        <div className="carousel-text">
                            <h5 className="carousel-h5">Mousse con frutilla</h5>
                            <p className="carousel-p">Some representative placeholder content for the third slide.</p>
                            <p className="price">$500</p>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <img src={TortaExtreme} className="d-block" alt="..." />
                    <div className="carousel-caption">
                        <div className="carousel-text">
                            <h5 className="carousel-h5">Extreme de chocolate</h5>
                            <p className="carousel-p">Some representative placeholder content for the third slide.</p>
                            <p className="price">$500</p>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <img src={Torta3Colores} className="d-block" alt="..." />
                    <div className="carousel-caption">
                        <div className="carousel-text">
                            <h5 className="carousel-h5">3 Colores</h5>
                            <p className="carousel-p">Some representative placeholder content for the third slide.</p>
                            <p className="price">$500</p>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <img src={TartaManzanaMora} className="d-block" alt="..." />
                    <div className="carousel-caption">
                        <div className="carousel-text">
                            <h5 className="carousel-h5">Tarta de Manzana y Mora</h5>
                            <p className="carousel-p">Some representative placeholder content for the third slide.</p>
                            <p className="price">$500</p>
                        </div>
                    </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
}

export default Tortas;
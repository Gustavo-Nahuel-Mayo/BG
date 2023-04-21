import React from "react";
import Excursiones1 from "../img/excursiones/Excursiones1.JPG";
import Excursiones2 from "../img/excursiones/Excursiones2.JPG";
import Excursiones3 from "../img/excursiones/Excursiones3.JPG";

const EscolaresCarousel = () => {
    return(
            <div id="escolaresCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>


            <div className="carousel-inner">
                <div className="carousel-item active" >
                <img src={Excursiones1}  className="d-block mx-auto" alt="..." id="excursionimg"/>
                {/* <div className="carousel-caption"> 
                    <div className="carousel-text">
                        <h5>Chocolatada</h5>
                        <p>Chocolatada a base de cacao</p>
                    
                    </div>
                </div>*/}
                </div>


                <div className="carousel-item">
                <img src={Excursiones2} className="d-block mx-auto" alt="..." id="excursionimg"/>
                {/* <div className="carousel-caption"> 
                    <div className="carousel-text">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                        
                    </div>
                </div>*/}
                </div>


                <div className="carousel-item">
                <img src={Excursiones3} className="d-block mx-auto" alt="..." id="excursionimg"/>
                {/* <div className="carousel-caption"> 
                    <div className="carousel-text">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                        <p className="price">$500</p>
                    </div>
                </div>*/}
                </div>
                




            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#escolaresCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#escolaresCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
                )
            }

export default EscolaresCarousel;


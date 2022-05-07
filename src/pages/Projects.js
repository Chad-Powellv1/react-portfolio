import { BsLink45Deg, BsPlus } from 'react-icons/bs';
import restaurant from '../assets/restaurant2.jpg';
import tictactoe from '../assets/tictactoe.jpg';
import weather from '../assets/weather.jpg';
import todo from '../assets/todo.jpg';
import React from 'react'
import '../App.css'

export const Projects = () => {
    let weatherApp = 'https://chad-powellv1.github.io/weather-app/';
    let gameApp = 'https://chad-powellv1.github.io/react-tictactoe/';

    return (
        <main className="main" id='projects'>
            <section className="project section">
                <div className="container">

                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row project-container" data-aos="fade-up" data-aos-delay="100">

                        <div className="col-md-6 project-item filter-app">
                            <div className="project-wrap">
                                <img src={weather} className="img-fluid" alt="Weather App" />
                                <div className="project-links">
                                    <a href={weather} data-gallery="projectGallery" className="project-lightbox"><i className="bx "><BsPlus /></i></a>
                                    <a href={weatherApp} title="More Details"><i className="bx"><BsLink45Deg /></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 project-item filter-web">
                            <div className="project-wrap">
                                <img src={tictactoe} className="img-fluid" alt="Tic Tac Toe" />
                                <div className="project-links">
                                    <a href={tictactoe} data-gallery="projectGallery" className="project-lightbox"><i className="bx"><BsPlus /></i></a>
                                    <a href={gameApp} title="More Details"><i className="bx"><BsLink45Deg /></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 project-item filter-app">
                            <div className="project-wrap">
                                <img src={todo} className="img-fluid" alt="Todo App" />
                                <div className="project-links">
                                    <a href={todo} data-gallery="projectGallery" className="project-lightbox"><i className="bx"><BsPlus /></i></a>
                                    <a href={todo} title="More Details"><i className="bx"><BsLink45Deg /></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 project-item filter-card">
                            <div className="project-wrap">
                                <img src={restaurant} className="img-fluid" alt="Restaurant App" />
                                <div className="project-links">
                                    <a href={restaurant} data-gallery="projectGallery" className="project-lightbox"><i className="bx"><BsPlus /></i></a>
                                    <a href={restaurant} title="More Details"><i className="bx"><BsLink45Deg /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
import './home.css'
import React from "react";

export const Home = () => {
    return (
        <div>
            <section className="home d-flex flex-column justify-content-center align-items-center">
                <div className="home-container" data-aos="fade-in">
                    <h1>Hello, <br />  I'm Chad</h1>
                    <p>A <span className="typed">Full Stack Web Developer</span></p>
                    <button className="button">Contact Me</button>
                </div>
            </section>
        </div>
    )
}
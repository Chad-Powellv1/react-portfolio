import { Typewriter } from 'react-simple-typewriter'
import React from "react";
import './home.css'

export const Home = () => {
    return (
        <div>
            <section className="home d-flex flex-column justify-content-center align-items-center">
                <div className="home-container" data-aos="fade-in">
                    <h1>Hello, <br />  I'm Chad</h1>
                    <p><span className="typed">
                        <Typewriter
                            words={[
                                'A Full Stack Web Developer',
                                'An Experienced Leader',
                                'A Proficient Instructor'
                            ]}
                            loop={0}
                            cursor
                            typeSpeed={100}
                            deleteSpeed={60}
                            delaySpeed={2000}
                        />
                    </span></p>
                    <button className="button">Contact Me</button>
                </div>
            </section>
        </div>
    )
}
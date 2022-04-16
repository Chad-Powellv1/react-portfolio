import './about.css'
import React from 'react';
import chad from '../assets/chad.jpg'

export const About = () => {
    return (
        <div>
            <main className="main">
                <section className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>About</h2>
                            <p>After spending twenty years in Law Enforcement helping other people solve problems,
                             I knew I needed to continue in a career that would provide the same challenge. Throughout
                             my career, I specialized in digital forensics and enjoyed working with computers which lead
                             me to research computer coding. <br/><br/> The experience of solving problems through code allows me to
                             continue achieving my goal of continuing my education while helping others. Each problem brings
                             its own unique set of challenges, making this career a perfect match. Every challenge allows me
                             to sharpen my skills and become more proficient in helping others solve problems</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={chad} className="img-fluid" alt="Chad" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Full Stack Web Developer  <span className="teal">|</span>  Experienced Leader <span className="teal">|</span> Instructor</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Tech Exp:</strong> <span>Placeholder text</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Leadership Exp:</strong> <span>Placeholder text</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Instructor Exp:</strong> <span>Placeholder text</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Training:</strong> <span>Placeholder text</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export function About() {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>
                        Senior software engineer and engineering lead with 10+ years across fintech, platform modernization, and full-stack delivery. I design scalable systems, lead teams, and deliver reliable products that connect complex business workflows.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <picture>
                            <img src="/assets/img/profile-img.jpg" className="img-fluid about-profile" alt="Marius Ngaboyamahina"/>
                        </picture>
                        <div className="about-card">
                            <h4>Focus Areas</h4>
                            <div className="about-badges">
                                <span>Microservices</span>
                                <span>Fintech Integrations</span>
                                <span>Platform Modernization</span>
                                <span>Full-Stack Delivery</span>
                                <span>Engineering Leadership</span>
                            </div>
                            <p>
                                From architecture to delivery, I build systems that are secure, scalable, and easy to evolve.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Senior Software Engineer / Software Developer Lead</h3>
                        <p className="fst-italic">
                            I translate ambiguous requirements into clear architecture, practical delivery plans, and maintainable code that teams can extend with confidence.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong>
                                        <span>Master of Science in Information Systems</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong>
                                        <span>Kigali, Rwanda</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong>
                                        <span><a href="https://ntezi.github.io/">ntezi.github.io</a></span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong>
                                        <span><a href="tel:+250788590179">+250 788 590 179</a></span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                                        <span><a href="mailto:ngabomarius@gmail.com">ngabomarius@gmail.com</a></span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Availability:</strong>
                                        <span>Consulting, delivery leadership, mentoring</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Current focus includes microservices, cloud-native delivery, and data-driven integrations across banking and telecom ecosystems. I enjoy mentoring engineers and raising quality through standards, reviews, and hands-on coaching.
                        </p>
                        <div className="row about-highlights g-3">
                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="about-highlight">
                                    <h4>10+ Years</h4>
                                    <p>End-to-end delivery across backend, web, and mobile.</p>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="about-highlight">
                                    <h4>Microservices and APIs</h4>
                                    <p>Resilient services, integrations, and data flows.</p>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="about-highlight">
                                    <h4>Leadership and Mentorship</h4>
                                    <p>Engineering standards, code review, and team growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

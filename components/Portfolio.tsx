
import { useState } from "react";
import { PortfolioDetails } from "./PortfolioDetails";

interface Project {
    title: string;
    category: string;
    client: string;
    date: string;
    url: string;
    images: string[];
    description: string;
}

const projects: Project[] = [
    {
        "title": "School Fees & Feeding Collection",
        "category": "FinTech",
        "client": "Umwalimu SACCO, MTN, MINEDUC, MINICOFIN, Schools",
        "date": "01 June, 2024",
        "url": "https://www.umwalimusacco.rw",
        "images": [
            "/assets/img/portfolio/portfolio-fintech-1.jpg",
            "/assets/img/portfolio/portfolio-fintech-2.jpg",
            "/assets/img/portfolio/portfolio-fintech-3.jpg"
        ],
        "description": "This project aimed at digitizing school fee and meal payments for over 3.9 million students in Rwanda through a collaboration between Umwalimu SACCO, MTN, and MINEDUC. The system improves efficiency, accessibility, and convenience for parents and schools alike."
    },
    {
        "title": "Murakoze Project",
        "category": "IoT",
        "client": "Rexvert, WiredIn",
        "date": "August 2018",
        "url": "https://wiredin.rw",
        "images": [
            "/assets/img/portfolio/portfolio-iot-1.jpg",
            "/assets/img/portfolio/portfolio-iot-2.jpg",
            "/assets/img/portfolio/portfolio-iot-3.jpg"
        ],
        "description": "The Murakoze project started during a summer internship in Tokyo and evolved from hardware using ICHIGOJAM and Arduino into a tablet app that manages queues in customer service settings."
    },
    {
        "title": "Microservice-Based POS",
        "category": "Microservices POS",
        "client": "Personal Project",
        "date": "July 2022",
        "url": "https://www.linkedin.com/in/ntezi",
        "images": [
            "/assets/img/portfolio/portfolio-pos-1.jpg",
            "/assets/img/portfolio/portfolio-pos-2.jpg",
            "/assets/img/portfolio/portfolio-pos-3.jpg"
        ],
        "description": "This microservice-based POS system was designed to be scalable and modular, supporting seamless transaction processing. It highlights my expertise in designing robust, efficient systems using microservices architecture."
    },
    {
        "title": "Waraoukado Project",
        "category": "IoT",
        "client": "Rexvert, WiredIn",
        "date": "March 2020",
        "url": "https://murakoze.rw",
        "images": [
            "/assets/img/portfolio/portfolio-iot-4.jpg",
            "/assets/img/portfolio/portfolio-iot-5.jpg",
            "/assets/img/portfolio/portfolio-iot-6.jpg"
        ],
        "description": "In collaboration with Rexvert and WiredIn, this IoT-based retail engagement project uses smart interfaces to optimize customer interactions in retail environments, offering a unique and streamlined shopping experience."
    },
    {
        "title": "SARating App",
        "category": "Mobile App",
        "client": "Personal Project",
        "date": "15 July, 2023",
        "url": "https://github.com/Ntezi/SARating",
        "images": [
            "/assets/img/portfolio/portfolio-app-1.jpg",
            "/assets/img/portfolio/portfolio-app-2.jpg",
            "/assets/img/portfolio/portfolio-app-3.jpg"
        ],
        "description": "SARating is a service ranking system based on sentiment analysis. It collects reviews from various online platforms and uses the Wilson Score confidence interval to rank services, providing users with a quick and balanced evaluation of services."
    },
    {
        "title": "Ikizamini App",
        "category": "Web App",
        "client": "Personal Project",
        "date": "10 January, 2024",
        "url": "https://ikizamini-a54cb.web.app/",
        "images": [
            "/assets/img/portfolio/portfolio-app-4.jpg",
            "/assets/img/portfolio/portfolio-app-5.jpg",
            "/assets/img/portfolio/portfolio-app-6.jpg"
        ],
        "description": "Ikizamini is an interactive tool for practicing theory exam questions for the Rwandan driving test. It offers real-time feedback, a timer for simulating exam conditions, and questions generated using a web crawler from the Rwanda Traffic Guide."
    }
]

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    if (selectedProject) {
        return <PortfolioDetails project={selectedProject} />;
    }

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Explore a selection of my work that spans FinTech solutions, IoT innovations, and microservices architecture. Each project showcases my ability to design and implement solutions that address real-world challenges.</p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-filters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-fintech">FinTech</li>
                            <li data-filter=".filter-iot">IoT</li>
                            <li data-filter=".filter-pos">POS Systems</li>
                            <li data-filter=".filter-app">Mobile Apps</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {projects.map((project, index) => (
                        <div key={index} className={`col-lg-4 col-md-6 portfolio-item filter-${project.category.toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className="portfolio-wrap">
                                <img src={project.images[0]} className="img-fluid" alt={project.title} />
                                <div className="portfolio-links">
                                    <a href={project.url} title="More Details"><i className="bx bx-link"></i></a>
                                    <button onClick={() => setSelectedProject(project)} title="Project Details"><i className="bx bx-plus"></i></button>
                                </div>
                                <div className="portfolio-info">
                                    <h4>{project.title}</h4>
                                    <p>{project.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
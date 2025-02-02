'use client'
import {useEffect, useState} from "react";
import {PortfolioDetails} from "./PortfolioDetails";

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
        "date": "November 2023",
        "url": "https://www.umwalimusacco.rw",
        "images": [
            "/assets/img/portfolio/portfolio-1.jpg",
            "/assets/img/portfolio/portfolio-2.jpg",
            "/assets/img/portfolio/portfolio-3.jpg"
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
            "/assets/img/portfolio/portfolio-4.jpg",
            "/assets/img/portfolio/portfolio-5.jpg",
            "/assets/img/portfolio/portfolio-6.jpg"
        ],
        "description": "The Murakoze project started during a summer internship in Tokyo and evolved from hardware using ICHIGOJAM and Arduino into a tablet app that manages queues in customer service settings."
    },
    {
        "title": "Microservice-Based POS",
        "category": "Microservices POS",
        "client": "Personal Project",
        "date": "December 2020",
        "url": "https://www.linkedin.com/in/ntezi",
        "images": [
            "/assets/img/portfolio/portfolio-7.jpg",
            "/assets/img/portfolio/portfolio-8.jpg",
            "/assets/img/portfolio/portfolio-9.jpg"
        ],
        "description": "This microservice-based POS system was designed to be scalable and modular, supporting seamless transaction processing. It highlights my expertise in designing robust, efficient systems using microservices architecture."
    },
    {
        "title": "Waraukado Project",
        "category": "IoT",
        "client": "Rexvert, WiredIn",
        "date": "October 2016",
        "url": "https://www.waraukado.club",
        "images": [
            "/assets/img/portfolio/portfolio-10.jpg",
            "/assets/img/portfolio/portfolio-11.jpg",
            "/assets/img/portfolio/portfolio-12.jpg"
        ],
        "description": "In collaboration with Rexvert and WiredIn, this IoT-based retail engagement project uses smart interfaces to optimize customer interactions in retail environments, offering a unique and streamlined shopping experience."
    },
    {
        "title": "SARating App",
        "category": "Mobile App",
        "client": "Personal Project",
        "date": "October 2017",
        "url": "https://github.com/Ntezi/SARating",
        "images": [
            "/assets/img/portfolio/portfolio-13.jpg",
            "/assets/img/portfolio/portfolio-14.jpg",
            "/assets/img/portfolio/portfolio-15.jpg"
        ],
        "description": "SARating is a service ranking system based on sentiment analysis. It collects reviews from various online platforms and uses the Wilson Score confidence interval to rank services, providing users with a quick and balanced evaluation of services."
    },
    {
        "title": "Ikizamini App",
        "category": "Web App",
        "client": "Personal Project",
        "date": "Jully 2024",
        "url": "https://ikizamini-a54cb.web.app/",
        "images": [
            "/assets/img/portfolio/portfolio-16.jpg",
            "/assets/img/portfolio/portfolio-app-5.jpg",
            "/assets/img/portfolio/portfolio-app-6.jpg"
        ],
        "description": "Ikizamini is an interactive tool for practicing theory exam questions for the Rwandan driving test. It offers real-time feedback, a timer for simulating exam conditions, and questions generated using a web crawler from the Rwanda Traffic Guide."
    }
]

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Explore a selection of my work that spans FinTech solutions, IoT innovations, and microservices
                        architecture. Each project showcases my ability to design and implement solutions that address
                        real-world challenges.</p>
                </div>

                {/*<div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-filters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-fintech">FinTech</li>
                            <li data-filter=".filter-iot">IoT</li>
                            <li data-filter=".filter-microservices-pos">POS Systems</li>
                            <li data-filter=".filter-mobile-app">Mobile Apps</li>
                            <li data-filter=".filter-web-app">Mobile Apps</li>
                        </ul>
                    </div>
                </div>*/}

                {/* Modal */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50
                   transition-opacity duration-300 animate-fadeIn"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative z-50
                       transform -translate-y-1/2 top-1/2 opacity-100"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✖
                            </button>
                            <PortfolioDetails project={selectedProject} />
                        </div>
                    </div>
                )}

                <div className="row portfolio-container">
                    {projects.map((project, index) => (
                        <div key={index}
                             className={`col-lg-4 col-md-6 portfolio-item filter-${project.category.toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className="portfolio-wrap">
                                <picture>
                                    <img src={project.images[0]} className="img-fluid" alt={project.title}/>
                                </picture>
                                <div className="portfolio-links">
                                    <a href={project.url} title="More Details"><i className="bx bx-link"></i></a>
                                    <button onClick={() => setSelectedProject(project)} title="Project Details"><i
                                        className="bx bx-plus"></i></button>
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
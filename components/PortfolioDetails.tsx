export function PortfolioDetails({project}: {
    project: { title: string, category: string, date: string, url: string, description: string, images: string[], client: string}
}) {
    return (
        <section id="portfolio-details" className="portfolio-details">
            <div className="container">

                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="portfolio-details-slider swiper">
                            <div className="swiper-wrapper align-items-center">
                                {project.images.map((image, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <img src={image} alt={`Portfolio ${project.title} Slide ${index + 1}`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Project information</h3>
                            <ul>
                                <li><strong>Category</strong>: {project.category}</li>
                                <li><strong>Client</strong>: {project.client}</li>
                                <li><strong>Project date</strong>: {project.date}</li>
                                <li><strong>Project URL</strong>: <a href={project.url} target="_blank"
                                                                     rel="noopener noreferrer">{project.url}</a></li>
                            </ul>
                        </div>
                        <div className="portfolio-description">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

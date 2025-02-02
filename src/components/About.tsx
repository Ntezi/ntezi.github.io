export function About() {
	return (
		<section id="about" className="about">
			<div className="container">

				<div className="section-title">
					<h2>About</h2>
					<p>
						With over 10 years of rich experience in Software Engineering, I specialize in a full spectrum of the Software Development Life Cycle, including backend engineering, mobile applications, data science, and microservice architecture. My passion lies in creating innovative software solutions that fuel organizational success while fostering societal impact. Additionally, I’m dedicated to mentoring the next generation of developers and sharing my knowledge to build future talent.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4">
						<picture>
							<img src="/assets/img/profile-img.jpg" className="img-fluid" alt="Marius Ngaboyamahina"/>
						</picture>
					</div>
					<div className="col-lg-8 pt-4 pt-lg-0 content">
						<h3>Lead Software Engineer & Digital Factory Manager</h3>
						<p className="fst-italic">
							My key strength is the ability to comprehend and meet complex project requirements using Agile methodologies and leveraging a variety of technologies. I thrive on fostering collaborative environments and delivering efficient, scalable solutions.
						</p>
						<div className="row">
							<div className="col-lg-6">
								<ul>
									<li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong><span>Master of Science in Information Systems</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kigali, Rwanda</span></li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul>
									<li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+250 788 590 179</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Email:</strong><span>ngabomarius@gmail.com</span></li>
								</ul>
							</div>
						</div>
						<p>
							Currently, as the Digital Factory Manager at UMWALIMU SACCO, I lead the design and implementation of technology solutions that optimize financial transaction workflows. My focus is on creating scalable, secure, and user-friendly systems, which have improved accessibility and service delivery to over 100,000 teachers nationwide.
						</p>
					</div>
				</div>

			</div>
		</section>
	);
}
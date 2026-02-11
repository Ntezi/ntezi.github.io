export function Service() {
    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Services I Provide</h2>
                    <p>
                        From technical strategy and architecture to delivery, reliability, and team enablement, I help teams ship systems that scale in production.
                    </p>
                </div>

                <div className="row services-grid">
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><i className="bi bi-compass"></i></div>
                        <h4 className="title"><a href="#services">Technical Strategy & Architecture</a></h4>
                        <p className="description">
                            - Turn business goals into a practical technical roadmap (phased delivery, risks, dependencies, milestones).
                            <br />
                            - Define target architecture: service boundaries, data flows, API contracts, integration patterns.
                            <br />
                            - Choose the right stack for the constraints (on-prem vs cloud, cost, skills, compliance, latency).
                            <br />
                            - Produce actionable artifacts: architecture diagram, ADRs, API spec outline, deployment blueprint, backlog.
                        </p>
                        <div className="service-tags">
                            <span className="service-tag">Roadmap</span>
                            <span className="service-tag">Architecture</span>
                            <span className="service-tag">Stack</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><i className="bi bi-diagram-3"></i></div>
                        <h4 className="title"><a href="#services">System & Microservices Design</a></h4>
                        <p className="description">
                            - Break monoliths into reliable services (domain boundaries, ownership, contracts, versioning).
                            <br />
                            - Design event-driven or request/response systems (queues/streams, idempotency, retries).
                            <br />
                            - Build for failure: timeouts, circuit breakers, backpressure, graceful degradation.
                            <br />
                            - Establish consistency and data patterns (outbox, saga, CDC, caching).
                        </p>
                        <div className="service-tags">
                            <span className="service-tag">Microservices</span>
                            <span className="service-tag">Resilience</span>
                            <span className="service-tag">Event Driven</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><i className="bi bi-code-slash"></i></div>
                        <h4 className="title"><a href="#services">Full-Stack Product Delivery (Hands-on)</a></h4>
                        <p className="description">
                            - Deliver features end-to-end: UI + API + database + infrastructure.
                            <br />
                            - Implement robust data management: schema design, migrations, performance tuning, indexing.
                            <br />
                            - Build real-world workflows: validation, approvals, audit trails, role-based access.
                            <br />
                            - Ship iteratively with clean engineering practices (tests, code reviews, standards).
                        </p>
                        <div className="service-tags">
                            <span className="service-tag">Full Stack</span>
                            <span className="service-tag">Workflows</span>
                            <span className="service-tag">Quality</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><i className="bi bi-plug"></i></div>
                        <h4 className="title"><a href="#services">API Engineering & Integrations</a></h4>
                        <p className="description">
                            - Design and implement clean APIs (REST, versioning, pagination, error models).
                            <br />
                            - Integrate with third-party and enterprise systems (banking, telco, payments, tax/EBM-like systems).
                            <br />
                            - Build integration layers: adapters, mapping, reconciliation, monitoring, and alerting.
                            <br />
                            - Produce high-quality API documentation (Swagger/Postman-style).
                        </p>
                        <div className="service-tags">
                            <span className="service-tag">APIs</span>
                            <span className="service-tag">Integrations</span>
                            <span className="service-tag">Documentation</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><i className="bi bi-shield-check"></i></div>
                        <h4 className="title"><a href="#services">Platform Reliability & Production Readiness</a></h4>
                        <p className="description">
                            - Production hardening: logging, metrics, tracing, health checks, SLAs/SLOs.
                            <br />
                            - Observability setup and dashboards; incident playbooks and on-call readiness.
                            <br />
                            - Improve uptime and performance: profiling, bottleneck removal, query optimization.
                            <br />
                            - Introduce reliability patterns: rate limits, retries, idempotency, safe rollouts.
                        </p>
                        <div className="service-tags">
                            <span className="service-tag">Reliability</span>
                            <span className="service-tag">Observability</span>
                            <span className="service-tag">Performance</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><i className="bi bi-gear-wide-connected"></i></div>
                        <h4 className="title"><a href="#services">DevOps, CI/CD, Containers, and Release Engineering</a></h4>
                        <p className="description">
                            - Implement CI/CD pipelines to reduce lead time and release risk.
                            <br />
                            - Containerize services (Docker) and prepare for scalable deployments (Kubernetes where relevant).
                            <br />
                            - Improve environments: secrets management, config strategy, deployment automation.
                            <br />
                            - Establish release practices: feature flags, canary/blue-green, rollback strategy.
                        </p>
                        <div className="service-tags">
                            <span className="service-tag">CI/CD</span>
                            <span className="service-tag">Containers</span>
                            <span className="service-tag">Release</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><i className="bi bi-bar-chart"></i></div>
                        <h4 className="title"><a href="#services">Data Engineering for Analytics & Reporting</a></h4>
                        <p className="description">
                            - Build data pipelines (ETL/ELT), data quality checks, and operational reporting datasets.
                            <br />
                            - Design reporting-friendly models (star schemas, marts, incremental loads).
                            <br />
                            - Enable decision dashboards (e.g., finance ops, transaction flows, performance KPIs).
                            <br />
                            - Automate backups, retention, and recovery processes for business continuity.
                        </p>
                        <div className="service-tags">
                            <span className="service-tag">Data Pipelines</span>
                            <span className="service-tag">Analytics</span>
                            <span className="service-tag">Reporting</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><i className="bi bi-people"></i></div>
                        <h4 className="title"><a href="#services">Engineering Leadership & Team Enablement</a></h4>
                        <p className="description">
                            - Delivery leadership: planning, estimation, sprint execution, stakeholder alignment.
                            <br />
                            - Code quality systems: review standards, linting, testing strategy, definition of done.
                            <br />
                            - Mentoring and upskilling: junior-to-mid growth plans, interview coaching, technical workshops.
                            <br />
                            - Improve execution through lightweight process improvements (Agile done right, not heavy).
                        </p>
                        <div className="service-tags">
                            <span className="service-tag">Leadership</span>
                            <span className="service-tag">Mentorship</span>
                            <span className="service-tag">Process</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

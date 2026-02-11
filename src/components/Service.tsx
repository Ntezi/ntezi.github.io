export function Service() {
    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Services I Provide</h2>
                    <p>Strategic, hands-on services that help teams move from idea to reliable production.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-compass"></i></div>
                        <h4 className="title"><a href="">Technical Strategy & Architecture</a></h4>
                        <p className="description">
                            Turn business goals into a practical technical roadmap (phased delivery, risks, dependencies, milestones).
                            <br />
                            Define target architecture: service boundaries, data flows, API contracts, integration patterns.
                            <br />
                            Choose the right stack for the constraints (on-prem vs cloud, cost, skills, compliance, latency).
                            <br />
                            Produce actionable artifacts: architecture diagram, ADRs, API spec outline, deployment blueprint, backlog.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-diagram-3"></i></div>
                        <h4 className="title"><a href="">System & Microservices Design</a></h4>
                        <p className="description">
                            Break monoliths into reliable services (domain boundaries, ownership, contracts, versioning).
                            <br />
                            Design event-driven or request/response systems (queues/streams, idempotency, retries).
                            <br />
                            Build for failure: timeouts, circuit breakers, backpressure, graceful degradation.
                            <br />
                            Establish consistency and data patterns (outbox, saga, CDC, caching).
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-laptop"></i></div>
                        <h4 className="title"><a href="">Full-Stack Product Delivery (Hands-on)</a></h4>
                        <p className="description">
                            Deliver features end-to-end: UI + API + database + infrastructure.
                            <br />
                            Implement robust data management: schema design, migrations, performance tuning, indexing.
                            <br />
                            Build real-world workflows: validation, approvals, audit trails, role-based access.
                            <br />
                            Ship iteratively with clean engineering practices (tests, code reviews, standards).
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-code-square"></i></div>
                        <h4 className="title"><a href="">API Engineering & Integrations</a></h4>
                        <p className="description">
                            Design and implement clean APIs (REST, versioning, pagination, error models).
                            <br />
                            Integrate with third-party and enterprise systems (banking, telco, payments, tax/EBM-like systems).
                            <br />
                            Build integration layers: adapters, mapping, reconciliation, monitoring, and alerting.
                            <br />
                            Produce high-quality API documentation (Swagger/Postman-style).
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-shield-check"></i></div>
                        <h4 className="title"><a href="">Platform Reliability & Production Readiness</a></h4>
                        <p className="description">
                            Production hardening: logging, metrics, tracing, health checks, SLAs/SLOs.
                            <br />
                            Observability setup and dashboards; incident playbooks and on-call readiness.
                            <br />
                            Improve uptime and performance: profiling, bottleneck removal, query optimization.
                            <br />
                            Introduce reliability patterns: rate limits, retries, idempotency, safe rollouts.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-server"></i></div>
                        <h4 className="title"><a href="">DevOps, CI/CD, Containers, and Release Engineering</a></h4>
                        <p className="description">
                            Implement CI/CD pipelines to reduce lead time and release risk.
                            <br />
                            Containerize services (Docker) and prepare for scalable deployments (Kubernetes where relevant).
                            <br />
                            Improve environments: secrets management, config strategy, deployment automation.
                            <br />
                            Establish release practices: feature flags, canary/blue-green, rollback strategy.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-bar-chart"></i></div>
                        <h4 className="title"><a href="">Data Engineering for Analytics & Reporting</a></h4>
                        <p className="description">
                            Build data pipelines (ETL/ELT), data quality checks, and operational reporting datasets.
                            <br />
                            Design reporting-friendly models (star schemas, marts, incremental loads).
                            <br />
                            Enable decision dashboards (e.g., finance ops, transaction flows, performance KPIs).
                            <br />
                            Automate backups, retention, and recovery processes for business continuity.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-people"></i></div>
                        <h4 className="title"><a href="">Engineering Leadership & Team Enablement</a></h4>
                        <p className="description">
                            Delivery leadership: planning, estimation, sprint execution, stakeholder alignment.
                            <br />
                            Code quality systems: review standards, linting, testing strategy, definition of done.
                            <br />
                            Mentoring and upskilling: junior-to-mid growth plans, interview coaching, technical workshops.
                            <br />
                            Improve execution through lightweight process improvements (Agile done right, not heavy).
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box">
                        <div className="icon"><i className="bi bi-database"></i></div>
                        <h4 className="title"><a href="">Database Administration (DBA)</a></h4>
                        <p className="description">
                            Performance tuning (slow queries, indexes, execution plans).
                            <br />
                            Backups, restore testing, and disaster recovery readiness.
                            <br />
                            Security & access control (roles, least privilege, auditing).
                            <br />
                            Maintenance & monitoring (capacity, integrity, scheduled jobs).
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

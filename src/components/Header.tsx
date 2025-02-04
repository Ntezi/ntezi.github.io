import Link from "next/link";

export function Header() {
    return (
        <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <picture>
                        <img src="/assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
                    </picture>
                    <h1 className="text-light"><Link href="/">Marius <br/> Ngaboyamahina</Link></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://twitter.com/mariusntezi" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/ntezi" className="facebook"><i
                            className="bx bxl-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/ntezi/" className="linkedin"><i
                            className="bx bxl-linkedin"></i></a>
                        <a href="https://github.com/Ntezi" className="linkedin"><i className="bx bxl-github"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i>
                            <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i>
                            <span>About</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i>
                            <span>Resume</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i>
                            <span>Portfolio</span></a></li>
                        <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i>
                            <span>Services</span></a></li>
                        {/*<li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

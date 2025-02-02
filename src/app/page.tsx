import {Header} from "@/components/Header";
import {Intro} from "@/components/Intro";
import {About} from "@/components/About";
import {Skills} from "@/components/Skills";
import {Resume} from "@/components/Resume";
import {Portfolio} from "@/components/Portfolio";
import {Service} from "@/components/Service";
import {Footer} from "@/components/Footer";
import Script from "next/script";

export default function Home() {
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <Header/>
            <Intro/>
            <main id="main">
                <About/>
                <Skills/>
                <Resume/>
                <Portfolio/>
                <Service/>
            </main>
            <Footer/>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>

            <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="lazyOnload"/>
            <Script src="/assets/vendor/aos/aos.js" strategy="lazyOnload"/>
            <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="lazyOnload"/>
            <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload"/>
            <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload"/>
            <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload"/>
            <Script src="/assets/vendor/typed.js/typed.umd.js" strategy="lazyOnload"/>
            <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="lazyOnload"/>
            <Script src="/assets/vendor/php-email-form/validate.js" strategy="lazyOnload"/>
            <Script src="/assets/js/main.js" strategy="lazyOnload"/>
        </>
    );
}

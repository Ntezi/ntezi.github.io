import Head from 'next/head'
import {Header} from "../components/Header";
import {Intro} from "../components/Intro";
import {Footer} from "../components/Footer";
import {About} from "../components/About";
import Script from "next/script";
import {Skills} from "../components/Skills";
import {Resume} from "../components/Resume";
import {Portfolio} from "../components/Portfolio";
import {Service} from "../components/Service";


export default function Home() {
  return (
    <>
	    <Head>
		    <meta charSet="utf-8"/>
		    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

		    <title>Marius Ngaboyamahina</title>
		    <meta content="Portfolio" name="description"/>
		    <meta content="Portfolio" name="keywords"/>

		    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
		    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
		    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

		    <link
			    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
			    rel="stylesheet"/>

		    <link href="/assets/vendor/aos/aos.css" rel="stylesheet"/>
		    <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
		    <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
		    <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
		    <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
		    <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

		    <link href="/assets/css/style.css" rel="stylesheet"/>
	    </Head>
	    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
	    <Header/>
	    <Intro/>
	    <main id="main">
		    <About/>
		    <Skills/>
		    <Resume/>
		    {/*<Portfolio/>*/}
		    <Service/>
	    </main>
	    <Footer/>
	    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
		    className="bi bi-arrow-up-short"></i></a>


	    <Script src="/assets/vendor/purecounter/purecounter_vanilla.js"></Script>
	    <Script src="/assets/vendor/aos/aos.js"></Script>
	    <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
	    <Script src="/assets/vendor/glightbox/js/glightbox.min.js"></Script>
	    <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
	    <Script src="/assets/vendor/swiper/swiper-bundle.min.js"></Script>
	    <Script src="/assets/vendor/typed.js/typed.umd.js"></Script>
	    <Script src="/assets/vendor/waypoints/noframework.waypoints.js"></Script>
	    <Script src="/assets/vendor/php-email-form/validate.js"></Script>
	    <Script src="/assets/js/main.js"></Script>
    </>
  )
}

import {useEffect, useRef} from "react";
import Typed from 'typed.js';


export function Intro() {
	const el = useRef(null);

	// useEffect(() => {
	// 	// @ts-ignore
	// 	const typed = new Typed(el.current, {
	// 		strings: ["Software Engineer"],
	// 		startDelay: 300,
	// 		typeSpeed: 100,
	// 		backSpeed: 100,
	// 		backDelay: 100
	// 	});
	//
	// 	return () => {typed.destroy();};
	// }, []);

	return (
		<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
			<div className="hero-container" data-aos="fade-in">
				<h1 style={{textAlign: "center"}}>Marius <br/> Ngaboyamahina</h1>
				{/*<p>I&apos;m <span className="typed" ref={el}></span></p>*/}
				<p>I&apos;m <span className="typed" data-typed-items="Software Engineer"></span></p>
			</div>
		</section>
	);
}

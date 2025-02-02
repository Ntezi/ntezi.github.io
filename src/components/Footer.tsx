export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer id="footer">
			<div className="container">
				<div className="copyright">
					&copy; {currentYear} <strong><span>ntezi.github.io</span></strong>
				</div>
				<div className="credits">
					Developed by <a href="https://ntezi.github.io/">Marius Ngaboyamahina</a>
				</div>
			</div>
		</footer>
	);
}

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize">
				copyright BillyBoard on Base &copy; {year}
			</footer>
		</>
	);
};

export default Footer;

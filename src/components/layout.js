import Meta from "./meta";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}

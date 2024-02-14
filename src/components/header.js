import Image from "next/image";
import Link from "next/link";


const Header = () => {
	return (
		<header className="shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
			<div className="flex flex-wrap items-center justify-between gap-5 relative">
				<Link  href="/">
					<Image
						width={"50"}
						height={"50"}
						src="https://play-lh.googleusercontent.com/WrRv1RL91_GHtgOIZNpQKy2PGrVvVnBmHEQokggkNpeyVNzE-cPauRSFg1vQfYbkcQ=w480-h960-rw"
						alt="logo"
						className="rounded"
					/>
				</Link>
				<div className="flex lg:order-1 max-sm:ml-auto">
					<Link href="/blogs/add" className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-primary-50 bg-primary-50 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-primary-50">
						Add Blog
					</Link>
					<button id="toggle" className="lg:hidden ml-7">
						<svg
							className="w-7 h-7"
							fill="#000"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<ul
					id="collapseMenu"
					className="lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
				>
					<li className="max-lg:border-b max-lg:bg-primary-50 max-lg:py-2 px-3 max-lg:rounded">
						<Link
							href="/"
							className="lg:hover:text-primary-50 text-primary-50 max-lg:text-white block font-semibold text-[15px]"
						>
							Home
						</Link>
					</li>
					<li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
						<Link
							href="/"
							className="lg:hover:text-primary-50 text-gray-500 block font-semibold text-[15px]"
						>
							Team
						</Link>
					</li>
					<li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
						<Link
							href="/"
							className="lg:hover:text-primary-50 text-gray-500 block font-semibold text-[15px]"
						>
							Feature
						</Link>
					</li>
					<li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
						<Link
							href="/"
							className="lg:hover:text-primary-50 text-gray-500 block font-semibold text-[15px]"
						>
							Blog
						</Link>
					</li>
					<li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
						<Link
							href="/"
							className="lg:hover:text-primary-50 text-gray-500 block font-semibold text-[15px]"
						>
							About
						</Link>
					</li>
					<li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
						<Link
							href="/"
							className="lg:hover:text-primary-50 text-gray-500 block font-semibold text-[15px]"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;

import Card from "./blogCard";
import Image from "next/image";

const BlogList = ({ blogs }) => {
	return (
		<div className="bg-[#f8f9ff] font-[sans-serif] text-[#333] text-[15px]">
			<div className="relative">
				<div className="px-4 sm:px-10">
					<div className="max-w-4xl mx-auto text-center relative z-10 pt-10">
						<h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
							Read about the latest stories
						</h1>
						<p className="text-base">
							The latest tech news about the worlds best (and sometimes worst)
							hardware, apps, and much more. From top companies like Google and
							Apple to tiny startups vying for your attention, Verge Tech has
							the latest in what matters in technology daily.
						</p>
					</div>
					<hr className="my-12 border-gray-300" />
				</div>
				<Image
					src="./images/bg-effect.svg"
					className="absolute inset-0 w-full h-full"
					width={200}
					alt=""
					height={200}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
				{(blogs || []).map((blog, index) => {
						return <Card {...blog} key={blog.id || index} />;
					})}
			</div>
			<div className="bg-blue-100 py-20 sm:px-6 px-4 rounded-3xl mt-32">
				<div className="max-w-4xl w-full mx-auto text-center">
					<h2 className="md:text-4xl text-3xl font-extrabold">
						Subscribe Our Newsletter
					</h2>
					<p className="mt-6">
						Stay updated with our latest news and exclusive offers. Join our
						community today!
					</p>
					<div className="mt-10 bg-white flex items-center p-2 max-w-xl mx-auto rounded-2xl border border-gray-300">
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full bg-transparent py-4 px-2 border-none outline-none"
						/>
						<button className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogList;

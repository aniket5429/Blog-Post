import Link from 'next/link'

const BlogCard = props => {
		return (
				<div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
						<div className="bg-white cursor-pointer rounded overflow-hidden group">
								<div className="p-6">
										<h3
												className="text-xl font-bold text-[#333]  mb-2 line-clamp-2"
												style={{ height: '5rem' }}
										>
												{props.title}
										</h3>
										<p
												className="mt-2 text-sm text-gray-400 overflow-hidden line-clamp-2"
												dangerouslySetInnerHTML={{ __html: props.content }}
										/>
										<Link
												href={'/blogs/' + props.id}
												type="button"
												className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-primary-50 hover:bg-primary-600"
										>
												Read More
										</Link>
								</div>
						</div>
				</div>
		)
}

export default BlogCard

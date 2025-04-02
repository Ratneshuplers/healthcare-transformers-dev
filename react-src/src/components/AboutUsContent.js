import React from "react"
import '../css/AboutUs.scss'
import MostPopular from "./MostPopular"
import Content from './Content'

function AboutUsContent ({data}) {
	return (
		<section className="Aboutus-main">
			<div className='container'>
				<div className="row">
					<div className='col-12 col-md-9'>
						<div className='text'>
							<Content html={data.content.top_area} rootClass="" />
							{data.content.bottom_box_area &&
								<div className='innertext'>
									<Content html={data.content.bottom_box_area} rootClass="" />
								</div>
							}
						</div>
					</div>
					<div className='col-12 col-md-3'>
						{data.popularPosts && data.popularPosts.posts && data.popularPosts.posts.length > 0 && (
							<MostPopular data={data.popularPosts} />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUsContent;

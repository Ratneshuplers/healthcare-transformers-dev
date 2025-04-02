import React from "react";
import '../css/FeaturedArticle.scss';
import articleMainImage from '../images/art-main-blank.png';

function LatestArticle ({data}) {
	if (!data) {
		return
	}
	const imageUrl = data?.images?.['1440x616'] ? data.images['1440x616'] : articleMainImage;
	return (
		<section id="latest-article" className="features-article" style={{backgroundImage: `url(${imageUrl})`}}>
			<a href={data.url}>
				<div className='overlay'>
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-10">
								<div className="text">
									<div className='texttitile'>
										<h1>{data.title}</h1>
										<div className='article-meta'>
											{data?.authors?.map(item => item.title).join(', ')} | {data.publishedDate}
										</div>
									</div>
									<span className='btn-main readmore'>Read more</span>
								</div>
								<div className='img'>
									<img src={imageUrl} alt={data.title} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</section>
	)
}
export default LatestArticle;
import React from "react";
import '../css/MorePopular.scss';
import PopularArticleList from "./PopularArticleList";

function PopularArticles ({data}) {
	return (
		data.posts && data.posts.length > 0 &&
		<section className="padding-1 gr-2x">
			<div className="container">
				<div className="row">
					{
						data.acf.sectionTitle && (
							<div className='col-12'>
								<h2 className='h2-title-mb'>{data.acf.sectionTitle}</h2>
							</div>
						)
					}
					{data.posts.map((post, index) => (
						<div className={`col-12 col-lg-4 ${index === data.posts.length -1 ? "last-in-list" : ""}`} key={index}>
							<PopularArticleList data={post} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default PopularArticles;
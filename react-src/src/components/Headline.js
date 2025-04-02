import React from "react";
import '../css/Headline.scss';

function scrollToNextEl(e) {
	e.preventDefault()
	const latestArticleSectionEl = document.getElementById('latest-article');
	if (latestArticleSectionEl) {
		latestArticleSectionEl.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

function Headline ({data}) {
	return (
		<section className="homebanner">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8">
						<div className="text">
							<h1 className="display-small">{data?.acf?.title}</h1>
							<p>{data?.acf?.description}</p>
						</div>
						<div className="scroll-down">
							<a href={`${window.location.href}#`} onClick={scrollToNextEl}>{data?.acf?.scroll_to_down_title}</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Headline;
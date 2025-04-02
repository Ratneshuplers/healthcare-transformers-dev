import React from "react";
import '../css/InnerBanner.scss';
import '../css/AuthorListBanner.scss';
import Breadcrumbs from "./Breadcrumbs";
import Content from "./Content";

function SectionHeading ({data}) {
	return (
		<section className={`${data.className ?? 'inner-banner'}`}>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8">
						{ data.breadcrumb && data.breadcrumb.length > 0 && <Breadcrumbs items={data.breadcrumb} /> }
						<div className="text">
							<h1>{data?.title}</h1>
							{
								data?.description &&
								<Content html={`<p>${data?.description}</p>`} rootClass="" />
							}
							{data.link &&
								<div className="thanks-butttons">
								<a className="btn-main" href={data.link.url} target={data.link.target}>{data.link.title}</a>
								</div>
							}
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}

export default SectionHeading;
import React from "react";
import '../css/AuthorDetailsBanner.scss';
import Breadcrumbs from "./Breadcrumbs";

function AuthorHeading ({data}) {
	return (
		<section className="author-details-banner">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{ data.breadcrumb && data.breadcrumb.length > 0 && <Breadcrumbs items={data.breadcrumb} /> }
						<div className="text">
							<h1>{data.author.title}
								<small>
									{data.author.authorDegree &&
										<React.Fragment>
											{data.author.authorDegree} <br />
										</React.Fragment>
									}
									{data.author.authorProfession}
								</small>
							</h1>
							<div className='row'>
								<div className='col-12 col-md-8'>
									<p>{data.author.title} {data.author.authorDescription}</p>
								</div>
								<div className='col-12 col-md-4'>
									<img src={data?.author?.images?.['472x265']} alt=""></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AuthorHeading;
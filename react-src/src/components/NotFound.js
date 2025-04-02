import React from "react";

function NotFound ({data}) {
	return (
		<section className='content-main 404-not-found'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-9'>
						<h1>{data.title}</h1>
						<p>{data.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default NotFound;

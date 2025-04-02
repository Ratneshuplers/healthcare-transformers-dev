import React from "react";
import Content from './Content'

function PageContent ({data}) {
	return (
		<section className='content-main article-main'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-9'>
						<Content html={data.html} rootClass="text" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default PageContent;

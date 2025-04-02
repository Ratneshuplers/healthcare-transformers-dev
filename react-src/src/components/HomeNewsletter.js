import React  from 'react'
import '../css/SubscribeHome.scss'
import Content from './Content'

function HomeNewsletter ({data}) {
	return (
		<section className="padding-1 gr-1">
			<div className="container">
				<div className="row">
					<div className='col-12 col-md-8'>
						<div className='homesubscribe-text'>
							<h2>{data?.acf?.left_block?.title}</h2>
							{
								data?.acf?.left_block?.description_lines && data?.acf?.left_block?.description_lines.length > 0 &&
								<ul>
									{data?.acf?.left_block?.description_lines.map((description_line, index) => (
										<li key={index}>{description_line?.description}</li>
									))}
								</ul>
							}
						</div>
					</div>
					<div className='col-12 col-md-4'>
						{
							data?.acf?.right_block?.marketo_form_id &&
							<Content html={`<form id="mktoForm_${data.acf.right_block.marketo_form_id}"></form>`} rootClass="" />
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeNewsletter;
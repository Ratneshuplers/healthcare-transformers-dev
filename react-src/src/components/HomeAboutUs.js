import React from "react";
import '../css/HomeAboutUs.scss';

function HomeAboutUs ({data}) {
	return (
		<section className='padding-2 twocoltext'>
			<div className="container">
				<div className="row">
					<div className='col-12 col-md-6 col-lg-7'>
						{ data?.acf?.left_block?.imageSrc && <img src={data.acf.left_block.imageSrc} alt="img" /> }
					</div>
					<div className='col-12 col-md-6 col-lg-5'>
						<div className='text'>
							{ data.acf.right_block.title && <h2>{data.acf.right_block.title}</h2> }
							{ data.acf.right_block.description && <p>{data.acf.right_block.description}</p> }
							{ data.acf.right_block.button && <a href={data.acf.right_block.button.url} target={data.acf.right_block.button.target} className='btn-outline'>{data.acf.right_block.button.title}</a> }
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeAboutUs;
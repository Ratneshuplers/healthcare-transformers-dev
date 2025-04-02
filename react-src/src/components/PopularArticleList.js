import React from "react";
import '../css/MorePopularList.scss';

function PopularArticleList ({data}) {
	return (
		<div className='most-Popular-list'>
			<div className='text'>
				<div className="catwrap">{data.categories.map((category, index) => (
					<a href={category.url} className='articletitlecategory' key={category.id}>{category.title}{index < data.categories.length - 1 ? ', ': ''}</a>
				))}</div>
				<h4>
					<a href={data.url}>{data.title}</a>
					<a href={data.url} className='arrow1'>
						<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.586001 9.00003L15.172 9.00003L9.879 14.293L11.293 15.707L19 8.00003L11.293 0.29303L9.879 1.70703L15.172 7.00003L0.586001 7.00003L0.586001 9.00003Z" className='fillblue'/>
						</svg>
					</a>
				</h4>
				<p>{data.authors.map(item => item.title).join(', ')}</p>
			</div>

		</div>
	);
}

export default PopularArticleList;
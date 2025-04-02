import React from "react";
import '../css/SingleArticleList.scss';
import articleBlankImage from '../images/art1-blank.png';

function SingleArticleList ({data}) {
	const articleImage = data?.images?.['346x194'] ? data.images['346x194'] : articleBlankImage
	return (
		<div className='single-article-list'>
			<a href={data.url}>
				<div className='list-thumb'>
					<img src={articleImage} alt=""></img>
					<span>{data?.contentType}</span>
				</div>
				<div className='text'>
				<span className='articletitlecategory'>
					{data.primaryCategory.length > 0 ? data.primaryCategory : data?.categoryNames?.join(', ')}
				</span>
				<h5>
					{/*<span>{data.title.split(' ').slice(0, 11).join(' ')}{data.title.split(' ').length > 11 ? '...' : ''}</span>*/}
					<span>{data.title.substring(0,79)}{data.title.length > 79 ? '...' : ''}</span>
					<big className='mobile-arrow'>
						<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.586 13.5L17.172 13.5L11.879 18.793L13.293 20.207L21 12.5L13.293 4.79303L11.879 6.20703L17.172 11.5L2.586 11.5L2.586 13.5Z" fill="#0B41CD"/>
						</svg>
					</big>
				</h5>
				<p>
					<small className="twoline-text">
					{data?.authors?.map(item => item.title).join(', ')}
					</small>
					<span>{data.publishedDate} {
						data.avgReadingTime ? ` | ${data.avgReadingTime}` : ''
					}</span>
				</p>
			</div>
			</a>
		</div>
	);
}

export default SingleArticleList;